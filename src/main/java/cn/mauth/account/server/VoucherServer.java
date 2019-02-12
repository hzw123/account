package cn.mauth.account.server;

import cn.mauth.account.common.base.BaseServer;
import cn.mauth.account.common.bean.Parameters;
import cn.mauth.account.common.bean.VoucherData;
import cn.mauth.account.common.bean.VoucherParam;
import cn.mauth.account.common.domain.settings.Voucher;
import cn.mauth.account.common.domain.settings.VoucherLine;
import cn.mauth.account.common.util.DateUtil;
import cn.mauth.account.dao.SubjectDao;
import cn.mauth.account.dao.VoucherDao;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class VoucherServer extends BaseServer<VoucherDao,Voucher>{

    @Autowired
    private SubjectDao subjectDao;

    public VoucherServer(VoucherDao dao) {
        super(dao);
    }

    @Override
    protected Predicate toPredicate(List<Predicate> list, Voucher voucher, Root root, CriteriaQuery query, CriteriaBuilder cb) {
        return this.and(list,cb);
    }

    @Override
    public Page<Voucher> page(Voucher voucher, Pageable pageable) {
        Page<Voucher> page=super.page(voucher, pageable);

        this.sort(page);

        return page;
    }

    private void sort(Page<Voucher> page){
        page.getContent().stream().forEach(r->{
            if(r.getEntries().size()==2)
                r.getEntries().sort((a,b)->{
                    return a.getDc().getCode()<b.getDc().getCode()?1:0;
                });
        });
    }


    @Override
    public Page<Voucher> page(Pageable pageable) {

        Page<Voucher> page=super.page(pageable);

        this.sort(page);

        return page;
    }

    @Override
    public List<Voucher> findAll(Voucher voucher) {
        List<Voucher> list=super.findAll(voucher);

        this.sort(list);

        return list;
    }

    @Override
    public List<Voucher> findAll(Specification<Voucher> specification) {

        List<Voucher> list=super.findAll(specification);

        this.sort(list);

        return list;
    }

    @Override
    public Page<Voucher> findAll(Specification<Voucher> specification, Pageable pageable) {
        Page<Voucher> page=super.findAll(specification, pageable);

        this.sort(page);

        return page;
    }

    private void sort(List<Voucher> list){
        list.forEach(r->{
            if(r.getEntries().size()==2)
                r.getEntries().sort((a,b)->{
                    return a.getDc().getCode()<b.getDc().getCode()?1:0;
                });
        });
    }

    @Override
    public int save(Voucher voucher) {
        if(voucher.getVchDate()==null){
            voucher.setVchDate(new Date());
        }
        return super.save(voucher);
    }

    @Override
    public int update(Voucher voucher) {

        Voucher old=this.dao.getOne(voucher.getId());

        if(voucher.getVchDate()==null)
            voucher.setVchDate(old.getVchDate());
        if(voucher.getAttachments()==0)
            voucher.setAttachments(old.getAttachments());
        if(StringUtils.isEmpty(voucher.getName()))
            voucher.setName(old.getName());
        if(voucher.getNum()==0)
            voucher.setNum(old.getNum());
        if(StringUtils.isEmpty(voucher.getNote()))
            voucher.setNote(old.getNote());

        return super.update(voucher);
    }

    @Transactional
    public boolean deleteVoucher(Long accountId,VoucherParam body){

        try {
            List<Voucher> list=this.dao.findAll((root, query, cb) -> {
                List<Predicate> param=new ArrayList<>();

                if(accountId!=null && accountId>0)
                    param.add(cb.equal(root.get("accountId"),accountId));

                if(StringUtils.isNotEmpty(body.getVchDate()))
                    param.add(cb.equal(root.get("vchDate"), DateUtil.parseYM(body.getVchDate())));


                if(StringUtils.isNotEmpty(body.getVchGroup()))
                    param.add(cb.equal(root.get("name"), body.getVchGroup()));

                if(body.getVchNum()>0)
                    param.add(cb.equal(root.get("num"),body.getVchNum()));

                if(body.isIds())
                    param.add(cb.in(root.get("id")).value(body.getIdSet()));

                if(body.getId()!=null&&body.getId()>0)
                    param.add(cb.equal(root.get("id"),body.getId()));

                return cb.and(param.toArray(new Predicate[param.size()]));
            });

            this.dao.deleteAll(list);
        }catch (Exception e){
            logger.debug(e.getMessage());
            return false;
        }

        return true;

    }

    public String validation(Voucher voucher){
        if(StringUtils.isEmpty(voucher.getName()))
            return "凭证号不能为空";
        if(StringUtils.isEmpty(voucher.getPreparedBy()))
            return "制单人不能为空";
        if(voucher.getVchDate()!=null)
            return "凭证日期不能为空";
        if(voucher.getAccountId()==null)
            return "账套不能为空";
        if(voucher.getEntries()!=null&&voucher.getEntries().size()==2){
            String message=null;
            for (VoucherLine line:voucher.getEntries()) {
                message=this.isLine(line);
                if(StringUtils.isNotEmpty(message)){
                    return message;
                }
            }

            int d1=voucher.getEntries().get(0).getDc().getCode();
            int d2=voucher.getEntries().get(1).getDc().getCode();
            if(d1+d2!=3){
                return "凭证资金填写错误";
            }
        }else{
            return "凭证详情不能为空";
        }

        return null;
    }

    private String isLine(VoucherLine entries)  {
        if(entries.getAmount()<=0)
            return "资金额不能为0";
        if(StringUtils.isEmpty(entries.getCur()))
            return "货币编码不能为空";
        if(StringUtils.isEmpty(entries.getExp()))
            return "资金摘要不能为空";
        if(StringUtils.isEmpty(entries.getSubCode()))
            return "科目编码不能为空";
        if(entries.getDc()==null)
            return "资金流向不能为空";
        if(this.subjectDao.countByCode(entries.getSubCode())<=0)
            return "科目编码subCode:"+entries.getSubCode()+"错误";

        entries.setSubName(this.subjectDao.findNameByCode(entries.getSubCode()));
        return null;
    }

    public Specification specification(Parameters param){

        return (root, query, cb) -> {

            List<Predicate> list=new ArrayList<>();

            String start=param.getStart();

            String end=param.getEnd();

            int startNum=param.getStartVNum();

            int endNum=param.getEndVNum();

            if(this.isLong(param.getAccountId()))
                list.add(cb.equal(root.get("accountId"),param.getAccountId()));

            if(this.isLong(param.getVid()))
                list.add(cb.equal(root.get("id"),param.getVid()));

            if(startNum>0)
                list.add(cb.gt(root.get("num"),startNum));

            if(endNum>startNum && endNum>0)
                list.add(cb.ge(root.get("num"),endNum));

            if(StringUtils.isNotEmpty(start)){
                list.add(cb.lessThanOrEqualTo(root.get("vchDate"), DateUtil.parseYM(start)));
            }

            if(StringUtils.isNotEmpty(end))
                list.add(cb.greaterThanOrEqualTo(root.get("vchDate"),DateUtil.parseYM(end)));

            return this.and(list,cb);
        };
    }

    public List<String> findCode(){
        return this.subjectDao.findCode();
    }

    public List<VoucherData> statisticalData(Long accountId,String start,String end){
        List<Object[]> list=null;

        if(accountId==null || accountId==0){
            list=this.dao.statisticalData();
        }else{
            list=this.dao.statisticalData(accountId);
        }

        Object[] objs=new Object[]{"","合计",0.00,0.00};

        list.forEach(r->{
            objs[2]=(double)objs[2]+(double)r[2];
            objs[3]=(double)objs[3]+(double)r[3];
        });

        if(list==null){
            list=new ArrayList<>();
        }

        list.add(objs);

        return this.toData(list);

    }

    private List<VoucherData> toData(List<Object[]> list){
        List<VoucherData> vList=new ArrayList<>();

        list.forEach(r->{
            vList.add(new VoucherData(r[0].toString(),r[1].toString(),(double)r[2],(double)r[3]));
        });

        return vList;
    }
}

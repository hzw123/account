package cn.mauth.account.common.base;

import cn.mauth.account.common.util.PageInfo;
import cn.mauth.account.common.util.PageUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public abstract class BaseServer<D extends BaseDao,T> {

    protected   final Logger logger= LoggerFactory.getLogger(this.getClass());

    protected final D dao;

    public BaseServer(D dao) {
        this.dao = dao;
    }

    public PageInfo listForPage(int pageCurrent, int pageSize, T t){

        Page<T> page=this.page(t,PageUtil.getPageable(pageCurrent,pageSize));

        return PageUtil.of(page);
    }

    public Page<T> page(T t, Pageable  pageable){
        return this.dao.findAll(this.specification(t),pageable);
    }

    public Page<T> page(Pageable  pageable){
        return this.dao.findAll(pageable);
    }

    private Specification<T> specification(T t){
        return ((root, query, cb) -> {
            List<Predicate> list=new ArrayList<>();
            return this.toPredicate(list,t,root,query,cb);
        });
    }

    public List<T> findAll(T t){
        return this.dao.findAll(this.specification(t));
    }


    protected abstract Predicate toPredicate(List<Predicate> list, T t,Root root, CriteriaQuery query, CriteriaBuilder cb);

    protected Predicate and(List<Predicate> list, CriteriaBuilder cb){

        return cb.and(list.toArray(new Predicate[list.size()]));
    }



    public int save(T t){
        this.dao.save(t);
        return 1;
    }

    public int update(T t){
        this.dao.save(t);
        return 1;
    }

    public int deleteById(long id){
        this.dao.deleteById(id);
        return 1;
    }

    public T getById(long id) {
        return (T)dao.findById(id).get();
    }

    protected String like(String str){
        return PageUtil.like(str);
    }

    public boolean isLong(Long var){

        return var!=null&&var>0;
    }

    public Page<T> findAll(Specification<T> specification,Pageable pageable){
        return this.dao.findAll(specification,PageUtil.getPageable(pageable));
    }

    public List<T> findAll(Specification<T> specification){
        return this.dao.findAll(specification);
    }

    public List<T> saveAll(List<T> list){
        return this.dao.saveAll(list);
    }

    public String validation(T t){
        return null;
    }
}

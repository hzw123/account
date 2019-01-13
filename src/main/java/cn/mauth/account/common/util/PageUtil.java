package cn.mauth.account.common.util;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public final class PageUtil {
    private static final int SIZE=10;
    private static final Sort SORT=Sort.by(Sort.Direction.DESC,"id");

    public static <T> PageInfo of(Page<T> page){
        return PageInfo.of(
                (int)page.getTotalElements(),
                page.getTotalPages(),
                page.getNumber(),
                page.getSize(),page.getContent());
    }

    public static Pageable getPageable(int page,int size,Sort sort){

        page=page-1;

        page=page>0?page:0;

        size=size>0?size:SIZE;

        sort=sort!=null?sort:SORT;

        Pageable pageable=PageRequest.of(page,size,sort);

        return pageable;
    }

    public static Pageable getPageable(int page,int size){
        return PageUtil.getPageable(page,size,null);
    }

    public static String like(String var){
        StringBuffer sb=new StringBuffer();
        sb.append("%");
        sb.append(var);
        sb.append("%");
        return sb.toString();
    }
}

package cn.mauth.account.common.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public final class DateUtil {

    private static final SimpleDateFormat sdf=new SimpleDateFormat("yyyyMM");

    public static Date parseYM(String source){
        try{
            return sdf.parse(source);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}

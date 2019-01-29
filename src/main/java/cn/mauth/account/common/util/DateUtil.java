package cn.mauth.account.common.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public final class DateUtil {

    private static final SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMdd");

    private static final String[] MONTH_VALUE={"01","02","03","04","05","06","07","08","09","10","11","12",};
    private static final String[] WEEK_VALUE={"星期日","星期一","星期二","星期三","星期四","星期五","星期六"};

    public static Date parseYM(String source){
        try{
            return sdf.parse(source);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public static Calendar calendar(){
        return Calendar.getInstance();
    }


    public static String getNowYear(){
        int year=calendar().get(Calendar.YEAR);
        return year+"年";
    }

    public static String getNowMonth(){
        int month=calendar().get(Calendar.MONTH);
        return MONTH_VALUE[month]+"月";
    }

}

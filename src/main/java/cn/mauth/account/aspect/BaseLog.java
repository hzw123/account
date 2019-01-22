package cn.mauth.account.aspect;

import cn.mauth.account.common.util.HttpUtils;
import com.alibaba.fastjson.JSON;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

@Aspect
public abstract class BaseLog {

    private ThreadLocal<Long> threadLocal=new ThreadLocal<>();
    protected static final Logger logger= LoggerFactory.getLogger(BaseLog.class);

    @Pointcut
    public abstract void pointcutMethod();

    @Before("pointcutMethod()")
    public void before(JoinPoint joinPoint){
        threadLocal.set(System.currentTimeMillis());
    }

    @After("pointcutMethod()")
    public void after(JoinPoint joinPoint){
        String info=this.addAfter();
        this.log(joinPoint,info);
    }

    protected void log(JoinPoint joinPoint,String info){
        HttpServletRequest request= HttpUtils.getRequest();

        String uri=request.getRequestURI();
        String type=request.getMethod();

        String method=joinPoint.getSignature().getName();
        String className=joinPoint.getSignature().getDeclaringTypeName();

        String param= Arrays.toString(joinPoint.getArgs());
        long time=System.currentTimeMillis()-threadLocal.get();
        logger.info("\n{}\n{\n\turi:{},\n\ttype:{},\n\tclassName:{}," +
                        "\n\tmethod:{},\n\tparam:{},\n\ttimeLong:{}\n}",
                info,uri,type,className,method, param,time);
    }

    protected abstract String addAfter();

    protected String info(String info){
        StringBuffer sb=new StringBuffer();
        sb.append("---------------");
        sb.append(info);
        sb.append("---------------");
        return sb.toString();
    }
}

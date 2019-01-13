package cn.mauth.account.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Order(1)
@Component
public class LogView extends BaseLog{

    @Override
    @Pointcut("execution(public * cn.mauth.account.controller.admin.*.*(..))")
    public void pointcutMethod() {

    }


    @Override
    public void addAfter(JoinPoint joinPoint) {
        logger.warn("logView after log");
    }

}

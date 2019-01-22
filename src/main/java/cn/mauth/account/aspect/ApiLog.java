package cn.mauth.account.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Order(2)
@Component
public class ApiLog extends BaseLog{

    @Pointcut("execution(public * cn.mauth.account.controller.api.*.*(..))")
    public void pointcutMethod() {

    }

    @Override
    public String addAfter() {
        return this.info("api 日志");
    }
}

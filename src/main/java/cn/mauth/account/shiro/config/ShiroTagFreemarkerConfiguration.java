package cn.mauth.account.shiro.config;

import com.jagregory.shiro.freemarker.ShiroTags;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfig;

import javax.annotation.PostConstruct;

@Configuration
public class ShiroTagFreemarkerConfiguration {

    @Autowired
    private FreeMarkerConfig freeMarkerConfig;

    @PostConstruct
    public void setFreeMarkerConfig(){
        freeMarkerConfig.getConfiguration().setSharedVariable("shiro",new ShiroTags());
    }
}

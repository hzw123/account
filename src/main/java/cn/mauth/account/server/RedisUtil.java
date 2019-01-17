package cn.mauth.account.server;

import cn.mauth.account.common.bean.JwtToken;
import cn.mauth.account.common.util.Constants;
import cn.mauth.account.common.util.JwtUtil;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class RedisUtil {

    private static final Logger logger= LoggerFactory.getLogger(RedisUtil.class);

    private static RedisTemplate redisTemplate;

    @Autowired
    public void setRedisTemplate(RedisTemplate redisTemplate){
        RedisUtil.redisTemplate=redisTemplate;
    }

    public static void putString(String key,Object value,long timeout){
        redisTemplate.opsForValue().set(key,value,timeout, TimeUnit.SECONDS);
        logger.info("add redis key:{},value:{},time:{}s;",key,value,timeout);
    }

    public static String getString(String key){
        String value=redisTemplate.opsForValue().get(key).toString();
        logger.info("get redis key:{},value:{}",key,value);
        return value;
    }

    public static boolean exists(String key){
        return redisTemplate.hasKey(key);
    }

    public static void putToken(String token){
        if(StringUtils.isNotEmpty(token)){
            String key=Constants.Redis.PREFIX_SHIRO_ACCESS_TOKEN+token;
            RedisUtil.putString(key,token, JwtUtil.getProperties().getTimeout());
        }
    }


    public static String getToken(String token){
        String value=null;
        if(StringUtils.isNotEmpty(token)){
            String key=Constants.Redis.PREFIX_SHIRO_ACCESS_TOKEN+token;
            value=RedisUtil.getString(key);
        }
        return value;
    }

    public static void putCurrentTimeMillis(String token,String currentTimeMillis){
        if(StringUtils.isNotEmpty(currentTimeMillis)){
            String key=Constants.Redis.PREFIX_SHIRO_CURRENT_TIME_MILLIS+token;
            RedisUtil.putString(key,currentTimeMillis, JwtUtil.getProperties().getTimeout());
        }
    }

    public static String getCurrentTimeMillis(String token){
        String value=null;
        if(StringUtils.isNotEmpty(token)){
            String key=Constants.Redis.PREFIX_SHIRO_CURRENT_TIME_MILLIS+token;
            value=RedisUtil.getString(key);
        }
        return value;
    }

    public static void setToken(JwtToken jwtToken){
        String token=jwtToken.getToken();
    }

}

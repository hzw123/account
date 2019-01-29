package cn.mauth.account.common.util;

import cn.mauth.account.config.jwt.JwtProperties;
import cn.mauth.account.exception.CustomException;
import cn.mauth.account.server.RedisUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.xiaoleilu.hutool.crypto.DigestUtil;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.io.UnsupportedEncodingException;
import java.util.Date;

@Configuration
@EnableConfigurationProperties({JwtProperties.class})
public class JwtUtil {

    private static final Logger log= LoggerFactory.getLogger(JwtUtil.class);

    private static JwtProperties properties;

    public JwtUtil(JwtProperties properties) {
        JwtUtil.properties=properties;
    }

    public static JwtProperties getProperties() {
        return properties;
    }


    /**
     * 校验token是否正确
     * @param sign
     * @return
     */
    public static boolean verify(String sign) throws CustomException{

        try {
            // 帐号加JWT私钥解密
            String secret = JwtUtil.getClaim(sign,Constants.Jwt.ACCOUNT) + Base64Util.decode(properties.getKey());

            Algorithm algorithm = Algorithm.HMAC256(secret);

            JWTVerifier verifier = JWT.require(algorithm).build();

            DecodedJWT jwt = verifier.verify(sign);
            return true;
        } catch (Exception e) {

            String error="JWTToken认证解密错误:";

            log.error(error+e.getMessage());

            throw new CustomException(error+e.getMessage());
        }

    }

    /**
     * 获得Token中的信息无需secret解密也能获得
     * @param sign
     * @return
     */
    public static String getClaim(String sign,String claim) {

        try {

            DecodedJWT jwt = JWT.decode(sign);

            // 只能输出String类型，如果是其他类型返回null
            return jwt.getClaim(claim).asString();

        } catch (JWTDecodeException e) {

            String error="解密Token中的公共信息出现JWTDecodeException异常:";

            log.error(error,e);

            throw new CustomException("解密Token中的公共信息出现JWTDecodeException异常:" + e.getMessage());
        }
    }

    public static void verifyToken(String token)throws Exception{

        if(StringUtils.isEmpty(token)){
            throw new Exception("没有找到 access_token");
        }

        String sign=RedisUtil.getSign(token);

        if(StringUtils.isEmpty(sign)){
            throw new Exception("access_token验证错误");
        }

        JwtUtil.verify(sign);

        String currentTimeMillisRedis= RedisUtil.getCurrentTimeMillis(token);

        if(StringUtils.isEmpty(currentTimeMillisRedis)){
            throw new Exception("access_token:"+token+" 已过期");
        }

        if(!currentTimeMillisRedis.equals(JwtUtil.getCurrentTimeMillis(sign))){
            throw new Exception("access_token:"+token+" 验证错误");
        }

    }

    public static String getAccount(String sign){

        return JwtUtil.getClaim(sign,Constants.Jwt.ACCOUNT);
    }

    public static String getPassword(String sign){
        return JwtUtil.getClaim(sign,Constants.Jwt.PASSWORD);
    }

    public static String getClientId(String sign){
        return JwtUtil.getClaim(sign,Constants.Jwt.CLIENT_ID);
    }

    public static String getCurrentTimeMillis(String sign){
        return JwtUtil.getClaim(sign,Constants.Jwt.CURRENT_TIME_MILLIS);
    }

    /**
     * 生成签名
     * @param account
     * @param password
     * @param clientId
     * @return 返回加密的Token
     */
    public static String sign(String account,String password,String clientId,String currentTimeMillis) {

        try {
            // 帐号加JWT私钥加密
            String secret = account + Base64Util.decode(properties.getKey());

            // 此处过期时间是以毫秒为单位，所以乘以1000
            Date date = new Date(System.currentTimeMillis() + properties.getTimeout()*1000);

            Algorithm algorithm = Algorithm.HMAC256(secret);

            String sign=JWT.create()
                    .withClaim(Constants.Jwt.ACCOUNT, account)
                    .withClaim(Constants.Jwt.PASSWORD, password)
                    .withClaim(Constants.Jwt.CLIENT_ID, clientId)
                    .withClaim(Constants.Jwt.CURRENT_TIME_MILLIS, currentTimeMillis)
                    .withExpiresAt(date)
                    .sign(algorithm);


            return sign;

        } catch (UnsupportedEncodingException e) {

            String error="JWTToken加密出现UnsupportedEncodingException异常:";

            log.error(error +e.getMessage());

            throw new CustomException(error + e.getMessage());
        }
    }

    public static String refreshSign(String token){

        String sign=RedisUtil.getSign(token);

        RedisUtil.deleteToken(token);

        String account=JwtUtil.getAccount(sign);

        String password=JwtUtil.getPassword(sign);

        String clientId=JwtUtil.getClientId(sign);

        return JwtUtil.token(account,password,clientId);
    }

    public static String token(String account,String password,String clientId){

        String currentTimeMillis = String.valueOf(System.currentTimeMillis());

        String sign=sign(account, password, clientId,currentTimeMillis);

        String token=DigestUtil.md5Hex(sign);

        // 设置RefreshToken中的时间戳为当前最新时间戳)
        RedisUtil.putCurrentTimeMillis(token, currentTimeMillis);

        RedisUtil.putSign(token,sign);

        return token;
    }

}

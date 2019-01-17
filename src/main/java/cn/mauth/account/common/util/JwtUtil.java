package cn.mauth.account.common.util;

import cn.mauth.account.config.jwt.JwtProperties;
import cn.mauth.account.exception.CustomException;
import cn.mauth.account.server.RedisUtil;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;
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
     * @param token
     * @return
     */
    public static boolean verify(String token) {

        try {
            // 帐号加JWT私钥解密
            String secret = JwtUtil.getClaim(token,Constants.Jwt.ACCOUNT) + Base64Util.decode(properties.getKey());

            Algorithm algorithm = Algorithm.HMAC256(secret);

            JWTVerifier verifier = JWT.require(algorithm).build();

            DecodedJWT jwt = verifier.verify(token);

            return true;
        } catch (UnsupportedEncodingException e) {

            String error="JWTToken认证解密出现UnsupportedEncodingException异常:";

            log.error(error,e);

            throw new CustomException(error,e);
        }
    }

    /**
     * 获得Token中的信息无需secret解密也能获得
     * @param token
     * @return
     */
    public static String getClaim(String token,String claim) {

        try {

            DecodedJWT jwt = JWT.decode(token);

            // 只能输出String类型，如果是其他类型返回null
            return jwt.getClaim(claim).asString();

        } catch (JWTDecodeException e) {

            String error="解密Token中的公共信息出现JWTDecodeException异常:";

            log.error(error,e);

            throw new CustomException("解密Token中的公共信息出现JWTDecodeException异常:" + e.getMessage());
        }
    }

    public static String getAccount(String token){

        return JwtUtil.getClaim(token,Constants.Jwt.ACCOUNT);
    }

    public static String getPassword(String token){
        return JwtUtil.getClaim(token,Constants.Jwt.PASSWORD);
    }

    public static String getClientId(String token){
        return JwtUtil.getClaim(token,Constants.Jwt.CLIENT_ID);
    }

    public static String getCurrentTimeMillis(String token){
        return JwtUtil.getClaim(token,Constants.Jwt.CURRENT_TIME_MILLIS);
    }

    /**
     * 生成签名
     * @param account
     * @param password
     * @param clientId
     * @return 返回加密的Token
     */
    public static String sign(String account,String password,String clientId) {

        try {
            // 帐号加JWT私钥加密
            String secret = account + Base64Util.decode(properties.getKey());

            // 此处过期时间是以毫秒为单位，所以乘以1000
            Date date = new Date(System.currentTimeMillis() + properties.getTimeout()*1000);

            Algorithm algorithm = Algorithm.HMAC256(secret);
            String currentTimeMillis = String.valueOf(System.currentTimeMillis());

            String token=JWT.create()
                    .withClaim(Constants.Jwt.ACCOUNT, account)
                    .withClaim(Constants.Jwt.PASSWORD, password)
                    .withClaim(Constants.Jwt.CLIENT_ID, clientId)
                    .withClaim(Constants.Jwt.CURRENT_TIME_MILLIS, currentTimeMillis)
                    .withExpiresAt(date)
                    .sign(algorithm);

            // 设置RefreshToken中的时间戳为当前最新时间戳)
            RedisUtil.putCurrentTimeMillis(token, currentTimeMillis);

            RedisUtil.putToken(token);

            return token;

        } catch (UnsupportedEncodingException e) {

            String error="JWTToken加密出现UnsupportedEncodingException异常:";

            log.error(error ,e);

            throw new CustomException(error + e.getMessage());
        }
    }

    public static String refreshSign(String token){

        String account=JwtUtil.getAccount(token);
        String password=JwtUtil.getPassword(token);
        String clientId=JwtUtil.getClientId(token);

        return JwtUtil.sign(account,password,clientId);
    }

}

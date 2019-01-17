package cn.mauth.account.common.util;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

public final class Base64Util {
    /**
     * 加密
     */
    public static String encode(String str) throws UnsupportedEncodingException {
        byte[] encodeBytes = Base64.getEncoder().encode(str.getBytes("utf-8"));
        return new String(encodeBytes);
    }

    /**
     * 解密
     */
    public static String decode(String str) throws UnsupportedEncodingException {
        byte[] decodeBytes = Base64.getDecoder().decode(str.getBytes("utf-8"));
        return new String(decodeBytes);
    }
}

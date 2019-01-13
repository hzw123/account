package cn.mauth.account.config.project;

import java.util.Properties;

import com.google.code.kaptcha.Constants;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.google.code.kaptcha.util.Config;

/**
 * 谷歌验证码配置文件
 */
@Configuration
public class KaptchaConfig {

	 @Bean(name = "captchaProducer")
	 public DefaultKaptcha getKaptchaBean() {

		DefaultKaptcha bean = new DefaultKaptcha();
		Properties properties = new Properties();
		properties.setProperty(Constants.KAPTCHA_BORDER, "yes");
		properties.setProperty(Constants.KAPTCHA_BORDER_COLOR, "105,179,90");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_COLOR, "blue");
		properties.setProperty(Constants.KAPTCHA_IMAGE_WIDTH, "160");
		properties.setProperty(Constants.KAPTCHA_IMAGE_HEIGHT, "60");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_SIZE, "28");
		properties.setProperty(Constants.KAPTCHA_SESSION_KEY, "kaptchaCode");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_SPACE, "6");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_LENGTH, "5");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_NAMES, "Arial,Courier");
		properties.setProperty(Constants.KAPTCHA_NOISE_COLOR, "white");

		Config config = new Config(properties);

		bean.setConfig(config);
		return bean;
	 }

	 @Bean(name = "captchaProducerMath")
	 public DefaultKaptcha getKaptchaBeanMath() {

		DefaultKaptcha bean = new DefaultKaptcha();
		Properties properties = new Properties();
		properties.setProperty(Constants.KAPTCHA_BORDER, "yes");
		properties.setProperty(Constants.KAPTCHA_BORDER_COLOR, "105,179,90");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_COLOR, "blue");
		properties.setProperty(Constants.KAPTCHA_IMAGE_WIDTH, "160");
		properties.setProperty(Constants.KAPTCHA_IMAGE_HEIGHT, "35");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_SIZE, "30");
		properties.setProperty(Constants.KAPTCHA_SESSION_KEY, "kaptchaCodeMath");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_IMPL, "cn.mauth.account.common.util.KaptchaTextCreator");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_SPACE, "5");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_LENGTH, "6");
		properties.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_NAMES, "Arial,Courier");
		properties.setProperty(Constants.KAPTCHA_NOISE_COLOR, "white");
		properties.setProperty(Constants.KAPTCHA_NOISE_IMPL, "com.google.code.kaptcha.impl.NoNoise");
		properties.setProperty(Constants.KAPTCHA_OBSCURIFICATOR_IMPL, "com.google.code.kaptcha.impl.ShadowGimpy");

		 Config config = new Config(properties);
		bean.setConfig(config);
		return bean;
	 }

}

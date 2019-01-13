package cn.mauth.account.common.util;

/**
 * 常量工具类
 * 
 * @author mauth
 */
public final class Constants {

	public final static String ADMIN = "超级管理员";

	private Constants() {
	}


	/**
	 * 常量
	 * 
	 * @author mauth
	 */
	public interface Session {
		public final static String USER_TYPE = "accounting_user_type";
		public final static String USER_ID = "accounting_user_info_id";
		public final static String USER = "accounting_user";
		public final static String MENU = "accounting_menu";
		public final static String PERMISSIONS = "accounting_Permissions";
		public final static String ROLE = "accounting_role";
		public final static String ACCOUNT = "accounting_account";
		public final static String SESSIONINDEX = "accounting_sessionIndex";
	}

}

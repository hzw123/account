/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : accounting

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-01-23 17:30:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account_set
-- ----------------------------
DROP TABLE IF EXISTS `account_set`;
CREATE TABLE `account_set` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `accounting_standard` int(11) DEFAULT NULL,
  `cash_journal` int(11) NOT NULL,
  `check_needed` int(11) NOT NULL,
  `create_by` int(11) NOT NULL,
  `fixedasset` int(11) NOT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `level1` int(11) NOT NULL,
  `level2` int(11) NOT NULL,
  `level3` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `permission` int(11) NOT NULL,
  `start_date_month` varchar(255) DEFAULT NULL,
  `start_date_year` varchar(255) DEFAULT NULL,
  `tax_numbers` varchar(255) DEFAULT NULL,
  `tax_type` varchar(255) DEFAULT NULL,
  `unified_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_set
-- ----------------------------
INSERT INTO `account_set` VALUES ('1', '2019-01-23 10:47:11', '2019-01-23 10:47:14', '0', '1', '1', '1', '1', '1', '1', '1', '1', 'dfdf', '1', '01', '2019', '1', '1', '111111');
INSERT INTO `account_set` VALUES ('2', '2019-01-23 15:14:25', '2019-01-23 15:14:25', '1', '1', '1', '0', '1', '1', '0', '0', '0', 'dfdf', '1', null, null, '1', '1', null);

-- ----------------------------
-- Table structure for account_subject
-- ----------------------------
DROP TABLE IF EXISTS `account_subject`;
CREATE TABLE `account_subject` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `aa_types` varchar(255) DEFAULT NULL,
  `account_id` bigint(20) NOT NULL,
  `assit` bit(1) NOT NULL,
  `code` varchar(100) NOT NULL,
  `currency` varchar(255) NOT NULL,
  `dc` int(11) DEFAULT NULL,
  `fc_codes` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `group_name` varchar(255) DEFAULT NULL,
  `is_deleted` bit(1) NOT NULL,
  `is_detail` bit(1) NOT NULL,
  `is_foreign_currency` bit(1) NOT NULL,
  `is_rate_adj` bit(1) NOT NULL,
  `level` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `parent` bigint(20) NOT NULL,
  `qty_unit` varchar(255) DEFAULT NULL,
  `sub_type` int(11) DEFAULT NULL,
  `use_qty_aux` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_emq3216px713xcr3lk5qk2s8m` (`code`),
  UNIQUE KEY `UK_nbxrhwihipvcrsh36kvd5kde` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_subject
-- ----------------------------

-- ----------------------------
-- Table structure for assist_accounting
-- ----------------------------
DROP TABLE IF EXISTS `assist_accounting`;
CREATE TABLE `assist_accounting` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `code` varchar(100) NOT NULL,
  `extra_info` text,
  `name` varchar(100) NOT NULL,
  `type` int(11) NOT NULL,
  `type_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ci79rf57yyc9xaisjj4on5jee` (`code`),
  UNIQUE KEY `UK_6mb7yxwlm4gwjyv2pqg1btbjx` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of assist_accounting
-- ----------------------------

-- ----------------------------
-- Table structure for cash_flow_sheet
-- ----------------------------
DROP TABLE IF EXISTS `cash_flow_sheet`;
CREATE TABLE `cash_flow_sheet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` double NOT NULL,
  `amount` double NOT NULL,
  `amount1` varchar(255) DEFAULT NULL,
  `as_id` int(11) NOT NULL,
  `coum_type` int(11) NOT NULL,
  `created_manually` varchar(255) DEFAULT NULL,
  `entry_type` int(11) DEFAULT NULL,
  `expand` int(11) NOT NULL,
  `inital_amount` double NOT NULL,
  `inital_amount1` varchar(255) DEFAULT NULL,
  `line_id` int(11) NOT NULL,
  `line_name` varchar(255) DEFAULT NULL,
  `line_number` int(11) NOT NULL,
  `line_type` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `p_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `priority` int(11) NOT NULL,
  `statement_id` int(11) NOT NULL,
  `account` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cash_flow_sheet
-- ----------------------------

-- ----------------------------
-- Table structure for currency
-- ----------------------------
DROP TABLE IF EXISTS `currency`;
CREATE TABLE `currency` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `code` varchar(255) NOT NULL,
  `is_standard` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rate` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_h84pd2rtr12isnifnj655rkra` (`code`),
  UNIQUE KEY `UK_ou8q9939fa4k88wjh17qwcmre` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of currency
-- ----------------------------

-- ----------------------------
-- Table structure for period
-- ----------------------------
DROP TABLE IF EXISTS `period`;
CREATE TABLE `period` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `fs_status` int(11) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `sn` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of period
-- ----------------------------

-- ----------------------------
-- Table structure for sys_app_info
-- ----------------------------
DROP TABLE IF EXISTS `sys_app_info`;
CREATE TABLE `sys_app_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `client_secret` varchar(50) DEFAULT NULL,
  `sort` int(11) NOT NULL,
  `user_info_id` bigint(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_hu9xb9mkymlegemxlhcbg97l1` (`account_id`),
  UNIQUE KEY `UK_7n2tiqn6uhaoygcwnx89n3vx3` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_app_info
-- ----------------------------
INSERT INTO `sys_app_info` VALUES ('1', '2019-01-21 12:45:03', '2019-01-21 12:45:05', '1', '111111', '1', '1', 'admin123', '0');
INSERT INTO `sys_app_info` VALUES ('2', '2019-01-22 12:09:58', '2019-01-22 12:09:58', '2', '286189efdc3e4928aa861d1f163f6d8d', '0', '1', 'accounting', '1');

-- ----------------------------
-- Table structure for sys_app_info_services
-- ----------------------------
DROP TABLE IF EXISTS `sys_app_info_services`;
CREATE TABLE `sys_app_info_services` (
  `sys_app_info_id` bigint(20) NOT NULL,
  `services_id` bigint(20) NOT NULL,
  PRIMARY KEY (`sys_app_info_id`,`services_id`),
  KEY `FKpumi4ixmu5s13fcqmgdu5qljq` (`services_id`),
  CONSTRAINT `FK3g83be4lqupyiff416k9mhipg` FOREIGN KEY (`sys_app_info_id`) REFERENCES `sys_app_info` (`id`),
  CONSTRAINT `FKpumi4ixmu5s13fcqmgdu5qljq` FOREIGN KEY (`services_id`) REFERENCES `sys_service` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_app_info_services
-- ----------------------------

-- ----------------------------
-- Table structure for sys_log_login
-- ----------------------------
DROP TABLE IF EXISTS `sys_log_login`;
CREATE TABLE `sys_log_login` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `last_login_ip` varchar(255) DEFAULT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `login_ip` varchar(255) DEFAULT NULL,
  `login_name` varchar(255) DEFAULT NULL,
  `single_name` varchar(255) DEFAULT NULL,
  `user_info_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_log_login
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `menu_icon` varchar(255) DEFAULT NULL,
  `menu_name` varchar(50) NOT NULL,
  `menu_url` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `target_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES ('1', null, '2019-01-22 16:52:07', 'list', '系统管理', '', '0', '', '99', '1', '');
INSERT INTO `sys_menu` VALUES ('2', null, '2019-01-22 16:52:46', 'list', '权限管理', '', '1', '', '98', '1', '');
INSERT INTO `sys_menu` VALUES ('3', '2019-01-11 12:26:56', '2019-01-11 12:26:58', 'list', '角色管理', '/admin/sysRole/list', '2', null, '1', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('4', '2019-01-11 12:27:56', '2019-01-11 12:27:58', 'list', '菜单管理', '/admin/sysMenu/list', '2', null, '2', '1', 'admin-sysMenu');
INSERT INTO `sys_menu` VALUES ('5', null, '2019-01-22 16:52:52', 'list', '用户管理', '', '1', '', '97', '1', '');
INSERT INTO `sys_menu` VALUES ('6', '2019-01-11 12:31:36', '2019-01-11 12:31:38', 'list', '用户管理', '/admin/sysUserInfo/list', '5', null, '1', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('8', null, '2019-01-22 16:52:37', 'list', '日志管理', '', '1', '', '99', '1', '');
INSERT INTO `sys_menu` VALUES ('10', '2019-01-14 15:10:27', '2019-01-14 15:10:27', 'list', '登录日志管理', '/admin/sysLogLogin/list', '8', '', '999', '1', 'admin-sysLogLogin');
INSERT INTO `sys_menu` VALUES ('11', null, '2019-01-23 15:10:09', 'list', '会计管理', '', '0', '', '1', '1', '');
INSERT INTO `sys_menu` VALUES ('12', null, '2019-01-23 12:22:13', 'list', '账套管理', '', '11', '', '1', '1', '');
INSERT INTO `sys_menu` VALUES ('13', null, '2019-01-21 11:31:50', 'list', '设置菜单', '/admin/sysMenuRole/set', '3', '', '8', '1', 'admin-sysMenuRole');
INSERT INTO `sys_menu` VALUES ('16', null, '2019-01-21 10:48:49', 'list', '添加', '/admin/sysMenu/add', '4', '', '9', '1', 'admin-sysMenu');
INSERT INTO `sys_menu` VALUES ('17', null, '2019-01-21 11:09:19', 'list', '修改', '/admin/sysMenu/save/sub', '4', '', '7', '1', 'admin-sysMenu');
INSERT INTO `sys_menu` VALUES ('18', null, '2019-01-21 10:48:53', 'list', '保存', '/admin/sysMenu/save', '4', '', '7', '1', 'admin-sysMenu');
INSERT INTO `sys_menu` VALUES ('19', null, '2019-01-21 11:09:34', 'list', '删除', '/admin/sysMenu/delete', '4', '', '6', '1', 'admin-sysMenu');
INSERT INTO `sys_menu` VALUES ('20', '2019-01-21 10:54:45', '2019-01-21 10:54:45', 'list', '查看', '/admin/sysUserInfo/view', '6', '', '10', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('22', '2019-01-21 10:59:55', '2019-01-21 10:59:55', 'list', '查看', '/admin/sysRole/view', '3', '', '11', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('23', '2019-01-21 11:00:47', '2019-01-21 11:00:47', 'list', '添加', '/admin/sysRole/add', '3', '', '10', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('25', '2019-01-21 11:01:47', '2019-01-21 11:01:47', 'list', '编辑', '/admin/sysRole/edit', '3', '', '9', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('27', '2019-01-21 11:03:58', '2019-01-21 11:03:58', 'list', '保存', '/admin/sysRole/save', '23', '', '1', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('28', '2019-01-21 11:04:24', '2019-01-21 11:04:24', 'list', '修改', '/admin/sysRole/update', '25', '', '1', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('29', '2019-01-21 11:05:31', '2019-01-21 11:05:31', 'list', '保存', '/admin/sysMenuRole/save', '13', '', '1', '1', 'admin-sysMenuRole');
INSERT INTO `sys_menu` VALUES ('30', null, '2019-01-21 11:21:27', 'list', '添加', '/admin/sysUserInfo/add', '6', '', '9', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('32', null, '2019-01-21 11:21:36', 'list', '编辑', '/admin/sysUserInfo/edit', '6', '', '8', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('34', '2019-01-21 11:08:33', '2019-01-21 11:08:33', 'list', '删除', '/admin/sysUserInfo/delete', '6', '', '7', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('35', '2019-01-21 11:10:10', '2019-01-21 11:10:10', 'list', '查看', '/admin/sysLogLogin/view', '10', '', '19', '1', 'admin-sysLogLogin');
INSERT INTO `sys_menu` VALUES ('36', '2019-01-21 11:23:28', '2019-01-21 11:23:28', 'list', '保存', '/admin/sysUserInfo/save', '30', '', '1', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('37', '2019-01-21 11:24:13', '2019-01-21 11:24:13', 'list', '修改', '/admin/sysUserInfo/update', '32', '', '1', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('38', '2019-01-21 11:31:34', '2019-01-21 11:31:34', 'list', '删除', '/admin/sysRole/delete', '3', '', '1', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('41', null, '2019-01-23 12:49:23', 'list', '服务管理', '', '0', '', '98', '1', '');
INSERT INTO `sys_menu` VALUES ('42', '2019-01-22 10:22:20', '2019-01-22 10:22:20', '', '服务管理', '', '41', '', '9', '1', '');
INSERT INTO `sys_menu` VALUES ('43', null, '2019-01-23 17:09:51', 'list', '服务管理', '/admin/sysService/list', '42', '', '9', '1', 'admin-sysService');
INSERT INTO `sys_menu` VALUES ('44', '2019-01-22 10:26:49', '2019-01-22 10:26:49', 'list', '查看', '/admin/sysService/view', '43', '', '9', '1', 'admin-sysService');
INSERT INTO `sys_menu` VALUES ('45', '2019-01-22 10:27:06', '2019-01-22 10:27:06', 'list', '添加', '/admin/sysService/add', '43', '', '8', '1', 'admin-sysService');
INSERT INTO `sys_menu` VALUES ('46', '2019-01-22 10:27:29', '2019-01-22 10:27:29', 'list', '保存', '/admin/sysService/save', '45', '', '1', '1', 'admin-sysService');
INSERT INTO `sys_menu` VALUES ('47', '2019-01-22 10:27:44', '2019-01-22 10:27:44', 'list', '编辑', '/admin/sysService/edit', '43', '', '7', '1', 'admin-sysService');
INSERT INTO `sys_menu` VALUES ('48', '2019-01-22 10:28:02', '2019-01-22 10:28:02', 'list', '删除', '/admin/sysService/delete', '43', '', '6', '1', 'admin-sysService');
INSERT INTO `sys_menu` VALUES ('49', '2019-01-22 10:28:20', '2019-01-22 10:28:20', 'list', '修改', '/admin/sysServicer/update', '47', '', '1', '1', 'admin-sysService');
INSERT INTO `sys_menu` VALUES ('50', '2019-01-22 10:59:09', '2019-01-22 10:59:09', '', '管理中心', '', '41', '', '8', '1', '');
INSERT INTO `sys_menu` VALUES ('51', null, '2019-01-22 11:13:45', 'list', '应用管理', '/admin/sysAppInfo/list', '50', '', '9', '1', 'admin-sysAppInfo');
INSERT INTO `sys_menu` VALUES ('52', '2019-01-22 11:12:50', '2019-01-22 11:12:50', 'list', 'update', '/admin/sysMenu/update', '4', '', '4', '1', 'admin-sysMenu');
INSERT INTO `sys_menu` VALUES ('53', '2019-01-22 11:14:07', '2019-01-22 11:14:07', 'list', '查看', '/admin/sysAppInfo/view', '51', '', '9', '1', 'admin-sysAppInfo');
INSERT INTO `sys_menu` VALUES ('54', '2019-01-22 11:14:33', '2019-01-22 11:14:33', 'list', '添加', '/admin/sysAppInfo/add', '51', '', '8', '1', 'admin-sysAppInfo');
INSERT INTO `sys_menu` VALUES ('55', '2019-01-22 11:14:51', '2019-01-22 11:14:51', 'list', '编辑', '/admin/sysAppInfo/edit', '51', '', '7', '1', 'admin-sysAppInfo');
INSERT INTO `sys_menu` VALUES ('56', '2019-01-22 11:15:07', '2019-01-22 11:15:07', 'list', '删除', '/admin/sysAppInfo/delete', '51', '', '6', '1', 'admin-sysAppInfo');
INSERT INTO `sys_menu` VALUES ('57', '2019-01-22 11:15:22', '2019-01-22 11:15:22', 'list', '保存', '/admin/sysAppInfo/save', '54', '', '8', '1', 'admin-sysAppInfo');
INSERT INTO `sys_menu` VALUES ('58', null, '2019-01-22 16:57:00', 'list', '更新', '/admin/sysAppInfo/update', '55', '', '7', '1', 'admin-sysAppInfo');
INSERT INTO `sys_menu` VALUES ('59', '2019-01-22 11:56:37', '2019-01-22 11:56:37', 'list', '修改密码', '/admin/sysUserInfo/password', '6', '', '5', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('60', '2019-01-22 11:57:03', '2019-01-22 11:57:03', 'list', '我的信息', '/admin/sysUserInfo/info', '6', '', '4', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('61', '2019-01-22 13:40:33', '2019-01-22 13:40:33', 'list', '删除', '/admin/sysLogLogin/delete', '10', '', '18', '1', 'admin-sysLogLogin');
INSERT INTO `sys_menu` VALUES ('64', '2019-01-22 16:54:05', '2019-01-22 16:54:05', 'list', '查看', '/admin/accountSet/view', '70', '', '9', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('65', null, '2019-01-23 11:47:15', 'list', '添加', '/admin/accountSet/add', '70', '', '8', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('66', null, '2019-01-23 11:47:20', 'list', '编辑', '/admin/accountSet/edit', '70', '', '7', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('67', null, '2019-01-23 11:47:25', 'list', '删除', '/admin/accountSet/delete', '70', '', '6', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('68', null, '2019-01-23 11:47:33', 'list', '保存', '/admin/accountSet/save', '65', '', '1', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('69', null, '2019-01-23 11:47:30', 'list', '更新', '/admin/accountSet/update', '66', '', '1', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('70', null, '2019-01-23 12:54:47', 'list', '账套管理', '/admin/accountSet/list', '12', '', '9', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('71', '2019-01-23 17:05:45', '2019-01-23 17:05:45', 'list', '服务列表管理', '/admin/sysServiceList/list', '42', '', '8', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('72', '2019-01-23 17:06:31', '2019-01-23 17:06:31', 'list', '查看', '/admin/sysServiceList/view', '71', '', '9', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('73', '2019-01-23 17:06:47', '2019-01-23 17:06:47', 'list', '添加', '/admin/sysServiceList/add', '71', '', '8', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('74', '2019-01-23 17:07:03', '2019-01-23 17:07:03', 'list', '编辑', '/admin/sysServiceList/edit', '71', '', '7', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('75', '2019-01-23 17:07:21', '2019-01-23 17:07:21', 'list', '删除', '/admin/sysServiceList/delete', '71', '', '6', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('76', '2019-01-23 17:07:42', '2019-01-23 17:07:42', 'list', '保存', '/admin/sysServiceList/save', '73', '', '1', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('77', '2019-01-23 17:07:57', '2019-01-23 17:07:57', 'list', '更新', '/admin/sysServiceList/update', '74', '', '1', '1', 'admin-sysServiceList');

-- ----------------------------
-- Table structure for sys_menu_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu_role`;
CREATE TABLE `sys_menu_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `menu_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  `sort` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=658 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu_role
-- ----------------------------
INSERT INTO `sys_menu_role` VALUES ('594', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '1', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('595', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '8', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('596', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '10', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('597', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '35', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('598', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '61', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('599', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '2', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('600', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '4', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('601', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '16', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('602', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '18', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('603', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '17', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('604', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '19', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('605', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '52', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('606', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '3', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('607', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '22', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('608', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '23', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('609', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '27', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('610', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '25', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('611', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '28', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('612', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '13', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('613', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '29', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('614', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '38', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('615', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '5', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('616', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '6', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('617', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '20', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('618', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '30', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('619', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '36', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('620', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '32', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('621', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '37', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('622', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '34', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('623', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '59', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('624', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '60', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('625', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '41', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('626', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '42', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('627', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '43', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('628', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '44', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('629', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '45', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('630', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '46', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('631', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '47', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('632', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '49', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('633', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '48', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('634', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '71', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('635', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '72', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('636', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '73', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('637', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '76', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('638', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '74', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('639', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '77', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('640', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '75', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('641', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '50', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('642', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '51', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('643', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '53', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('644', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '54', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('645', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '57', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('646', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '55', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('647', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '58', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('648', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '56', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('649', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '11', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('650', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '12', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('651', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '70', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('652', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '64', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('653', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '65', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('654', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '68', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('655', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '66', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('656', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '69', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('657', '2019-01-23 17:08:04', '2019-01-23 17:08:04', '67', '1', '0', '1');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) NOT NULL,
  `sort` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_7kwex0745q0eycdwi4d2yihi3` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', null, '2019-01-21 11:45:12', '超级管理员', '超级管理员', '1', '1');

-- ----------------------------
-- Table structure for sys_role_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_user`;
CREATE TABLE `sys_role_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `role_id` bigint(20) NOT NULL,
  `sort` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `user_info_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_role_user
-- ----------------------------
INSERT INTO `sys_role_user` VALUES ('1', '2019-01-11 12:19:34', '2019-01-11 12:19:38', '1', '1', '1', '1');
INSERT INTO `sys_role_user` VALUES ('2', '2019-01-21 10:31:05', '2019-01-21 10:31:03', '1', '0', '0', '2');

-- ----------------------------
-- Table structure for sys_service
-- ----------------------------
DROP TABLE IF EXISTS `sys_service`;
CREATE TABLE `sys_service` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `server_no` varchar(32) NOT NULL,
  `state` int(11) NOT NULL,
  `version` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ma96kkv4ubv5w55yhhys5s0im` (`name`),
  UNIQUE KEY `UK_7l3m8sj30jx8s01hnynnvy5j4` (`server_no`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_service
-- ----------------------------
INSERT INTO `sys_service` VALUES ('1', '2019-01-22 10:43:55', '2019-01-22 10:43:55', '会计管理', '0001', '1', '公司', null);

-- ----------------------------
-- Table structure for sys_service_list
-- ----------------------------
DROP TABLE IF EXISTS `sys_service_list`;
CREATE TABLE `sys_service_list` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `app_id` bigint(20) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `state` int(11) NOT NULL,
  `total_users` int(11) NOT NULL,
  `used_users` int(11) NOT NULL,
  `user_info_id` bigint(20) DEFAULT NULL,
  `version` int(11) NOT NULL,
  `service_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_4udg6k6nxf212gp5n9n7bw1vd` (`name`),
  KEY `FKk5gm1wk29mpvxxt4tyhg5dh9l` (`service_id`),
  CONSTRAINT `FKk5gm1wk29mpvxxt4tyhg5dh9l` FOREIGN KEY (`service_id`) REFERENCES `sys_service` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_service_list
-- ----------------------------
INSERT INTO `sys_service_list` VALUES ('1', '2019-01-23 17:26:20', '2019-01-23 17:26:20', '1', '1', 'mauth', '1', '8', '0', '1', '1', '1');

-- ----------------------------
-- Table structure for sys_user_info
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_info`;
CREATE TABLE `sys_user_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `addr` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `login_name` varchar(50) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `nick_name` varchar(50) DEFAULT NULL,
  `pwd` varchar(32) DEFAULT NULL,
  `salt` varchar(32) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `user_type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user_info
-- ----------------------------
INSERT INTO `sys_user_info` VALUES ('1', '2019-01-11 11:32:48', '2019-01-11 11:32:51', '11', '112788@qq.com', 'admin', '15001352593', 'login', '189c800e16db20a679c23311be2778e4', 'cb2987d0cf2949d78fb0bb921b072ac9', '1', '1', '1');
INSERT INTO `sys_user_info` VALUES ('2', '2019-01-14 12:39:01', '2019-01-14 12:39:04', '', '1853019651@qq.com', 'root', '18077200000', 'root', '6146b889326300c1b1eda834d81cbf48', 'd890881f0f5c4d678057ae1cada17d57', '0', '1', '1');

-- ----------------------------
-- Table structure for voucher
-- ----------------------------
DROP TABLE IF EXISTS `voucher`;
CREATE TABLE `voucher` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `approve_status` int(11) NOT NULL,
  `approved_by` varchar(255) DEFAULT NULL,
  `attachments` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `note` text,
  `num` int(11) NOT NULL,
  `prepared_by` varchar(255) NOT NULL,
  `vch_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher
-- ----------------------------

-- ----------------------------
-- Table structure for voucher_entries
-- ----------------------------
DROP TABLE IF EXISTS `voucher_entries`;
CREATE TABLE `voucher_entries` (
  `voucher_id` bigint(20) NOT NULL,
  `entries_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_g83yru2u1f9cpou382488ltjd` (`entries_id`),
  KEY `FKetxt5ul1iqxjj9uneplq78ebj` (`voucher_id`),
  CONSTRAINT `FKdbxt1q4payva2obixsttcnd6x` FOREIGN KEY (`entries_id`) REFERENCES `voucher_line` (`id`),
  CONSTRAINT `FKetxt5ul1iqxjj9uneplq78ebj` FOREIGN KEY (`voucher_id`) REFERENCES `voucher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher_entries
-- ----------------------------

-- ----------------------------
-- Table structure for voucher_line
-- ----------------------------
DROP TABLE IF EXISTS `voucher_line`;
CREATE TABLE `voucher_line` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `amount_for` double NOT NULL,
  `cur` varchar(255) DEFAULT NULL,
  `dc` int(11) DEFAULT NULL,
  `exp` varchar(255) DEFAULT NULL,
  `rate` double NOT NULL,
  `sub_code` varchar(255) DEFAULT NULL,
  `sub_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher_line
-- ----------------------------

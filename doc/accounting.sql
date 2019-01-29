/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : accounting

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-01-29 17:29:45
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
  `create_by` bigint(20) NOT NULL,
  `expiration_time` datetime DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `user_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_set
-- ----------------------------
INSERT INTO `account_set` VALUES ('1', '2019-01-28 11:33:26', '2019-01-28 11:45:05', '1', '2020-01-24 13:03:52', 'mauth', '2');

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
  `is_standard` bit(1) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `rate` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_h84pd2rtr12isnifnj655rkra` (`code`),
  UNIQUE KEY `UK_ou8q9939fa4k88wjh17qwcmre` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of currency
-- ----------------------------
INSERT INTO `currency` VALUES ('1', '2019-01-24 12:50:34', '2019-01-24 12:50:34', 'CNY', '', '人民币', '1', '1');
INSERT INTO `currency` VALUES ('2', '2019-01-24 12:54:59', '2019-01-24 12:54:59', 'USB', '\0', '美元', '6.87', '1');
INSERT INTO `currency` VALUES ('3', '2019-01-24 12:58:37', '2019-01-24 12:58:37', 'EUR', '\0', '欧元', '9.78', '1');
INSERT INTO `currency` VALUES ('4', '2019-01-24 13:00:23', '2019-01-24 13:00:23', 'JPY', '\0', '日元', '0.06196', '1');
INSERT INTO `currency` VALUES ('5', '2019-01-24 13:01:18', '2019-01-24 13:01:18', 'GBP', '\0', '英镑', '8.8709', '1');
INSERT INTO `currency` VALUES ('6', '2019-01-24 13:03:52', '2019-01-24 16:50:19', 'HKD', '\0', '港元', '0.865', '1');
INSERT INTO `currency` VALUES ('7', '2019-01-24 16:49:21', '2019-01-25 12:01:03', 'AUD', '\0', '澳元', '4.83', '1');

-- ----------------------------
-- Table structure for subject
-- ----------------------------
DROP TABLE IF EXISTS `subject`;
CREATE TABLE `subject` (
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
  `group_name` varchar(255) DEFAULT NULL,
  `is_deleted` bit(1) NOT NULL,
  `is_detail` bit(1) NOT NULL,
  `is_foreign_currency` bit(1) NOT NULL,
  `is_rate_adj` bit(1) NOT NULL,
  `level` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `qty_unit` varchar(255) DEFAULT NULL,
  `sub_type` int(11) DEFAULT NULL,
  `use_qty_aux` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_db5g1rfeug7aywnpb6gab85ep` (`code`),
  UNIQUE KEY `UK_p1jgir6qcpmqnxt4a8105wsot` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of subject
-- ----------------------------
INSERT INTO `subject` VALUES ('2', '2019-01-25 12:29:52', '2019-01-29 13:46:43', null, '1', '\0', '0001', 'CNY', '1', null, '不动产投资', '', '\0', '\0', '\0', '0', '投资房产', null, '0', null, '4', '\0');
INSERT INTO `subject` VALUES ('3', '2019-01-29 13:46:16', '2019-01-29 13:46:16', null, '1', '\0', '0002', 'CHY', '0', null, '定期存款', '', '\0', '\0', '\0', '0', '定期存款', null, '0', null, '0', '\0');

-- ----------------------------
-- Table structure for sys_app_info
-- ----------------------------
DROP TABLE IF EXISTS `sys_app_info`;
CREATE TABLE `sys_app_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `client_secret` varchar(50) DEFAULT NULL,
  `sort` int(11) NOT NULL,
  `user_info_id` bigint(20) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_7n2tiqn6uhaoygcwnx89n3vx3` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_app_info
-- ----------------------------
INSERT INTO `sys_app_info` VALUES ('1', '2019-01-25 14:24:50', '2019-01-24 11:05:15', '141b67660bd74643b99874f5cc0f7b6d', '0', '1', 'admin123', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_log_login
-- ----------------------------
INSERT INTO `sys_log_login` VALUES ('2', '2019-01-24 11:03:09', '2019-01-24 11:03:09', '0:0:0:0:0:0:0:1', '2019-01-24 10:31:16', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('3', '2019-01-24 11:53:11', '2019-01-24 11:53:11', '0:0:0:0:0:0:0:1', '2019-01-24 11:03:09', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('4', '2019-01-24 15:26:09', '2019-01-24 15:26:09', '0:0:0:0:0:0:0:1', '2019-01-24 11:53:11', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('5', '2019-01-25 10:37:53', '2019-01-25 10:37:53', '0:0:0:0:0:0:0:1', '2019-01-24 15:26:09', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('6', '2019-01-25 10:42:40', '2019-01-25 10:42:40', '0:0:0:0:0:0:0:1', '2019-01-25 10:37:53', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('7', '2019-01-25 10:47:04', '2019-01-25 10:47:04', '0:0:0:0:0:0:0:1', '2019-01-25 10:42:40', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('8', '2019-01-25 14:21:52', '2019-01-25 14:21:52', '0:0:0:0:0:0:0:1', '2019-01-25 10:47:04', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('9', '2019-01-25 16:41:45', '2019-01-25 16:41:45', '0:0:0:0:0:0:0:1', '2019-01-25 14:21:52', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('10', '2019-01-25 16:42:00', '2019-01-25 16:42:00', '0:0:0:0:0:0:0:1', '2019-01-25 16:41:45', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('11', '2019-01-25 16:42:42', '2019-01-25 16:42:42', '0:0:0:0:0:0:0:1', '2019-01-25 16:42:00', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('12', '2019-01-28 10:27:09', '2019-01-28 10:27:09', '0:0:0:0:0:0:0:1', '2019-01-25 16:42:42', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('13', '2019-01-28 11:43:28', '2019-01-28 11:43:28', '0:0:0:0:0:0:0:1', '2019-01-28 10:27:09', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('14', '2019-01-28 11:43:28', '2019-01-28 11:43:28', '0:0:0:0:0:0:0:1', '2019-01-28 11:43:28', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('15', '2019-01-28 15:11:26', '2019-01-28 15:11:26', '0:0:0:0:0:0:0:1', '2019-01-28 11:43:28', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('16', '2019-01-28 15:17:43', '2019-01-28 15:17:43', '0:0:0:0:0:0:0:1', '2019-01-28 15:11:26', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('17', '2019-01-28 15:20:00', '2019-01-28 15:20:00', '0:0:0:0:0:0:0:1', '2019-01-28 15:17:43', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('18', '2019-01-28 15:20:07', '2019-01-28 15:20:07', '0:0:0:0:0:0:0:1', '2019-01-28 15:20:00', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('19', '2019-01-28 15:49:23', '2019-01-28 15:49:23', '0:0:0:0:0:0:0:1', '2019-01-28 15:20:07', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('20', '2019-01-28 16:17:13', '2019-01-28 16:17:13', '0:0:0:0:0:0:0:1', '2019-01-28 15:49:23', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('21', '2019-01-28 16:57:10', '2019-01-28 16:57:10', '0:0:0:0:0:0:0:1', '2019-01-28 16:17:13', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('22', '2019-01-28 17:12:44', '2019-01-28 17:12:44', '0:0:0:0:0:0:0:1', '2019-01-28 16:57:10', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('23', '2019-01-29 12:00:40', '2019-01-29 12:00:40', '0:0:0:0:0:0:0:1', '2019-01-28 17:12:44', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('24', '2019-01-29 15:22:38', '2019-01-29 15:22:38', '0:0:0:0:0:0:0:1', '2019-01-29 12:00:40', '0:0:0:0:0:0:0:1', 'admin', null, '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;

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
INSERT INTO `sys_menu` VALUES ('11', null, '2019-01-23 15:10:09', 'list', '会计管理', '', '41', '', '7', '1', '');
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
INSERT INTO `sys_menu` VALUES ('49', null, '2019-01-25 14:21:41', 'list', '修改', '/admin/sysService/update', '47', '', '1', '1', 'admin-sysService');
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
INSERT INTO `sys_menu` VALUES ('70', null, '2019-01-23 12:54:47', 'list', '账套管理', '/admin/accountSet/list', '11', '', '9', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('71', '2019-01-23 17:05:45', '2019-01-23 17:05:45', 'list', '服务列表管理', '/admin/sysServiceList/list', '42', '', '8', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('72', '2019-01-23 17:06:31', '2019-01-23 17:06:31', 'list', '查看', '/admin/sysServiceList/view', '71', '', '9', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('73', '2019-01-23 17:06:47', '2019-01-23 17:06:47', 'list', '添加', '/admin/sysServiceList/add', '71', '', '8', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('74', '2019-01-23 17:07:03', '2019-01-23 17:07:03', 'list', '编辑', '/admin/sysServiceList/edit', '71', '', '7', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('75', '2019-01-23 17:07:21', '2019-01-23 17:07:21', 'list', '删除', '/admin/sysServiceList/delete', '71', '', '6', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('76', '2019-01-23 17:07:42', '2019-01-23 17:07:42', 'list', '保存', '/admin/sysServiceList/save', '73', '', '1', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('77', '2019-01-23 17:07:57', '2019-01-23 17:07:57', 'list', '更新', '/admin/sysServiceList/update', '74', '', '1', '1', 'admin-sysServiceList');
INSERT INTO `sys_menu` VALUES ('79', '2019-01-24 11:49:48', '2019-01-24 11:49:48', 'list', '货币管理', '/admin/currency/list', '11', '货币管理查询', '9', '1', 'admin-currency');
INSERT INTO `sys_menu` VALUES ('80', '2019-01-24 11:50:17', '2019-01-24 11:50:17', 'list', '查看', '/admin/currency/view', '79', '货币管理查看', '9', '1', 'admin-currency');
INSERT INTO `sys_menu` VALUES ('81', '2019-01-24 11:50:41', '2019-01-24 11:50:41', 'list', '添加', '/admin/currency/add', '79', '货币管理--添加', '8', '1', 'admin-currency');
INSERT INTO `sys_menu` VALUES ('82', '2019-01-24 11:51:00', '2019-01-24 11:51:00', 'list', '编辑', '/admin/currency/edit', '79', '货币管理--编辑', '7', '1', 'admin-currency');
INSERT INTO `sys_menu` VALUES ('83', '2019-01-24 11:51:20', '2019-01-24 11:51:20', 'list', '删除', '/admin/currency/delete', '79', '货币管理--删除', '6', '1', 'admin-currency');
INSERT INTO `sys_menu` VALUES ('84', '2019-01-24 11:51:41', '2019-01-24 11:51:41', 'list', '保存', '/admin/currency/save', '81', '货币管理--保存', '1', '1', 'admin-currency');
INSERT INTO `sys_menu` VALUES ('85', '2019-01-24 11:51:57', '2019-01-24 11:51:57', 'list', '更新', '/admin/currency/update', '82', '货币管理--更新', '1', '1', 'admin-currency');
INSERT INTO `sys_menu` VALUES ('87', '2019-01-24 15:52:42', '2019-01-24 15:52:42', 'list', '科目管理', '/admin/subject/list', '11', '科目管理-查询', '9', '1', 'admin-subject');
INSERT INTO `sys_menu` VALUES ('88', '2019-01-24 15:53:04', '2019-01-24 15:53:04', 'list', '查看', '/admin/subject/view', '87', '科目管理-查看', '9', '1', 'admin-subject');
INSERT INTO `sys_menu` VALUES ('89', '2019-01-24 15:53:20', '2019-01-24 15:53:20', 'list', '添加', '/admin/subject/add', '87', '科目管理-添加', '8', '1', 'admin-subject');
INSERT INTO `sys_menu` VALUES ('90', '2019-01-24 15:53:38', '2019-01-24 15:53:38', 'list', '编辑', '/admin/subject/edit', '87', '科目管理-编辑', '7', '1', 'admin-subject');
INSERT INTO `sys_menu` VALUES ('91', '2019-01-24 15:53:57', '2019-01-24 15:53:57', 'list', '删除', '/admin/subject/delete', '87', '科目管理-删除', '6', '1', 'admin-subject');
INSERT INTO `sys_menu` VALUES ('92', '2019-01-24 15:54:15', '2019-01-24 15:54:15', 'list', '保存', '/admin/subject/save', '89', '科目管理-保存', '1', '1', 'admin-subject');
INSERT INTO `sys_menu` VALUES ('93', '2019-01-24 15:54:34', '2019-01-24 15:54:34', 'list', '更新', '/admin/subject/update', '90', '科目管理-更新', '1', '1', 'admin-subject');
INSERT INTO `sys_menu` VALUES ('95', '2019-01-24 15:56:01', '2019-01-24 15:56:01', 'list', '凭证管理', '/admin/voucher/list', '11', '凭证管理-查询列表', '9', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('96', '2019-01-24 15:56:26', '2019-01-24 15:56:26', 'list', '查看', '/admin/voucher/view', '95', '凭证管理-查看', '9', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('97', '2019-01-24 15:56:41', '2019-01-24 15:56:41', 'list', '添加', '/admin/voucher/add', '95', '凭证管理-添加', '8', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('98', '2019-01-24 15:56:59', '2019-01-24 15:56:59', 'list', '编辑', '/admin/voucher/edit', '95', '凭证管理-编辑', '7', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('99', null, '2019-01-24 15:57:26', 'list', '删除', '/admin/voucher/delete', '95', '凭证管理-删除', '6', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('100', '2019-01-24 15:57:44', '2019-01-24 15:57:44', 'list', '保存', '/admin/voucher/save', '97', '凭证管理-保存', '1', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('101', '2019-01-24 15:58:00', '2019-01-24 15:58:00', 'list', '更新', '/admin/voucher/update', '98', '凭证管理-更新', '1', '1', 'admin-voucher');

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
) ENGINE=InnoDB AUTO_INCREMENT=818 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu_role
-- ----------------------------
INSERT INTO `sys_menu_role` VALUES ('730', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '1', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('731', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '8', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('732', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '10', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('733', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '35', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('734', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '61', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('735', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '2', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('736', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '4', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('737', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '16', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('738', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '18', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('739', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '17', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('740', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '19', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('741', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '52', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('742', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '3', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('743', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '22', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('744', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '23', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('745', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '27', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('746', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '25', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('747', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '28', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('748', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '13', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('749', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '29', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('750', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '38', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('751', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '5', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('752', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '6', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('753', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '20', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('754', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '30', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('755', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '36', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('756', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '32', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('757', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '37', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('758', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '34', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('759', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '59', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('760', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '60', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('761', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '41', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('762', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '42', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('763', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '43', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('764', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '44', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('765', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '45', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('766', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '46', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('767', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '47', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('768', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '49', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('769', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '48', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('770', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '71', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('771', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '72', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('772', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '73', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('773', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '76', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('774', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '74', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('775', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '77', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('776', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '75', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('777', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '50', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('778', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '51', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('779', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '53', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('780', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '54', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('781', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '57', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('782', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '55', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('783', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '58', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('784', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '56', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('785', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '11', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('786', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '12', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('787', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '70', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('788', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '64', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('789', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '65', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('790', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '68', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('791', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '66', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('792', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '69', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('793', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '67', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('794', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '78', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('795', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '79', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('796', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '80', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('797', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '81', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('798', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '84', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('799', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '82', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('800', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '85', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('801', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '83', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('802', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '86', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('803', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '87', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('804', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '88', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('805', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '89', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('806', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '92', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('807', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '90', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('808', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '93', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('809', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '91', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('810', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '94', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('811', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '95', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('812', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '96', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('813', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '97', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('814', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '100', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('815', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '98', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('816', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '101', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('817', '2019-01-24 15:58:06', '2019-01-24 15:58:06', '99', '1', '0', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_service
-- ----------------------------
INSERT INTO `sys_service` VALUES ('1', '2019-01-22 10:43:55', '2019-01-25 14:22:09', '云会计', '0001', '1', '公司', '11');
INSERT INTO `sys_service` VALUES ('2', '2019-01-25 14:42:08', '2019-01-25 14:42:08', '云财贸', '0002', '1', null, '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_service_list
-- ----------------------------
INSERT INTO `sys_service_list` VALUES ('2', '2019-01-25 14:27:36', '2019-01-25 14:27:36', '1', '1', 'mauth', '1', '0', '0', '1', '1', '1');
INSERT INTO `sys_service_list` VALUES ('3', '2019-01-25 14:42:59', '2019-01-25 14:42:59', '1', '1', 'mauth2', '1', '6', '0', '1', '1', '2');

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
  `approve_status` int(11) NOT NULL,
  `approved_by` varchar(255) DEFAULT NULL,
  `attachments` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `note` text,
  `num` int(11) NOT NULL,
  `prepared_by` varchar(255) NOT NULL,
  `vch_date` datetime DEFAULT NULL,
  `account_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher
-- ----------------------------
INSERT INTO `voucher` VALUES ('2', '0', '', '5', '记', '1', '3', '111313', '2019-01-29 16:19:23', '1');
INSERT INTO `voucher` VALUES ('3', '0', '', '5', '记', '', '5', '3131', '2019-01-29 17:16:46', '1');

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
INSERT INTO `voucher_entries` VALUES ('2', '1');
INSERT INTO `voucher_entries` VALUES ('2', '2');
INSERT INTO `voucher_entries` VALUES ('3', '3');
INSERT INTO `voucher_entries` VALUES ('3', '4');

-- ----------------------------
-- Table structure for voucher_line
-- ----------------------------
DROP TABLE IF EXISTS `voucher_line`;
CREATE TABLE `voucher_line` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `cur` varchar(255) DEFAULT NULL,
  `dc` int(11) DEFAULT NULL,
  `exp` varchar(255) DEFAULT NULL,
  `rate` double NOT NULL,
  `sub_code` varchar(255) DEFAULT NULL,
  `sub_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher_line
-- ----------------------------
INSERT INTO `voucher_line` VALUES ('1', '11111', 'CNY', '0', '不动产投资1', '1', '0001', '');
INSERT INTO `voucher_line` VALUES ('2', '11111', 'CHY', '1', '定期存款额', '1', '0002', '');
INSERT INTO `voucher_line` VALUES ('3', '1111', 'CNY', '0', 'dfd', '1', '0001', '投资房产');
INSERT INTO `voucher_line` VALUES ('4', '1111', 'CNY', '1', '342424', '1', '0002', '定期存款');

/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : accounting

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-02-12 13:31:36
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8;

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
INSERT INTO `sys_menu` VALUES ('11', null, '2019-02-12 11:27:24', 'list', '会计管理', '/admin/sysAppInfo/list', '41', '', '9', '1', 'admin-sysAppInfo');
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
INSERT INTO `sys_menu` VALUES ('41', null, '2019-02-12 10:33:27', 'list', '应用管理', '', '0', '', '98', '1', '');
INSERT INTO `sys_menu` VALUES ('50', null, '2019-02-11 16:23:56', 'list', '管理中心', '/admin/sysAppInfo/list', '41', '', '10', '1', 'admin-sysAppInfo');
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
INSERT INTO `sys_menu` VALUES ('70', null, '2019-02-12 11:26:45', 'list', '账套管理', '/admin/accountSet/list', '11', '凭证管理-查询列表', '10', '1', 'admin-accountSet');
INSERT INTO `sys_menu` VALUES ('79', null, '2019-02-12 11:26:58', 'list', '货币管理', '/admin/currency/list', '11', '货币管理查询', '8', '1', 'admin-currency');
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
INSERT INTO `sys_menu` VALUES ('95', null, '2019-02-12 11:27:05', 'list', '凭证管理', '/admin/voucher/list', '11', '凭证管理-查询列表', '7', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('96', '2019-01-24 15:56:26', '2019-01-24 15:56:26', 'list', '查看', '/admin/voucher/view', '95', '凭证管理-查看', '9', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('97', '2019-01-24 15:56:41', '2019-01-24 15:56:41', 'list', '添加', '/admin/voucher/add', '95', '凭证管理-添加', '8', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('98', '2019-01-24 15:56:59', '2019-01-24 15:56:59', 'list', '编辑', '/admin/voucher/edit', '95', '凭证管理-编辑', '7', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('99', null, '2019-01-24 15:57:26', 'list', '删除', '/admin/voucher/delete', '95', '凭证管理-删除', '6', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('100', '2019-01-24 15:57:44', '2019-01-24 15:57:44', 'list', '保存', '/admin/voucher/save', '97', '凭证管理-保存', '1', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('101', '2019-01-24 15:58:00', '2019-01-24 15:58:00', 'list', '更新', '/admin/voucher/update', '98', '凭证管理-更新', '1', '1', 'admin-voucher');
INSERT INTO `sys_menu` VALUES ('102', null, '2019-02-12 11:39:17', 'list', '总账明细', '/admin/statistics/ledger', '11', '总账明细', '6', '1', 'admin-ledger');

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
) ENGINE=InnoDB AUTO_INCREMENT=957 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu_role
-- ----------------------------
INSERT INTO `sys_menu_role` VALUES ('887', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '1', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('888', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '8', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('889', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '10', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('890', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '35', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('891', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '61', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('892', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '2', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('893', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '4', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('894', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '16', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('895', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '18', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('896', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '17', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('897', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '19', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('898', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '52', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('899', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '3', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('900', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '22', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('901', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '23', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('902', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '27', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('903', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '25', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('904', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '28', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('905', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '13', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('906', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '29', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('907', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '38', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('908', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '5', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('909', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '6', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('910', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '20', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('911', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '30', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('912', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '36', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('913', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '32', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('914', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '37', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('915', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '34', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('916', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '59', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('917', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '60', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('918', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '41', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('919', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '50', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('920', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '51', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('921', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '53', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('922', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '54', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('923', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '57', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('924', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '55', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('925', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '58', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('926', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '56', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('927', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '11', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('928', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '70', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('929', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '64', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('930', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '65', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('931', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '68', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('932', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '66', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('933', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '69', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('934', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '67', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('935', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '87', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('936', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '88', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('937', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '89', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('938', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '92', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('939', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '90', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('940', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '93', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('941', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '91', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('942', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '79', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('943', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '80', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('944', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '81', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('945', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '84', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('946', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '82', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('947', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '85', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('948', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '83', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('949', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '95', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('950', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '96', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('951', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '97', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('952', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '100', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('953', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '98', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('954', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '101', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('955', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '99', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('956', '2019-02-12 11:30:15', '2019-02-12 11:30:15', '102', '1', '0', '1');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_service_list
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher
-- ----------------------------
INSERT INTO `voucher` VALUES ('1', '0', '', '4', '记1', '131', '111', '43', '2019-02-11 14:30:02', '1');
INSERT INTO `voucher` VALUES ('2', '0', null, '4', '记2', '33', '1223', '1', '2019-02-11 14:30:45', '1');

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
INSERT INTO `voucher_entries` VALUES ('1', '1');
INSERT INTO `voucher_entries` VALUES ('1', '2');

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
INSERT INTO `voucher_line` VALUES ('1', '4444.23', 'CYN', '0', '323', '1', '0001', '投资房产');
INSERT INTO `voucher_line` VALUES ('2', '4444.23', 'CYN', '1', '32323', '1', '0002', '定期存款');
INSERT INTO `voucher_line` VALUES ('3', '5555.11', 'CYN', '0', '32323', '1', '0001', '投资房产');
INSERT INTO `voucher_line` VALUES ('4', '5555.11', 'CNY', '1', '3232', '1', '0002', '定期存款');

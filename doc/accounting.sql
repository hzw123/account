/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : accounting

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-01-11 17:39:18
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_log_login
-- ----------------------------
INSERT INTO `sys_log_login` VALUES ('1', '2019-01-11 12:12:54', null, '0:0:0:0:0:0:0:1', '2019-01-11 12:12:54', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('2', '2019-01-11 12:18:05', null, '0:0:0:0:0:0:0:1', '2019-01-11 12:12:54', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('3', '2019-01-11 12:35:24', null, '0:0:0:0:0:0:0:1', '2019-01-11 12:18:05', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('4', '2019-01-11 12:51:04', null, '0:0:0:0:0:0:0:1', '2019-01-11 12:35:24', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('5', '2019-01-11 12:58:35', null, '0:0:0:0:0:0:0:1', '2019-01-11 12:51:04', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('6', '2019-01-11 13:00:08', null, '0:0:0:0:0:0:0:1', '2019-01-11 12:58:35', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('7', '2019-01-11 13:02:43', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:00:08', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('8', '2019-01-11 13:03:35', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:02:43', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('9', '2019-01-11 13:04:59', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:03:35', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('10', '2019-01-11 13:05:27', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:04:59', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('11', '2019-01-11 13:07:06', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:05:27', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('12', '2019-01-11 13:15:03', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:07:06', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('13', '2019-01-11 13:15:45', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:15:03', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('14', '2019-01-11 13:20:42', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:15:45', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('15', '2019-01-11 14:45:42', null, '0:0:0:0:0:0:0:1', '2019-01-11 13:20:42', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('16', '2019-01-11 14:49:37', null, '0:0:0:0:0:0:0:1', '2019-01-11 14:45:42', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('17', '2019-01-11 14:52:16', null, '0:0:0:0:0:0:0:1', '2019-01-11 14:49:37', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('18', '2019-01-11 14:53:01', null, '0:0:0:0:0:0:0:1', '2019-01-11 14:52:16', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('19', '2019-01-11 14:56:08', null, '0:0:0:0:0:0:0:1', '2019-01-11 14:53:01', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('20', '2019-01-11 14:58:13', null, '0:0:0:0:0:0:0:1', '2019-01-11 14:56:08', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('21', '2019-01-11 14:59:12', null, '0:0:0:0:0:0:0:1', '2019-01-11 14:58:13', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('22', '2019-01-11 15:03:45', null, '0:0:0:0:0:0:0:1', '2019-01-11 14:59:12', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('23', '2019-01-11 15:04:57', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:03:45', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('24', '2019-01-11 15:05:28', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:04:57', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('25', '2019-01-11 15:06:28', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:05:28', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('26', '2019-01-11 15:11:31', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:06:28', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('27', '2019-01-11 15:13:43', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:11:31', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('28', '2019-01-11 15:18:46', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:13:43', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('29', '2019-01-11 15:20:05', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:18:46', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('30', '2019-01-11 15:21:21', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:20:05', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('31', '2019-01-11 15:23:33', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:21:21', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('32', '2019-01-11 15:25:26', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:23:33', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('33', '2019-01-11 15:44:18', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:25:26', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('34', '2019-01-11 15:47:42', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:44:18', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('35', '2019-01-11 15:49:10', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:47:42', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('36', '2019-01-11 15:50:44', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:49:10', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('37', '2019-01-11 15:54:36', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:50:44', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('38', '2019-01-11 15:56:26', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:54:36', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('39', '2019-01-11 15:57:22', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:56:26', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('40', '2019-01-11 15:57:46', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:57:22', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('41', '2019-01-11 15:58:40', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:57:46', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('42', '2019-01-11 15:59:05', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:58:40', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('43', '2019-01-11 16:02:55', null, '0:0:0:0:0:0:0:1', '2019-01-11 15:59:05', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('44', '2019-01-11 16:04:30', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:02:55', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('45', '2019-01-11 16:18:48', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:04:30', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('46', '2019-01-11 16:20:33', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:18:48', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('47', '2019-01-11 16:21:57', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:20:33', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('48', '2019-01-11 16:32:12', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:21:57', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('49', '2019-01-11 16:41:26', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:32:12', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('50', '2019-01-11 16:51:49', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:41:26', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('51', '2019-01-11 16:52:29', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:51:49', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('52', '2019-01-11 17:00:51', null, '0:0:0:0:0:0:0:1', '2019-01-11 16:52:29', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('53', '2019-01-11 17:03:53', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:00:51', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('54', '2019-01-11 17:07:17', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:03:53', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('55', '2019-01-11 17:08:21', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:07:17', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('56', '2019-01-11 17:12:51', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:08:21', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('57', '2019-01-11 17:13:14', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:12:51', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('58', '2019-01-11 17:15:10', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:13:14', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('59', '2019-01-11 17:19:40', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:15:10', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('60', '2019-01-11 17:21:10', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:19:40', '0:0:0:0:0:0:0:1', 'admin', null, '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES ('1', '2019-01-11 12:21:04', '2019-01-11 12:21:08', null, '系统管理', null, '0', null, '999', '1', null);
INSERT INTO `sys_menu` VALUES ('2', '2019-01-11 12:25:36', '2019-01-11 12:25:38', null, '权限管理', null, '1', null, '998', '1', null);
INSERT INTO `sys_menu` VALUES ('3', '2019-01-11 12:26:56', '2019-01-11 12:26:58', 'list', '角色管理', '/admin/sysRole/list', '2', null, '1', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('4', '2019-01-11 12:27:56', '2019-01-11 12:27:58', 'list', '菜单管理', '/admin/sysMenu/list', '2', null, '2', '1', 'admin-sysMenu');
INSERT INTO `sys_menu` VALUES ('5', '2019-01-11 12:30:46', '2019-01-11 12:30:48', null, '用户管理', null, '1', null, '997', '1', null);
INSERT INTO `sys_menu` VALUES ('6', '2019-01-11 12:31:36', '2019-01-11 12:31:38', 'list', '用户管理', '/admin/sysUserInfo/list', '5', null, '1', '1', 'admin-sysUserInfo');

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu_role
-- ----------------------------
INSERT INTO `sys_menu_role` VALUES ('1', '2019-01-11 12:33:57', '2019-01-11 12:34:00', '1', '1', '1', '1');
INSERT INTO `sys_menu_role` VALUES ('2', '2019-01-11 12:33:57', '2019-01-11 12:33:57', '2', '1', '2', '1');
INSERT INTO `sys_menu_role` VALUES ('3', '2019-01-11 12:33:57', '2019-01-11 12:33:57', '3', '1', '3', '1');
INSERT INTO `sys_menu_role` VALUES ('4', '2019-01-11 12:33:57', '2019-01-11 12:33:57', '4', '1', '4', '1');
INSERT INTO `sys_menu_role` VALUES ('5', '2019-01-11 12:33:57', '2019-01-11 12:33:57', '5', '1', '5', '1');
INSERT INTO `sys_menu_role` VALUES ('6', '2019-01-11 12:33:57', '2019-01-11 12:33:57', '6', '1', '6', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', '2019-01-11 12:19:00', '2019-01-11 12:18:58', '超级管理员', '超级管理员', '1', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_role_user
-- ----------------------------
INSERT INTO `sys_role_user` VALUES ('1', '2019-01-11 12:19:34', '2019-01-11 12:19:38', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for sys_service
-- ----------------------------
DROP TABLE IF EXISTS `sys_service`;
CREATE TABLE `sys_service` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `gmt_create` datetime DEFAULT NULL,
  `gmt_modified` datetime DEFAULT NULL,
  `client_id` bigint(20) DEFAULT NULL,
  `client_secret` varchar(50) DEFAULT NULL,
  `user_info_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_t8sl9kb1x7bx8dqmi97npkowh` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_service
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user_info
-- ----------------------------
INSERT INTO `sys_user_info` VALUES ('1', '2019-01-11 11:32:48', '2019-01-11 11:32:51', '11', '112788@qq.com', 'admin', '15001352593', 'login', '189c800e16db20a679c23311be2778e4', 'cb2987d0cf2949d78fb0bb921b072ac9', '1', '1', '1');

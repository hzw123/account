/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : accounting

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-01-15 17:29:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account_set
-- ----------------------------
DROP TABLE IF EXISTS `account_set`;
CREATE TABLE `account_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accounting_standard` int(11) DEFAULT NULL,
  `ad_level0` int(11) NOT NULL,
  `ad_level1` int(11) NOT NULL,
  `ad_level2` int(11) NOT NULL,
  `ad_level3` int(11) NOT NULL,
  `as_current_date` datetime DEFAULT NULL,
  `as_current_date_month` varchar(255) DEFAULT NULL,
  `as_current_date_year` varchar(255) DEFAULT NULL,
  `asub_length` int(11) NOT NULL,
  `cash_journal` int(11) NOT NULL,
  `check_needed` int(11) NOT NULL,
  `create_by` int(11) NOT NULL,
  `create_date` datetime DEFAULT NULL,
  `current_as` int(11) NOT NULL,
  `fixedasset` varchar(255) DEFAULT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `industry_name` varchar(255) DEFAULT NULL,
  `is_changed_start_date` bit(1) NOT NULL,
  `modify_by` int(11) NOT NULL,
  `modify_date` datetime DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `permission` int(11) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `start_date_month` varchar(255) DEFAULT NULL,
  `start_date_year` varchar(255) DEFAULT NULL,
  `tax_ad_id` varchar(255) DEFAULT NULL,
  `tax_numbers` varchar(255) DEFAULT NULL,
  `tax_payer_name` varchar(255) DEFAULT NULL,
  `tax_type` int(11) NOT NULL,
  `unified_number` varchar(255) DEFAULT NULL,
  `used_by` int(11) NOT NULL,
  `used_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_set
-- ----------------------------

-- ----------------------------
-- Table structure for account_subject
-- ----------------------------
DROP TABLE IF EXISTS `account_subject`;
CREATE TABLE `account_subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aa_types` varchar(255) DEFAULT NULL,
  `acronym` varchar(255) DEFAULT NULL,
  `as_id` int(11) NOT NULL,
  `assit` int(11) NOT NULL,
  `asub_code` int(11) NOT NULL,
  `asub_id` int(11) NOT NULL,
  `asub_level` int(11) NOT NULL,
  `asub_name` varchar(255) DEFAULT NULL,
  `asub_type` int(11) NOT NULL,
  `direction` int(11) NOT NULL,
  `fc_codes` varchar(255) DEFAULT NULL,
  `forgein_currcy` int(11) NOT NULL,
  `measure_unit` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `parent` int(11) NOT NULL,
  `pc_adjust` int(11) NOT NULL,
  `pinyin` varchar(255) DEFAULT NULL,
  `simple_asub_name` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_subject
-- ----------------------------

-- ----------------------------
-- Table structure for assist_accounting
-- ----------------------------
DROP TABLE IF EXISTS `assist_accounting`;
CREATE TABLE `assist_accounting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `extra_info` text,
  `as_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `type_name` int(11) NOT NULL,
  PRIMARY KEY (`id`)
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `as_id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `rate` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of currency
-- ----------------------------

-- ----------------------------
-- Table structure for period
-- ----------------------------
DROP TABLE IF EXISTS `period`;
CREATE TABLE `period` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_active` bit(1) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `as_id` int(11) NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `fs_status` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `sn` int(11) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of period
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
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8;

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
INSERT INTO `sys_log_login` VALUES ('61', '2019-01-14 12:15:36', null, '0:0:0:0:0:0:0:1', '2019-01-11 17:21:10', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('62', '2019-01-14 12:22:38', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:15:36', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('63', '2019-01-14 12:24:31', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:22:38', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('64', '2019-01-14 12:24:47', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:24:31', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('65', '2019-01-14 12:37:40', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:24:47', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('66', '2019-01-14 12:40:28', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:37:40', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('67', '2019-01-14 12:42:09', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:42:09', '0:0:0:0:0:0:0:1', 'root', null, '2');
INSERT INTO `sys_log_login` VALUES ('68', '2019-01-14 12:42:42', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:40:28', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('69', '2019-01-14 12:47:15', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:42:42', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('70', '2019-01-14 12:55:47', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:47:15', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('71', '2019-01-14 14:06:04', null, '0:0:0:0:0:0:0:1', '2019-01-14 12:55:47', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('72', '2019-01-14 14:15:12', null, '0:0:0:0:0:0:0:1', '2019-01-14 14:06:04', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('73', '2019-01-14 14:41:34', null, '0:0:0:0:0:0:0:1', '2019-01-14 14:15:12', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('74', '2019-01-14 14:43:56', null, '0:0:0:0:0:0:0:1', '2019-01-14 14:41:34', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('75', '2019-01-14 15:07:27', '2019-01-14 15:07:27', '0:0:0:0:0:0:0:1', '2019-01-14 14:43:56', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('76', '2019-01-14 15:11:47', '2019-01-14 15:11:47', '0:0:0:0:0:0:0:1', '2019-01-14 15:07:27', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('77', '2019-01-15 16:58:13', '2019-01-15 16:58:13', '0:0:0:0:0:0:0:1', '2019-01-14 15:11:47', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('78', '2019-01-15 17:06:02', '2019-01-15 17:06:02', '0:0:0:0:0:0:0:1', '2019-01-15 16:58:13', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('79', '2019-01-15 17:15:52', '2019-01-15 17:15:52', '0:0:0:0:0:0:0:1', '2019-01-15 17:06:02', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('80', '2019-01-15 17:17:38', '2019-01-15 17:17:38', '0:0:0:0:0:0:0:1', '2019-01-15 17:15:52', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('81', '2019-01-15 17:19:57', '2019-01-15 17:19:57', '0:0:0:0:0:0:0:1', '2019-01-15 17:17:38', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('82', '2019-01-15 17:21:43', '2019-01-15 17:21:43', '0:0:0:0:0:0:0:1', '2019-01-15 17:19:57', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('83', '2019-01-15 17:23:09', '2019-01-15 17:23:09', '0:0:0:0:0:0:0:1', '2019-01-15 17:21:43', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('84', '2019-01-15 17:28:09', '2019-01-15 17:28:09', '0:0:0:0:0:0:0:1', '2019-01-15 17:23:09', '0:0:0:0:0:0:0:1', 'admin', null, '1');
INSERT INTO `sys_log_login` VALUES ('85', '2019-01-15 17:29:03', '2019-01-15 17:29:03', '0:0:0:0:0:0:0:1', '2019-01-15 17:28:09', '0:0:0:0:0:0:0:1', 'admin', null, '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES ('1', '2019-01-11 12:21:04', '2019-01-11 12:21:08', null, '系统管理', null, '0', null, '999', '1', null);
INSERT INTO `sys_menu` VALUES ('2', '2019-01-11 12:25:36', '2019-01-11 12:25:38', null, '权限管理', null, '1', null, '998', '1', null);
INSERT INTO `sys_menu` VALUES ('3', '2019-01-11 12:26:56', '2019-01-11 12:26:58', 'list', '角色管理', '/admin/sysRole/list', '2', null, '1', '1', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('4', '2019-01-11 12:27:56', '2019-01-11 12:27:58', 'list', '菜单管理', '/admin/sysMenu/list', '2', null, '2', '1', 'admin-sysMenu');
INSERT INTO `sys_menu` VALUES ('5', '2019-01-11 12:30:46', '2019-01-11 12:30:48', null, '用户管理', null, '1', null, '997', '1', null);
INSERT INTO `sys_menu` VALUES ('6', '2019-01-11 12:31:36', '2019-01-11 12:31:38', 'list', '用户管理', '/admin/sysUserInfo/list', '5', null, '1', '1', 'admin-sysUserInfo');
INSERT INTO `sys_menu` VALUES ('7', null, null, 'list', '修改', '/admin/sysRole/add', '3', '', '1', '0', 'admin-sysRole');
INSERT INTO `sys_menu` VALUES ('8', '2019-01-14 15:08:15', '2019-01-14 15:08:15', '', '日志管理', '', '1', '', '999', '0', '');
INSERT INTO `sys_menu` VALUES ('10', '2019-01-14 15:10:27', '2019-01-14 15:10:27', 'list', '登录日志管理', '/admin/sysLogLogin/list', '8', '', '999', '0', 'admin-sysLogLogin');
INSERT INTO `sys_menu` VALUES ('11', null, '2019-01-15 17:21:55', '', '会计管理', '', '0', '', '1', '0', '');
INSERT INTO `sys_menu` VALUES ('12', null, '2019-01-15 17:20:11', '', '账套管理', '', '11', '', '1', '0', '');

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
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_menu_role
-- ----------------------------
INSERT INTO `sys_menu_role` VALUES ('29', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '1', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('30', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '8', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('31', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '10', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('32', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '2', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('33', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '4', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('34', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '3', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('35', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '7', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('36', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '5', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('37', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '6', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('38', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '11', '1', '0', '1');
INSERT INTO `sys_menu_role` VALUES ('39', '2019-01-15 17:22:14', '2019-01-15 17:22:14', '12', '1', '0', '1');

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
INSERT INTO `sys_role` VALUES ('1', null, '2019-01-15 17:22:07', '超级管理员', '超级管理员', '1', '1');

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
INSERT INTO `sys_role_user` VALUES ('2', null, null, '1', '0', '0', '2');

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
  `srot` int(11) NOT NULL,
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `approve_status` int(11) NOT NULL,
  `approved_by` varchar(255) DEFAULT NULL,
  `attachments` int(11) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `note` text,
  `prepared_by` varchar(255) DEFAULT NULL,
  `v_date` datetime DEFAULT NULL,
  `v_num` int(11) NOT NULL,
  `vg_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher
-- ----------------------------

-- ----------------------------
-- Table structure for voucher_line
-- ----------------------------
DROP TABLE IF EXISTS `voucher_line`;
CREATE TABLE `voucher_line` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aa_code` varchar(255) DEFAULT NULL,
  `asub_code` varchar(255) DEFAULT NULL,
  `credit` double NOT NULL,
  `debit` double NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `fc_amount` double NOT NULL,
  `fc_code` varchar(255) DEFAULT NULL,
  `fc_rate` double NOT NULL,
  `price` double NOT NULL,
  `quantity` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher_line
-- ----------------------------

-- ----------------------------
-- Table structure for voucher_lines
-- ----------------------------
DROP TABLE IF EXISTS `voucher_lines`;
CREATE TABLE `voucher_lines` (
  `voucher_id` int(11) NOT NULL,
  `lines_id` int(11) NOT NULL,
  UNIQUE KEY `UK_74c0bauacwdluoex1bv72srje` (`lines_id`),
  KEY `FK7fi7ttoqstkmtg2rsxqr5yop9` (`voucher_id`),
  CONSTRAINT `FK7fi7ttoqstkmtg2rsxqr5yop9` FOREIGN KEY (`voucher_id`) REFERENCES `voucher` (`id`),
  CONSTRAINT `FKbvy2ewbrh1b8878llokrf4ju3` FOREIGN KEY (`lines_id`) REFERENCES `voucher_line` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voucher_lines
-- ----------------------------

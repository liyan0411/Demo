/*
Navicat MySQL Data Transfer

Source Server         : mytest
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : technology

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-10 20:22:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for teach_table
-- ----------------------------
DROP TABLE IF EXISTS `teach_table`;
CREATE TABLE `teach_table` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `true_name` varchar(255) NOT NULL,
  `class` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `dead_date` datetime DEFAULT NULL,
  `total_score` int(4) unsigned zerofill DEFAULT NULL,
  `all_people` int(3) unsigned zerofill DEFAULT NULL,
  `average` double DEFAULT NULL,
  `is_talking` int(1) unsigned zerofill DEFAULT NULL COMMENT '1表示正在讲，0表示已经讲过了,2表示下一期讲',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teach_table
-- ----------------------------
INSERT INTO `teach_table` VALUES ('1', '李岩', '大前端培训', current_timestamp(), date_add(NOW(), interval 1 MONTH), '0000', '000', '0', '0');
INSERT INTO `teach_table` VALUES ('2', '李军', 'java培训', current_timestamp(), date_add(NOW(), interval 1 MONTH), '0019', '002', '9.5', '1');
INSERT INTO `teach_table` VALUES ('31', '徐于洋', '', null, null, null, null, '0', '0');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `true_name` varchar(255) NOT NULL,
  `your_grade` int(2) DEFAULT NULL,
  `has_talk` int(1) unsigned zerofill NOT NULL COMMENT '1，表示讲过了，0表示未讲过.用于抽奖去掉讲过的',
  `is_talking` int(1) unsigned zerofill DEFAULT NULL COMMENT '表示当前要评论的对象',
  `have_grade` int(1) unsigned zerofill NOT NULL COMMENT '1表示已经打过分了，0表示还未打分',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('6', 'leeyen', '888', '李岩', '0', '1', '0', '0');
INSERT INTO `users` VALUES ('7', 'admin', '888', '管理员', '0', '1', '0', '3');
INSERT INTO `users` VALUES ('8', 'lijun', '888', '李军', '2', '1', '1', '0');
INSERT INTO `users` VALUES ('15', 'xuyuyang', '888', '老徐', null, '0', '0', '0');
INSERT INTO `users` VALUES ('16', 'zhangtap', '888', '涛哥', null, '0', '0', '0');
INSERT INTO `users` VALUES ('17', 'xuzhanqiang', '888', '阿强', '10', '0', '0', '1');

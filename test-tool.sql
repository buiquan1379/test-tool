-- --------------------------------------------------------
-- Máy chủ:                      127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Phiên bản:           12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for spring_test_tools
CREATE DATABASE IF NOT EXISTS `spring_test_tools` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `spring_test_tools`;

-- Dumping structure for table spring_test_tools.accounts
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `role` enum('ROLE_MANAGER','ROLE_TESTER') DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_k8h1bgqoplx0rkngj01pm1rgp` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.accounts: ~2 rows (approximately)
INSERT INTO `accounts` (`id`, `password`, `role`, `username`) VALUES
	(1, '$2a$10$ucrDml/.XeuE.081iydRx.OiO1K.LVrkGn9xzNy4Nt/6aRYQYJ.Ae', 'ROLE_MANAGER', 'manager@gmail.com'),
	(2, '$2a$10$7GtfC69o1k.ksAhTGU.Sru7dPCwsdnSnLOnyt1FwQZPLWqRQhOGs6', 'ROLE_TESTER', 'tester1@gmail.com');

-- Dumping structure for table spring_test_tools.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `source_path` varchar(255) DEFAULT NULL,
  `types` varchar(255) DEFAULT NULL,
  `manager_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2uc1rd6470vsmxf4b0fq8ds6a` (`manager_id`),
  CONSTRAINT `FK2uc1rd6470vsmxf4b0fq8ds6a` FOREIGN KEY (`manager_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.projects: ~0 rows (approximately)
INSERT INTO `projects` (`id`, `address`, `description`, `name`, `source_path`, `types`, `manager_id`) VALUES
	('ef5e0021-95ef-4e04-b78f-46271e622bf9', NULL, 'âcscác', 'project java 1', 'project java 1/ID-29368bd7-e267-4593-9254-c200d2996672-IDtest_tool_fe.rar', 'Cucumber,Mix', 1);

-- Dumping structure for table spring_test_tools.projects_testers
CREATE TABLE IF NOT EXISTS `projects_testers` (
  `project_id` varchar(255) NOT NULL,
  `testers_id` bigint NOT NULL,
  KEY `FKqihpn0v18rxifau1app4c6o5q` (`testers_id`),
  KEY `FKmruc5fhpoavpc10l8se7yc9mu` (`project_id`),
  CONSTRAINT `FKmruc5fhpoavpc10l8se7yc9mu` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  CONSTRAINT `FKqihpn0v18rxifau1app4c6o5q` FOREIGN KEY (`testers_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.projects_testers: ~0 rows (approximately)
INSERT INTO `projects_testers` (`project_id`, `testers_id`) VALUES
	('ef5e0021-95ef-4e04-b78f-46271e622bf9', 2);

-- Dumping structure for table spring_test_tools.projects_test_suites
CREATE TABLE IF NOT EXISTS `projects_test_suites` (
  `project_id` varchar(255) NOT NULL,
  `test_suites_id` varchar(255) NOT NULL,
  UNIQUE KEY `UK_i1g1c2m6kxkstcgl634nh4kpw` (`test_suites_id`),
  KEY `FKmy7qa8p8jugm6xfk255kkinxn` (`project_id`),
  CONSTRAINT `FKmy7qa8p8jugm6xfk255kkinxn` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  CONSTRAINT `FKne4glebjxjabu7eucmoubjy0d` FOREIGN KEY (`test_suites_id`) REFERENCES `test_suite` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.projects_test_suites: ~0 rows (approximately)
INSERT INTO `projects_test_suites` (`project_id`, `test_suites_id`) VALUES
	('ef5e0021-95ef-4e04-b78f-46271e622bf9', '0edb1273-792c-49be-8e1e-8d8a88030ba8'),
	('ef5e0021-95ef-4e04-b78f-46271e622bf9', '3582e695-3214-47b1-b6a8-73d45dd56204');

-- Dumping structure for table spring_test_tools.report
CREATE TABLE IF NOT EXISTS `report` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `details` text,
  `name` varchar(255) DEFAULT NULL,
  `pass_percent` float NOT NULL,
  `project_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKgcmuvf4u951u293v5ya1lr65i` (`project_id`),
  CONSTRAINT `FKgcmuvf4u951u293v5ya1lr65i` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.report: ~0 rows (approximately)
INSERT INTO `report` (`id`, `address`, `created_at`, `description`, `details`, `name`, `pass_percent`, `project_id`) VALUES
	('42f438cd-ec00-4dd0-b2e8-7ee5b7bcbf45', NULL, '2024-07-01 15:22:03.248308', '<p>âcsc</p>', '{"ID":"9ab075b7-eecb-48d7-998f-5f2e4cf80ac1","name":"Plan 1","testSuite":{"ID":"3582e695-3214-47b1-b6a8-73d45dd56204","name":"Plan 1","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","status":"RUNNING","type":"Manual,Automated","testCaseNarios":[],"testCases":[{"ID":"cee778ac-ac01-4958-bcb4-3120d00f00c3","name":"tét 2","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"login","markType":"CRITICAL","testCaseStatus":"RUNNING","details":[{"ID":"8bde49bf-93f7-4d8d-82db-9c053f738203","name":"ták1","description":"\\u003cp\\u003esấccác\\u003c/p\\u003e","tags":"@auto","testCaseStatus":"FAILED","details":[]}]},{"ID":"f86a0f2d-c990-468b-8a63-82c877e25c5b","name":"âcscác","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","tags":"auto","markType":"HIGH","testCaseStatus":"RUNNING","details":[{"ID":"2607d96f-c4f7-4f4d-953a-180db6ef1ab5","name":"tasl 2.1","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"@test","testCaseStatus":"PASS","details":[]},{"ID":"45778e62-c4a6-413e-95ba-257e53343605","name":"task 2.2","description":"\\u003cp\\u003eacsacasc\\u003c/p\\u003e","tags":"@payment","testCaseStatus":"PASS","details":[]}]}],"createdAt":"1::thg 7::2024 15::19::38"},"project":{"ID":"ef5e0021-95ef-4e04-b78f-46271e622bf9","name":"project java 1","description":"âcscác","testers":[{"ID":2,"username":"tester1@gmail.com","password":"$2a$10$7GtfC69o1k.ksAhTGU.Sru7dPCwsdnSnLOnyt1FwQZPLWqRQhOGs6","role":"ROLE_TESTER"}],"types":"Cucumber,Mix","manager":{"ID":1,"username":"manager@gmail.com","password":"$2a$10$ucrDml/.XeuE.081iydRx.OiO1K.LVrkGn9xzNy4Nt/6aRYQYJ.Ae","role":"ROLE_MANAGER"},"sourcePath":"project java 1/ID-29368bd7-e267-4593-9254-c200d2996672-IDtest_tool_fe.rar","testSuites":[{"ID":"3582e695-3214-47b1-b6a8-73d45dd56204","name":"Plan 1","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","status":"RUNNING","type":"Manual,Automated","testCaseNarios":[],"testCases":[{"ID":"cee778ac-ac01-4958-bcb4-3120d00f00c3","name":"tét 2","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"login","markType":"CRITICAL","testCaseStatus":"RUNNING","details":[{"ID":"8bde49bf-93f7-4d8d-82db-9c053f738203","name":"ták1","description":"\\u003cp\\u003esấccác\\u003c/p\\u003e","tags":"@auto","testCaseStatus":"FAILED","details":[]}]},{"ID":"f86a0f2d-c990-468b-8a63-82c877e25c5b","name":"âcscác","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","tags":"auto","markType":"HIGH","testCaseStatus":"RUNNING","details":[{"ID":"2607d96f-c4f7-4f4d-953a-180db6ef1ab5","name":"tasl 2.1","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"@test","testCaseStatus":"PASS","details":[]},{"ID":"45778e62-c4a6-413e-95ba-257e53343605","name":"task 2.2","description":"\\u003cp\\u003eacsacasc\\u003c/p\\u003e","tags":"@payment","testCaseStatus":"PASS","details":[]}]}],"createdAt":"1::thg 7::2024 15::19::38"}]},"description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","startTime":"1::thg 7::2024 15::21::08","percentPass":100.0,"finishTime":"1::thg 7::2024 15::22::02","tester":{"ID":1,"username":"manager@gmail.com","password":"$2a$10$ucrDml/.XeuE.081iydRx.OiO1K.LVrkGn9xzNy4Nt/6aRYQYJ.Ae","role":"ROLE_MANAGER"},"runStatus":"FINISH","timeDuration":"0 hours 0 minutes 54econds"}', NULL, 100, 'ef5e0021-95ef-4e04-b78f-46271e622bf9'),
	('64c45920-0b1f-46df-9b03-733610fe84d1', NULL, '2024-07-01 15:44:26.523239', '<p>âcsc</p>', '{"ID":"534cd8de-88df-4c3a-ac40-db00c107241c","name":"Plan 1","testSuite":{"ID":"3582e695-3214-47b1-b6a8-73d45dd56204","name":"Plan 1","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","status":"RUNNING","type":"Manual,Automated","testCaseNarios":[],"testCases":[{"ID":"cee778ac-ac01-4958-bcb4-3120d00f00c3","name":"tét 2","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"login","markType":"CRITICAL","testCaseStatus":"RUNNING","details":[{"ID":"8bde49bf-93f7-4d8d-82db-9c053f738203","name":"ták1","description":"\\u003cp\\u003esấccác\\u003c/p\\u003e","tags":"@auto","testCaseStatus":"PASS","details":[]}]},{"ID":"f86a0f2d-c990-468b-8a63-82c877e25c5b","name":"âcscác","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","tags":"auto","markType":"HIGH","testCaseStatus":"RUNNING","details":[{"ID":"2607d96f-c4f7-4f4d-953a-180db6ef1ab5","name":"tasl 2.1","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"@test","testCaseStatus":"SKIPPED","details":[]},{"ID":"45778e62-c4a6-413e-95ba-257e53343605","name":"task 2.2","description":"\\u003cp\\u003eacsacasc\\u003c/p\\u003e","tags":"@payment","testCaseStatus":"PASS","details":[]}]}],"createdAt":"1::thg 7::2024 15::19::38"},"project":{"ID":"ef5e0021-95ef-4e04-b78f-46271e622bf9","name":"project java 1","description":"âcscác","testers":[{"ID":2,"username":"tester1@gmail.com","password":"$2a$10$7GtfC69o1k.ksAhTGU.Sru7dPCwsdnSnLOnyt1FwQZPLWqRQhOGs6","role":"ROLE_TESTER"}],"types":"Cucumber,Mix","manager":{"ID":1,"username":"manager@gmail.com","password":"$2a$10$ucrDml/.XeuE.081iydRx.OiO1K.LVrkGn9xzNy4Nt/6aRYQYJ.Ae","role":"ROLE_MANAGER"},"sourcePath":"project java 1/ID-29368bd7-e267-4593-9254-c200d2996672-IDtest_tool_fe.rar","testSuites":[{"ID":"0edb1273-792c-49be-8e1e-8d8a88030ba8","name":"Plan 3","description":"\\u003cp\\u003ePlan 3\\u003c/p\\u003e","status":"ACTIVE","type":"Manual","testCaseNarios":[],"testCases":[],"createdAt":"1::thg 7::2024 15::42::27"},{"ID":"3582e695-3214-47b1-b6a8-73d45dd56204","name":"Plan 1","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","status":"RUNNING","type":"Manual,Automated","testCaseNarios":[],"testCases":[{"ID":"cee778ac-ac01-4958-bcb4-3120d00f00c3","name":"tét 2","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"login","markType":"CRITICAL","testCaseStatus":"RUNNING","details":[{"ID":"8bde49bf-93f7-4d8d-82db-9c053f738203","name":"ták1","description":"\\u003cp\\u003esấccác\\u003c/p\\u003e","tags":"@auto","testCaseStatus":"PASS","details":[]}]},{"ID":"f86a0f2d-c990-468b-8a63-82c877e25c5b","name":"âcscác","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","tags":"auto","markType":"HIGH","testCaseStatus":"RUNNING","details":[{"ID":"2607d96f-c4f7-4f4d-953a-180db6ef1ab5","name":"tasl 2.1","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"@test","testCaseStatus":"SKIPPED","details":[]},{"ID":"45778e62-c4a6-413e-95ba-257e53343605","name":"task 2.2","description":"\\u003cp\\u003eacsacasc\\u003c/p\\u003e","tags":"@payment","testCaseStatus":"PASS","details":[]}]}],"createdAt":"1::thg 7::2024 15::19::38"}]},"description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","startTime":"1::thg 7::2024 15::43::29","percentPass":100.0,"finishTime":"1::thg 7::2024 15::44::26","tester":{"ID":1,"username":"manager@gmail.com","password":"$2a$10$ucrDml/.XeuE.081iydRx.OiO1K.LVrkGn9xzNy4Nt/6aRYQYJ.Ae","role":"ROLE_MANAGER"},"runStatus":"FINISH","timeDuration":"0 hours 0 minutes 56econds"}', NULL, 100, 'ef5e0021-95ef-4e04-b78f-46271e622bf9'),
	('e98aab7f-cec0-480f-8d01-546dac3f87c7', NULL, '2024-07-01 15:24:12.538145', '<p>âcsc</p>', '{"ID":"bfddbba0-821c-4407-bc9f-8b08d5e77c47","name":"Plan 1","testSuite":{"ID":"3582e695-3214-47b1-b6a8-73d45dd56204","name":"Plan 1","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","status":"RUNNING","type":"Manual,Automated","testCaseNarios":[],"testCases":[{"ID":"cee778ac-ac01-4958-bcb4-3120d00f00c3","name":"tét 2","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"login","markType":"CRITICAL","testCaseStatus":"RUNNING","details":[{"ID":"8bde49bf-93f7-4d8d-82db-9c053f738203","name":"ták1","description":"\\u003cp\\u003esấccác\\u003c/p\\u003e","tags":"@auto","testCaseStatus":"PASS","details":[]}]},{"ID":"f86a0f2d-c990-468b-8a63-82c877e25c5b","name":"âcscác","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","tags":"auto","markType":"HIGH","testCaseStatus":"RUNNING","details":[{"ID":"2607d96f-c4f7-4f4d-953a-180db6ef1ab5","name":"tasl 2.1","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"@test","testCaseStatus":"PASS","details":[]},{"ID":"45778e62-c4a6-413e-95ba-257e53343605","name":"task 2.2","description":"\\u003cp\\u003eacsacasc\\u003c/p\\u003e","tags":"@payment","testCaseStatus":"PASS","details":[]}]}],"createdAt":"1::thg 7::2024 15::19::38"},"project":{"ID":"ef5e0021-95ef-4e04-b78f-46271e622bf9","name":"project java 1","description":"âcscác","testers":[{"ID":2,"username":"tester1@gmail.com","password":"$2a$10$7GtfC69o1k.ksAhTGU.Sru7dPCwsdnSnLOnyt1FwQZPLWqRQhOGs6","role":"ROLE_TESTER"}],"types":"Cucumber,Mix","manager":{"ID":1,"username":"manager@gmail.com","password":"$2a$10$ucrDml/.XeuE.081iydRx.OiO1K.LVrkGn9xzNy4Nt/6aRYQYJ.Ae","role":"ROLE_MANAGER"},"sourcePath":"project java 1/ID-29368bd7-e267-4593-9254-c200d2996672-IDtest_tool_fe.rar","testSuites":[{"ID":"3582e695-3214-47b1-b6a8-73d45dd56204","name":"Plan 1","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","status":"RUNNING","type":"Manual,Automated","testCaseNarios":[],"testCases":[{"ID":"cee778ac-ac01-4958-bcb4-3120d00f00c3","name":"tét 2","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"login","markType":"CRITICAL","testCaseStatus":"RUNNING","details":[{"ID":"8bde49bf-93f7-4d8d-82db-9c053f738203","name":"ták1","description":"\\u003cp\\u003esấccác\\u003c/p\\u003e","tags":"@auto","testCaseStatus":"PASS","details":[]}]},{"ID":"f86a0f2d-c990-468b-8a63-82c877e25c5b","name":"âcscác","description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","tags":"auto","markType":"HIGH","testCaseStatus":"RUNNING","details":[{"ID":"2607d96f-c4f7-4f4d-953a-180db6ef1ab5","name":"tasl 2.1","description":"\\u003cp\\u003eâcscác\\u003c/p\\u003e","tags":"@test","testCaseStatus":"PASS","details":[]},{"ID":"45778e62-c4a6-413e-95ba-257e53343605","name":"task 2.2","description":"\\u003cp\\u003eacsacasc\\u003c/p\\u003e","tags":"@payment","testCaseStatus":"PASS","details":[]}]}],"createdAt":"1::thg 7::2024 15::19::38"}]},"description":"\\u003cp\\u003eâcsc\\u003c/p\\u003e","startTime":"1::thg 7::2024 15::22::34","percentPass":100.0,"finishTime":"1::thg 7::2024 15::24::12","tester":{"ID":1,"username":"manager@gmail.com","password":"$2a$10$ucrDml/.XeuE.081iydRx.OiO1K.LVrkGn9xzNy4Nt/6aRYQYJ.Ae","role":"ROLE_MANAGER"},"runStatus":"FINISH","timeDuration":"0 hours 1 minutes 98econds"}', NULL, 100, 'ef5e0021-95ef-4e04-b78f-46271e622bf9');

-- Dumping structure for table spring_test_tools.run
CREATE TABLE IF NOT EXISTS `run` (
  `id` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `finish_time` datetime(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `percent_pass` float NOT NULL,
  `run_status` enum('CANCEL','FINISH','PAUSE','RUNNING') DEFAULT NULL,
  `start_time` datetime(6) DEFAULT NULL,
  `time_duration` varchar(255) DEFAULT NULL,
  `project_id` varchar(255) DEFAULT NULL,
  `test_suite_id` varchar(255) DEFAULT NULL,
  `tester_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_eut2bskwstw4hgk4ym6w4pi89` (`test_suite_id`),
  KEY `FKm4qgbmwfx69q2nobgphx7iryf` (`project_id`),
  KEY `FKjpgnj2cpru1cxe4jjeiddor6i` (`tester_id`),
  CONSTRAINT `FKjpgnj2cpru1cxe4jjeiddor6i` FOREIGN KEY (`tester_id`) REFERENCES `accounts` (`id`),
  CONSTRAINT `FKm4qgbmwfx69q2nobgphx7iryf` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  CONSTRAINT `FKq9m0b0hnfoo7ns58rxwl962f2` FOREIGN KEY (`test_suite_id`) REFERENCES `test_suite` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.run: ~0 rows (approximately)

-- Dumping structure for table spring_test_tools.test_case
CREATE TABLE IF NOT EXISTS `test_case` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` text,
  `mark_type` enum('CRITICAL','HIGH','LOW','MEDIUM') DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `test_case_status` enum('ACTIVE','DISABLE','FAILED','PASS','PAUSE','RUNNING','SKIPPED') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.test_case: ~0 rows (approximately)
INSERT INTO `test_case` (`id`, `address`, `description`, `mark_type`, `name`, `tags`, `test_case_status`) VALUES
	('2607d96f-c4f7-4f4d-953a-180db6ef1ab5', NULL, '<p>âcscác</p>', NULL, 'tasl 2.1', '@test', 'ACTIVE'),
	('45778e62-c4a6-413e-95ba-257e53343605', NULL, '<p>acsacasc</p>', NULL, 'task 2.2', '@payment', 'ACTIVE'),
	('8bde49bf-93f7-4d8d-82db-9c053f738203', NULL, '<p>sấccác</p>', NULL, 'ták1', '@auto', 'ACTIVE'),
	('cee778ac-ac01-4958-bcb4-3120d00f00c3', NULL, '<p>âcscác</p>', 'CRITICAL', 'tét 2', 'login', 'ACTIVE'),
	('f86a0f2d-c990-468b-8a63-82c877e25c5b', NULL, '<p>âcsc</p>', 'HIGH', 'âcscác', 'auto', 'ACTIVE');

-- Dumping structure for table spring_test_tools.test_case_details
CREATE TABLE IF NOT EXISTS `test_case_details` (
  `test_case_id` varchar(255) NOT NULL,
  `details_id` varchar(255) NOT NULL,
  UNIQUE KEY `UK_melff2s5xbe8j3duoawa3422` (`details_id`),
  KEY `FKqd35gsv2blaomuc6h018fm4hc` (`test_case_id`),
  CONSTRAINT `FKqca3hiwt17j8gg47pqvoe0yn` FOREIGN KEY (`details_id`) REFERENCES `test_case` (`id`),
  CONSTRAINT `FKqd35gsv2blaomuc6h018fm4hc` FOREIGN KEY (`test_case_id`) REFERENCES `test_case` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.test_case_details: ~0 rows (approximately)
INSERT INTO `test_case_details` (`test_case_id`, `details_id`) VALUES
	('cee778ac-ac01-4958-bcb4-3120d00f00c3', '8bde49bf-93f7-4d8d-82db-9c053f738203'),
	('f86a0f2d-c990-468b-8a63-82c877e25c5b', '2607d96f-c4f7-4f4d-953a-180db6ef1ab5'),
	('f86a0f2d-c990-468b-8a63-82c877e25c5b', '45778e62-c4a6-413e-95ba-257e53343605');

-- Dumping structure for table spring_test_tools.test_case_nario
CREATE TABLE IF NOT EXISTS `test_case_nario` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` text,
  `file_url` varchar(255) DEFAULT NULL,
  `is_api` bit(1) DEFAULT NULL,
  `mark_type` enum('CRITICAL','HIGH','LOW','MEDIUM') DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` enum('ACTIVE','DISABLE','FAILED','PASS','PAUSE','RUNNING','SKIPPED') DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.test_case_nario: ~0 rows (approximately)

-- Dumping structure for table spring_test_tools.test_case_nario_details
CREATE TABLE IF NOT EXISTS `test_case_nario_details` (
  `test_case_nario_id` varchar(255) NOT NULL,
  `details_id` varchar(255) NOT NULL,
  UNIQUE KEY `UK_fkyfyl2vsbwe12hp0iydniqw1` (`details_id`),
  KEY `FKmvpb1d6jt27nj3x1quuag4g6c` (`test_case_nario_id`),
  CONSTRAINT `FKe86jam3338g5u2j3gyg7f7hs5` FOREIGN KEY (`details_id`) REFERENCES `test_case_nario` (`id`),
  CONSTRAINT `FKmvpb1d6jt27nj3x1quuag4g6c` FOREIGN KEY (`test_case_nario_id`) REFERENCES `test_case_nario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.test_case_nario_details: ~0 rows (approximately)

-- Dumping structure for table spring_test_tools.test_suite
CREATE TABLE IF NOT EXISTS `test_suite` (
  `id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` text,
  `name` varchar(255) DEFAULT NULL,
  `status` enum('ACTIVE','DISABLE','PAUSED','RUNNING') DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.test_suite: ~0 rows (approximately)
INSERT INTO `test_suite` (`id`, `address`, `created_at`, `description`, `name`, `status`, `type`) VALUES
	('0edb1273-792c-49be-8e1e-8d8a88030ba8', NULL, '2024-07-01 15:42:27.508550', '<p>Plan 3</p>', 'Plan 3', 'ACTIVE', 'Manual'),
	('3582e695-3214-47b1-b6a8-73d45dd56204', NULL, '2024-07-01 15:19:38.742576', '<p>âcsc</p>', 'Plan 1', 'ACTIVE', 'Manual,Automated');

-- Dumping structure for table spring_test_tools.test_suite_test_cases
CREATE TABLE IF NOT EXISTS `test_suite_test_cases` (
  `test_suite_id` varchar(255) NOT NULL,
  `test_cases_id` varchar(255) NOT NULL,
  UNIQUE KEY `UK_9cf2qtgs9fdn4kxramqvss1ld` (`test_cases_id`),
  KEY `FKt9l4eokw3029ess0j58poyj2j` (`test_suite_id`),
  CONSTRAINT `FK9g862r1apu7oph234nutwqyff` FOREIGN KEY (`test_cases_id`) REFERENCES `test_case` (`id`),
  CONSTRAINT `FKt9l4eokw3029ess0j58poyj2j` FOREIGN KEY (`test_suite_id`) REFERENCES `test_suite` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.test_suite_test_cases: ~0 rows (approximately)
INSERT INTO `test_suite_test_cases` (`test_suite_id`, `test_cases_id`) VALUES
	('3582e695-3214-47b1-b6a8-73d45dd56204', 'cee778ac-ac01-4958-bcb4-3120d00f00c3'),
	('3582e695-3214-47b1-b6a8-73d45dd56204', 'f86a0f2d-c990-468b-8a63-82c877e25c5b');

-- Dumping structure for table spring_test_tools.test_suite_test_case_narios
CREATE TABLE IF NOT EXISTS `test_suite_test_case_narios` (
  `test_suite_id` varchar(255) NOT NULL,
  `test_case_narios_id` varchar(255) NOT NULL,
  UNIQUE KEY `UK_q2rdb5356e0oqqoh4cnpsiyi` (`test_case_narios_id`),
  KEY `FK57w3mtafvxj615thqw5nklx7y` (`test_suite_id`),
  CONSTRAINT `FK57w3mtafvxj615thqw5nklx7y` FOREIGN KEY (`test_suite_id`) REFERENCES `test_suite` (`id`),
  CONSTRAINT `FK8gtggm6m3jvyp51ybclxlncmg` FOREIGN KEY (`test_case_narios_id`) REFERENCES `test_case_nario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table spring_test_tools.test_suite_test_case_narios: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

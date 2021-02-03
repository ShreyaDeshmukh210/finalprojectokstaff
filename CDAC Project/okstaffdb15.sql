CREATE DATABASE  IF NOT EXISTS `okstaff` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `okstaff`;
-- MariaDB dump 10.17  Distrib 10.4.6-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: okstaff
-- ------------------------------------------------------
-- Server version	10.4.6-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attendance` (
  `attendance_emp_id` int(11) NOT NULL,
  `attendance_date` varchar(45) DEFAULT NULL,
  `attendance_intime` varchar(45) DEFAULT NULL,
  `attendance_outtime` varchar(45) DEFAULT NULL,
  `attendance_id` int(11) NOT NULL,
  PRIMARY KEY (`attendance_id`),
  KEY `attendance_emp_id` (`attendance_emp_id`),
  CONSTRAINT `attendance_emp_id` FOREIGN KEY (`attendance_emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `department_id` int(11) NOT NULL,
  `department_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`department_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'Maintanance'),(2,'Production '),(3,'Quality '),(4,'admin');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `emp_id` int(11) NOT NULL,
  `emp_designation` varchar(45) DEFAULT NULL,
  `emp_password` varchar(45) DEFAULT NULL,
  `emp_fname` varchar(45) DEFAULT NULL,
  `emp_mname` varchar(45) DEFAULT NULL,
  `emp_lname` varchar(45) DEFAULT NULL,
  `emp_contactno` varchar(45) DEFAULT NULL,
  `emp_emailid` varchar(45) DEFAULT NULL,
  `emp_address` varchar(45) DEFAULT NULL,
  `emp_aadharcard` varchar(45) DEFAULT NULL,
  `emp_photo` varchar(45) DEFAULT NULL,
  `emp_dob` date DEFAULT NULL,
  `emp_doj` date DEFAULT NULL,
  `emp_auth_status` varchar(45) DEFAULT NULL,
  `emp_securityque` varchar(45) DEFAULT NULL,
  `emp_manager_id` int(11) DEFAULT NULL,
  `emp_department_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `emp_designation` (`emp_designation`),
  KEY `emp_department_id` (`emp_department_id`),
  CONSTRAINT `emp_department_id` FOREIGN KEY (`emp_department_id`) REFERENCES `department` (`department_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `emp_designation` FOREIGN KEY (`emp_designation`) REFERENCES `leave_master` (`leave_designation`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1001,'employee','neha@123','Neha','Prakash','Desia','7775965860','neha@gmail.com','Shivaji Nagar,Pune','501110386889','11','1995-08-13','2018-09-15','completed','Prakash',1004,1),(1002,'employee','amit@123','Amit','Sujay','Joshi','8956235582','amit@gmail.com','Sainagar, Amravati','895622455622','11','1996-09-05','2017-03-24','completed','Sujay',1005,2),(1003,'employee','vipin@123','Vipin','Mukesh','Solanke','8555562544','vipin@gmail.com','Gandhi Nagar, Mumbai','856482256988','11','1993-12-03','2016-04-15','completed','Mukesh',1006,3),(1004,'manager','shraddha@123','Shraddha','Ramesh','Kale','8956255215','shraddha@gmail.com','Hadapsar ,Pune','455445588921','11','1991-03-25','2014-07-15','completed','Ramesh',0,1),(1005,'manager','bhavesh@123','Bhavesh','Manoj','Sune','9844255555','bhavesh@gmail.com','Magarpatta,Pune','856644416656','11','1990-05-10','2015-07-06','completed','Manoj',0,2),(1006,'manager','prajakta@123','Prajakta','Nitin','Mali','7691155645','prajakta@gmail.com','Shanivarvada,Pune','782656565555','11','1992-08-23','2014-09-18','completed','Nitin',0,3),(1007,'admin','vishwas@admin','Vishwas','rajesh','kale','8087552146','vishwas@gmail.com','Gopalnagar,Akola','444486624455','11','1990-05-05','2010-09-12','completed','Rajesh',0,4);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_master`
--

DROP TABLE IF EXISTS `leave_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leave_master` (
  `leave_designation` varchar(45) NOT NULL,
  `leave_sick_leave` varchar(45) DEFAULT NULL,
  `leave_casual_leave` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`leave_designation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_master`
--

LOCK TABLES `leave_master` WRITE;
/*!40000 ALTER TABLE `leave_master` DISABLE KEYS */;
INSERT INTO `leave_master` VALUES ('admin','0','0'),('employee','5','5'),('manager','10','10');
/*!40000 ALTER TABLE `leave_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_transaction`
--

DROP TABLE IF EXISTS `leave_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leave_transaction` (
  `leave_transaction_id` int(11) NOT NULL,
  `leave_emp_id` int(11) NOT NULL,
  `leave_sick_leave` varchar(45) DEFAULT NULL,
  `leave_casual_leave` varchar(45) DEFAULT NULL,
  `leave_todate` varchar(45) DEFAULT NULL,
  `leave_fromdate` varchar(45) DEFAULT NULL,
  `leave_description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`leave_transaction_id`),
  KEY `leave_emp_id` (`leave_emp_id`),
  CONSTRAINT `leave_emp_id` FOREIGN KEY (`leave_emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_transaction`
--

LOCK TABLES `leave_transaction` WRITE;
/*!40000 ALTER TABLE `leave_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `leave_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payslip`
--

DROP TABLE IF EXISTS `payslip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payslip` (
  `payslip_id` int(11) NOT NULL,
  `payslip_workingdays` varchar(45) DEFAULT NULL,
  `payslip_emp_id` int(11) NOT NULL,
  `payslip_date` date DEFAULT NULL,
  `payslip_salary` float DEFAULT NULL,
  PRIMARY KEY (`payslip_id`),
  KEY `payslip_emp_id` (`payslip_emp_id`),
  CONSTRAINT `payslip_emp_id` FOREIGN KEY (`payslip_emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payslip`
--

LOCK TABLES `payslip` WRITE;
/*!40000 ALTER TABLE `payslip` DISABLE KEYS */;
/*!40000 ALTER TABLE `payslip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salary`
--

DROP TABLE IF EXISTS `salary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `salary` (
  `salary_id` int(11) NOT NULL,
  `salary_emp_id` int(11) NOT NULL,
  `salary_ctc` float DEFAULT NULL,
  `salary_monthly_sal` float DEFAULT NULL,
  `salary_PF` float DEFAULT NULL,
  `salary_proftax` float DEFAULT NULL,
  PRIMARY KEY (`salary_id`),
  KEY `salary_emp_id` (`salary_emp_id`),
  CONSTRAINT `salary_emp_id` FOREIGN KEY (`salary_emp_id`) REFERENCES `employee` (`emp_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salary`
--

LOCK TABLES `salary` WRITE;
/*!40000 ALTER TABLE `salary` DISABLE KEYS */;
INSERT INTO `salary` VALUES (1,1001,60000,5000,0.03,0.02),(2,1002,72000,6000,0.03,0.02),(3,1003,84000,7000,0.03,0.02),(4,1004,108000,9000,0.03,0.02),(5,1005,120000,10000,0.03,0.02),(6,1006,240000,12000,0.03,0.02);
/*!40000 ALTER TABLE `salary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'okstaff'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-15 16:59:53

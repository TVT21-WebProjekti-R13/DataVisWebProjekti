-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: testisql
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `testisql`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `testisql` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `testisql`;

--
-- Table structure for table `käyttäjä`
--

DROP TABLE IF EXISTS `käyttäjä`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `käyttäjä` (
  `ID` int NOT NULL,
  `Käyttäjänimi` varchar(16) DEFAULT NULL,
  `sPosti` varchar(32) DEFAULT NULL,
  `Etunimi` varchar(32) DEFAULT NULL,
  `Sukunimi` varchar(32) DEFAULT NULL,
  `SalasanaSalt` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `käyttäjä`
--

LOCK TABLES `käyttäjä` WRITE;
/*!40000 ALTER TABLE `käyttäjä` DISABLE KEYS */;
INSERT INTO `käyttäjä` VALUES (0,'adminSanteri','t1knsa00@students.oamk.fi','Santeri','Knihtilä',NULL),(1,'adminAappo','t1laaa00@students.oamk.fi','Aappo','Launonen',NULL);
/*!40000 ALTER TABLE `käyttäjä` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salasana`
--

DROP TABLE IF EXISTS `salasana`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salasana` (
  `Hash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salasana`
--

LOCK TABLES `salasana` WRITE;
/*!40000 ALTER TABLE `salasana` DISABLE KEYS */;
/*!40000 ALTER TABLE `salasana` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visualisointi`
--

DROP TABLE IF EXISTS `visualisointi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visualisointi` (
  `ID` int NOT NULL,
  `Data` varchar(2048) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visualisointi`
--

LOCK TABLES `visualisointi` WRITE;
/*!40000 ALTER TABLE `visualisointi` DISABLE KEYS */;
INSERT INTO `visualisointi` VALUES (0,'{\"key1\" : \"value1\", \"key2\" : \"value2\"}');
/*!40000 ALTER TABLE `visualisointi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-10 11:32:16

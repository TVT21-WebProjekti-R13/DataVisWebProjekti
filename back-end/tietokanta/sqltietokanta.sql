-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sqltietokanta2
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `descriptions`
--

DROP TABLE IF EXISTS `descriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descriptions` (
  `vis` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `datalink` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `desclink` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `humanevolution`
--

DROP TABLE IF EXISTS `humanevolution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `humanevolution` (
  `time` int DEFAULT NULL,
  `anomaly` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v10`
--

DROP TABLE IF EXISTS `v10`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v10` (
  `time` int DEFAULT NULL,
  `anomaly` varchar(247) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v1globalannual`
--

DROP TABLE IF EXISTS `v1globalannual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v1globalannual` (
  `time` int DEFAULT NULL,
  `anomaly` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v1globalmonthly`
--

DROP TABLE IF EXISTS `v1globalmonthly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v1globalmonthly` (
  `time` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `anomaly` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v1northernannual`
--

DROP TABLE IF EXISTS `v1northernannual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v1northernannual` (
  `time` int DEFAULT NULL,
  `anomaly` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v1northernmonthly`
--

DROP TABLE IF EXISTS `v1northernmonthly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v1northernmonthly` (
  `time` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `anomaly` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v1southernannual`
--

DROP TABLE IF EXISTS `v1southernannual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v1southernannual` (
  `time` int DEFAULT NULL,
  `anomaly` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v1southernmonthly`
--

DROP TABLE IF EXISTS `v1southernmonthly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v1southernmonthly` (
  `time` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `anomaly` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v2`
--

DROP TABLE IF EXISTS `v2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v2` (
  `time` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `anomaly` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v3annual`
--

DROP TABLE IF EXISTS `v3annual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v3annual` (
  `time` int DEFAULT NULL,
  `anomaly` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v3monthly`
--

DROP TABLE IF EXISTS `v3monthly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v3monthly` (
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `anomaly` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v4`
--

DROP TABLE IF EXISTS `v4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v4` (
  `time` int DEFAULT NULL,
  `anomaly` decimal(4,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v4de2`
--

DROP TABLE IF EXISTS `v4de2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v4de2` (
  `time` int DEFAULT NULL,
  `anomaly` decimal(4,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v4dss`
--

DROP TABLE IF EXISTS `v4dss`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v4dss` (
  `time` int DEFAULT NULL,
  `anomaly` decimal(4,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v5`
--

DROP TABLE IF EXISTS `v5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v5` (
  `time` int DEFAULT NULL,
  `anomaly` decimal(4,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v6`
--

DROP TABLE IF EXISTS `v6`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v6` (
  `time` int DEFAULT NULL,
  `anomaly` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v7a1`
--

DROP TABLE IF EXISTS `v7a1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v7a1` (
  `time` int DEFAULT NULL,
  `anomaly` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v7c1`
--

DROP TABLE IF EXISTS `v7c1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v7c1` (
  `time` int DEFAULT NULL,
  `anomaly` decimal(10,7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v8`
--

DROP TABLE IF EXISTS `v8`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v8` (
  `time` int DEFAULT NULL,
  `Afghanistan` int DEFAULT NULL,
  `Albania` int DEFAULT NULL,
  `Algeria` int DEFAULT NULL,
  `Andorra` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Angola` int DEFAULT NULL,
  `Anguilla` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Antigua and Barbuda` int DEFAULT NULL,
  `Argentina` int DEFAULT NULL,
  `Armenia` int DEFAULT NULL,
  `Aruba` int DEFAULT NULL,
  `Australia` int DEFAULT NULL,
  `Austria` int DEFAULT NULL,
  `Azerbaijan` int DEFAULT NULL,
  `Bahamas` int DEFAULT NULL,
  `Bahrain` int DEFAULT NULL,
  `Bangladesh` int DEFAULT NULL,
  `Barbados` int DEFAULT NULL,
  `Belarus` int DEFAULT NULL,
  `Belgium` int DEFAULT NULL,
  `Belize` int DEFAULT NULL,
  `Benin` int DEFAULT NULL,
  `Bermuda` int DEFAULT NULL,
  `Bhutan` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Bonaire, Saint Eustatius and Saba` int DEFAULT NULL,
  `Bosnia and Herzegovina` int DEFAULT NULL,
  `Botswana` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Brazil` int DEFAULT NULL,
  `British Virgin Islands` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Brunei Darussalam` int DEFAULT NULL,
  `Bulgaria` int DEFAULT NULL,
  `Burkina Faso` int DEFAULT NULL,
  `Burundi` int DEFAULT NULL,
  `Cambodia` int DEFAULT NULL,
  `Canada` int DEFAULT NULL,
  `Cape Verde` int DEFAULT NULL,
  `Central African Republic` int DEFAULT NULL,
  `Chad` int DEFAULT NULL,
  `Chile` int DEFAULT NULL,
  `China` int DEFAULT NULL,
  `Colombia` int DEFAULT NULL,
  `Comoros` int DEFAULT NULL,
  `Congo` int DEFAULT NULL,
  `Cook Islands` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Costa Rica` int DEFAULT NULL,
  `Côte d'Ivoire` int DEFAULT NULL,
  `Croatia` int DEFAULT NULL,
  `Cuba` int DEFAULT NULL,
  `Curaçao` int DEFAULT NULL,
  `Cyprus` int DEFAULT NULL,
  `Czech Republic` int DEFAULT NULL,
  `North Korea` int DEFAULT NULL,
  `Democratic Republic of the Congo` int DEFAULT NULL,
  `Denmark` int DEFAULT NULL,
  `Djibouti` int DEFAULT NULL,
  `Dominica` int DEFAULT NULL,
  `Dominican Republic` int DEFAULT NULL,
  `Ecuador` int DEFAULT NULL,
  `Egypt` int DEFAULT NULL,
  `El Salvador` int DEFAULT NULL,
  `Equatorial Guinea` int DEFAULT NULL,
  `Eritrea` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Estonia` int DEFAULT NULL,
  `Ethiopia` int DEFAULT NULL,
  `Faeroe Islands` int DEFAULT NULL,
  `Micronesia (Federated States of)` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Fiji` int DEFAULT NULL,
  `Finland` int DEFAULT NULL,
  `France` int DEFAULT NULL,
  `French Guiana` int DEFAULT NULL,
  `French Polynesia` int DEFAULT NULL,
  `Gabon` int DEFAULT NULL,
  `Gambia` int DEFAULT NULL,
  `Georgia` int DEFAULT NULL,
  `Germany` int DEFAULT NULL,
  `Ghana` int DEFAULT NULL,
  `Greece` int DEFAULT NULL,
  `Greenland` int DEFAULT NULL,
  `Grenada` int DEFAULT NULL,
  `Guadeloupe` int DEFAULT NULL,
  `Guatemala` int DEFAULT NULL,
  `Guinea` int DEFAULT NULL,
  `Guinea-Bissau` int DEFAULT NULL,
  `Guyana` int DEFAULT NULL,
  `Haiti` int DEFAULT NULL,
  `Honduras` int DEFAULT NULL,
  `Hong Kong` int DEFAULT NULL,
  `Hungary` int DEFAULT NULL,
  `Iceland` int DEFAULT NULL,
  `India` int DEFAULT NULL,
  `Indonesia` int DEFAULT NULL,
  `Iraq` int DEFAULT NULL,
  `Ireland` int DEFAULT NULL,
  `Iran` int DEFAULT NULL,
  `Israel` int DEFAULT NULL,
  `Italy` int DEFAULT NULL,
  `Jamaica` int DEFAULT NULL,
  `Japan` int DEFAULT NULL,
  `Jordan` int DEFAULT NULL,
  `Kazakhstan` int DEFAULT NULL,
  `Kenya` int DEFAULT NULL,
  `Kiribati` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Kosovo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Kuwait` int DEFAULT NULL,
  `Kyrgyzstan` int DEFAULT NULL,
  `Laos` int DEFAULT NULL,
  `Latvia` int DEFAULT NULL,
  `Lebanon` int DEFAULT NULL,
  `Lesotho` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Liberia` int DEFAULT NULL,
  `Libya` int DEFAULT NULL,
  `Liechtenstein` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Lithuania` int DEFAULT NULL,
  `Luxembourg` int DEFAULT NULL,
  `Macao` int DEFAULT NULL,
  `North Macedonia` int DEFAULT NULL,
  `Madagascar` int DEFAULT NULL,
  `Malawi` int DEFAULT NULL,
  `Malaysia` int DEFAULT NULL,
  `Maldives` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Mali` int DEFAULT NULL,
  `Malta` int DEFAULT NULL,
  `Marshall Islands` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Martinique` int DEFAULT NULL,
  `Mauritania` int DEFAULT NULL,
  `Mauritius` int DEFAULT NULL,
  `Mayotte` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Mexico` int DEFAULT NULL,
  `Mongolia` int DEFAULT NULL,
  `Montenegro` int DEFAULT NULL,
  `Montserrat` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Morocco` int DEFAULT NULL,
  `Mozambique` int DEFAULT NULL,
  `Myanmar` int DEFAULT NULL,
  `Namibia` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Nauru` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Nepal` int DEFAULT NULL,
  `Netherlands` int DEFAULT NULL,
  `New Caledonia` int DEFAULT NULL,
  `New Zealand` int DEFAULT NULL,
  `Nicaragua` int DEFAULT NULL,
  `Niger` int DEFAULT NULL,
  `Nigeria` int DEFAULT NULL,
  `Niue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Norway` int DEFAULT NULL,
  `Occupied Palestinian Territory` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Oman` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Pakistan` int DEFAULT NULL,
  `Palau` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Panama` int DEFAULT NULL,
  `Papua New Guinea` int DEFAULT NULL,
  `Paraguay` int DEFAULT NULL,
  `Peru` int DEFAULT NULL,
  `Philippines` int DEFAULT NULL,
  `Bolivia` int DEFAULT NULL,
  `Poland` int DEFAULT NULL,
  `Portugal` int DEFAULT NULL,
  `Qatar` int DEFAULT NULL,
  `Cameroon` int DEFAULT NULL,
  `South Korea` int DEFAULT NULL,
  `Moldova` int DEFAULT NULL,
  `South Sudan` int DEFAULT NULL,
  `Sudan` int DEFAULT NULL,
  `Réunion` int DEFAULT NULL,
  `Romania` int DEFAULT NULL,
  `Russian Federation` int DEFAULT NULL,
  `Rwanda` int DEFAULT NULL,
  `Saint Helena` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Saint Lucia` int DEFAULT NULL,
  `Sint Maarten (Dutch part)` int DEFAULT NULL,
  `Samoa` int DEFAULT NULL,
  `Sao Tome and Principe` int DEFAULT NULL,
  `Saudi Arabia` int DEFAULT NULL,
  `Senegal` int DEFAULT NULL,
  `Serbia` int DEFAULT NULL,
  `Seychelles` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Sierra Leone` int DEFAULT NULL,
  `Singapore` int DEFAULT NULL,
  `Slovakia` int DEFAULT NULL,
  `Slovenia` int DEFAULT NULL,
  `Solomon Islands` int DEFAULT NULL,
  `Somalia` int DEFAULT NULL,
  `South Africa` int DEFAULT NULL,
  `Spain` int DEFAULT NULL,
  `Sri Lanka` int DEFAULT NULL,
  `Saint Kitts and Nevis` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Saint Pierre and Miquelon` int DEFAULT NULL,
  `Saint Vincent and the Grenadines` int DEFAULT NULL,
  `Suriname` int DEFAULT NULL,
  `Swaziland` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Sweden` int DEFAULT NULL,
  `Switzerland` int DEFAULT NULL,
  `Syria` int DEFAULT NULL,
  `Taiwan` int DEFAULT NULL,
  `Tajikistan` int DEFAULT NULL,
  `Thailand` int DEFAULT NULL,
  `Timor-Leste` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Togo` int DEFAULT NULL,
  `Tonga` int DEFAULT NULL,
  `Trinidad and Tobago` int DEFAULT NULL,
  `Tunisia` int DEFAULT NULL,
  `Turkey` int DEFAULT NULL,
  `Turkmenistan` int DEFAULT NULL,
  `Turks and Caicos Islands` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Tuvalu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Uganda` int DEFAULT NULL,
  `Ukraine` int DEFAULT NULL,
  `United Arab Emirates` int DEFAULT NULL,
  `United Kingdom` int DEFAULT NULL,
  `Tanzania` int DEFAULT NULL,
  `USA` int DEFAULT NULL,
  `Uruguay` int DEFAULT NULL,
  `Uzbekistan` int DEFAULT NULL,
  `Vanuatu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Venezuela` int DEFAULT NULL,
  `Viet Nam` int DEFAULT NULL,
  `Wallis and Futuna Islands` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `Yemen` int DEFAULT NULL,
  `Zambia` int DEFAULT NULL,
  `Zimbabwe` int DEFAULT NULL,
  `KP Annex B` int DEFAULT NULL,
  `Non KP Annex B` int DEFAULT NULL,
  `OECD` int DEFAULT NULL,
  `Non-OECD` int DEFAULT NULL,
  `EU27` int DEFAULT NULL,
  `Africa` int DEFAULT NULL,
  `Asia` int DEFAULT NULL,
  `Central America` int DEFAULT NULL,
  `Europe` int DEFAULT NULL,
  `Middle East` int DEFAULT NULL,
  `North America` int DEFAULT NULL,
  `Oceania` int DEFAULT NULL,
  `South America` int DEFAULT NULL,
  `Bunkers` int DEFAULT NULL,
  `Statistical Difference` int DEFAULT NULL,
  `World` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v9byindustry`
--

DROP TABLE IF EXISTS `v9byindustry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v9byindustry` (
  `sector` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `anomaly` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v9bysector`
--

DROP TABLE IF EXISTS `v9bysector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v9bysector` (
  `Sub-sector` varchar(37) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `Share of global greenhouse gas emissions (%)` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `v9bysubsector`
--

DROP TABLE IF EXISTS `v9bysubsector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `v9bysubsector` (
  `sub-sector` varchar(37) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `Share of global greenhouse gas emissions (%)` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `views`
--

DROP TABLE IF EXISTS `views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `views` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visuals` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `owner` int NOT NULL,
  `viewID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `visuals`
--

DROP TABLE IF EXISTS `visuals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visuals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visual_name` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tables` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `options` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-12 23:11:52

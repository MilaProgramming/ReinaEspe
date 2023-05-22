CREATE DATABASE  IF NOT EXISTS `sistema_eleccion_reina` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sistema_eleccion_reina`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: sistema_eleccion_reina
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `calificacion`
--

DROP TABLE IF EXISTS `calificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calificacion` (
  `CALIFICACION_ID` int NOT NULL,
  `EVENTO_ID` int NOT NULL,
  `USUARIO_ID` int NOT NULL,
  `CALIFICACION_NOMBRE` varchar(30) NOT NULL,
  `CALIFICACION_PESO` int NOT NULL,
  `CALIFICACION_VALOR` int NOT NULL,
  PRIMARY KEY (`CALIFICACION_ID`),
  KEY `FK_ABARCA` (`EVENTO_ID`),
  KEY `FK_ADMINISTRA` (`USUARIO_ID`),
  CONSTRAINT `FK_ABARCA` FOREIGN KEY (`EVENTO_ID`) REFERENCES `evento` (`EVENTO_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_ADMINISTRA` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuario` (`USUARIO_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calificacion`
--

LOCK TABLES `calificacion` WRITE;
/*!40000 ALTER TABLE `calificacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `calificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidata`
--

DROP TABLE IF EXISTS `candidata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidata` (
  `CANDIDATA_ID` int NOT NULL,
  `CARRERA_ID` int NOT NULL,
  `ELECCION_ID` int NOT NULL,
  `CAND_APELLIDOPATERNO` varchar(30) NOT NULL,
  `CAND_APELLIDOMATERNO` varchar(30) NOT NULL,
  `CAND_NOMBRE1` varchar(30) NOT NULL,
  `CAND_NOMBRE2` varchar(30) DEFAULT NULL,
  `CAND_FECHANACIMIENTO` date NOT NULL,
  `CAND_LABOR_SOCIAL` longtext NOT NULL,
  `CAND_ESTATURA` decimal(3,2) NOT NULL COMMENT 'La estatura debe ser en metros',
  `CAND_DATOS_SIGNIFICATIVOS` varchar(500) NOT NULL,
  `CAND_IDIOMAS` varchar(100) NOT NULL,
  `CAND_COLOROJOS` varchar(30) NOT NULL,
  `CAND_COLORCABELLO` varchar(30) NOT NULL,
  `CAND_AMISTAD` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`CANDIDATA_ID`),
  KEY `FK_ESTUDIA` (`CARRERA_ID`),
  KEY `FK_PARTICIPA` (`ELECCION_ID`),
  CONSTRAINT `FK_ESTUDIA` FOREIGN KEY (`CARRERA_ID`) REFERENCES `carrera` (`CARRERA_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_PARTICIPA` FOREIGN KEY (`ELECCION_ID`) REFERENCES `eleccion` (`ELECCION_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidata`
--

LOCK TABLES `candidata` WRITE;
/*!40000 ALTER TABLE `candidata` DISABLE KEYS */;
INSERT INTO `candidata` VALUES (201,501,701,'Watson','Zambrano','Emma','Guatson','2000-10-05','Enseñar Programación',1.77,'Sabe Karate','Inglés, Español','Azul','Cenizo',0),(202,501,701,'Jolie','Gualotuña','Angelina','Yuleiza','1999-04-07','Vender Queso',1.60,'Juega LoL','Español, Francés','Marr+on','Marrón',0);
/*!40000 ALTER TABLE `candidata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrera`
--

DROP TABLE IF EXISTS `carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrera` (
  `CARRERA_ID` int NOT NULL,
  `DEPARTAMENTO_ID` int NOT NULL,
  `CARRERA_NOMBRE` varchar(30) NOT NULL,
  PRIMARY KEY (`CARRERA_ID`),
  KEY `FK_PERTENECE` (`DEPARTAMENTO_ID`),
  CONSTRAINT `FK_PERTENECE` FOREIGN KEY (`DEPARTAMENTO_ID`) REFERENCES `departamento` (`DEPARTAMENTO_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrera`
--

LOCK TABLES `carrera` WRITE;
/*!40000 ALTER TABLE `carrera` DISABLE KEYS */;
INSERT INTO `carrera` VALUES (501,1,'Matemática');
/*!40000 ALTER TABLE `carrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `DEPARTAMENTO_ID` int NOT NULL,
  `DEPARTMENTO_NOMBRE` varchar(30) NOT NULL,
  PRIMARY KEY (`DEPARTAMENTO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES (1,'Ciencias Exactas');
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eleccion`
--

DROP TABLE IF EXISTS `eleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eleccion` (
  `ELECCION_ID` int NOT NULL,
  `ELECCION_PERIODO` varchar(30) NOT NULL,
  PRIMARY KEY (`ELECCION_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eleccion`
--

LOCK TABLES `eleccion` WRITE;
/*!40000 ALTER TABLE `eleccion` DISABLE KEYS */;
INSERT INTO `eleccion` VALUES (701,'Primero');
/*!40000 ALTER TABLE `eleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `EVENTO_ID` int NOT NULL,
  `ELECCION_ID` int NOT NULL,
  `EVENTO_NOMBRE` varchar(30) NOT NULL,
  `EVENTO_PESO` int NOT NULL,
  `EVENTO_CALIFICACION` decimal(5,2) NOT NULL,
  PRIMARY KEY (`EVENTO_ID`),
  KEY `FK_CORRESPONDE` (`ELECCION_ID`),
  CONSTRAINT `FK_CORRESPONDE` FOREIGN KEY (`ELECCION_ID`) REFERENCES `eleccion` (`ELECCION_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foto_candidata`
--

DROP TABLE IF EXISTS `foto_candidata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foto_candidata` (
  `FOTO_ID` int NOT NULL,
  `CANDIDATA_ID` int NOT NULL,
  `FOTO_DESCRIPCION` varchar(30) NOT NULL COMMENT 'Foto gala y tipico. Fotos generales de cada candidata',
  `FOTO_URL` varchar(40) NOT NULL,
  PRIMARY KEY (`FOTO_ID`),
  KEY `FK_DISPONE` (`CANDIDATA_ID`),
  CONSTRAINT `FK_DISPONE` FOREIGN KEY (`CANDIDATA_ID`) REFERENCES `candidata` (`CANDIDATA_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto_candidata`
--

LOCK TABLES `foto_candidata` WRITE;
/*!40000 ALTER TABLE `foto_candidata` DISABLE KEYS */;
INSERT INTO `foto_candidata` VALUES (301,201,'Emma Guatson 1','C:\\fakepath\\ew1.jpg'),(302,201,'Emma Guatson 2','C:\\fakepath\\ew2.jpg'),(303,201,'Emma Guatson 3','C:\\fakepath\\ew3.jpg'),(311,202,'Angelina Jolie 1','C:\\fakepath\\aj1.jpg'),(312,202,'Angelina Jolie 2','C:\\fakepath\\aj2.jpg'),(313,202,'Angelina Jolie 3','C:\\fakepath\\aj3.jpg');
/*!40000 ALTER TABLE `foto_candidata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntaje`
--

DROP TABLE IF EXISTS `puntaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puntaje` (
  `CANDIDATA_ID` int NOT NULL,
  `EVENTO_ID` int NOT NULL,
  `CALIFICACIONFINAL` decimal(5,2) NOT NULL,
  PRIMARY KEY (`CANDIDATA_ID`,`EVENTO_ID`),
  KEY `FK_PUNTAJE` (`EVENTO_ID`),
  CONSTRAINT `FK_PUNTAJE` FOREIGN KEY (`EVENTO_ID`) REFERENCES `evento` (`EVENTO_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_PUNTAJE2` FOREIGN KEY (`CANDIDATA_ID`) REFERENCES `candidata` (`CANDIDATA_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntaje`
--

LOCK TABLES `puntaje` WRITE;
/*!40000 ALTER TABLE `puntaje` DISABLE KEYS */;
/*!40000 ALTER TABLE `puntaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sede`
--

DROP TABLE IF EXISTS `sede`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sede` (
  `SEDE_ID` int NOT NULL,
  `SEDE_NOMBRE` varchar(30) NOT NULL,
  PRIMARY KEY (`SEDE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sede`
--

LOCK TABLES `sede` WRITE;
/*!40000 ALTER TABLE `sede` DISABLE KEYS */;
/*!40000 ALTER TABLE `sede` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiene`
--

DROP TABLE IF EXISTS `tiene`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiene` (
  `DEPARTAMENTO_ID` int NOT NULL,
  `SEDE_ID` int NOT NULL,
  PRIMARY KEY (`DEPARTAMENTO_ID`,`SEDE_ID`),
  KEY `FK_TIENE2` (`SEDE_ID`),
  CONSTRAINT `FK_TIENE` FOREIGN KEY (`DEPARTAMENTO_ID`) REFERENCES `departamento` (`DEPARTAMENTO_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_TIENE2` FOREIGN KEY (`SEDE_ID`) REFERENCES `sede` (`SEDE_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiene`
--

LOCK TABLES `tiene` WRITE;
/*!40000 ALTER TABLE `tiene` DISABLE KEYS */;
/*!40000 ALTER TABLE `tiene` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `USUARIO_ID` int NOT NULL,
  `ELECCION_ID` int NOT NULL,
  `USUARIO_USERNAME` varchar(30) NOT NULL COMMENT 'Username para ingresar al sistema\n            ',
  `USUARIO_CONTRASENA` varchar(30) NOT NULL,
  `USUARIO_NOMBRE` varchar(30) NOT NULL,
  `USUARIO_APELLIDO` varchar(30) NOT NULL,
  `USUARIO_ROL` varchar(30) NOT NULL DEFAULT 'Notario',
  `USUARIO_CEDULA` char(11) NOT NULL,
  PRIMARY KEY (`USUARIO_ID`),
  KEY `FK_INTERVIENE` (`ELECCION_ID`),
  CONSTRAINT `FK_INTERVIENE` FOREIGN KEY (`ELECCION_ID`) REFERENCES `eleccion` (`ELECCION_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-20 17:29:56

-- MySQL dump 10.13  Distrib 9.3.0, for macos15.2 (arm64)
--
-- Host: localhost    Database: FOOD_APP
-- ------------------------------------------------------
-- Server version	9.3.0

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `menu_id` int NOT NULL,
  `quantity` int NOT NULL,
  `added_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  KEY `menu_id` (`menu_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1,1,2,'2026-06-26 06:30:28'),(2,1,1,2,'2026-06-26 06:30:31');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `menu_id` int NOT NULL AUTO_INCREMENT,
  `restaurant_id` int DEFAULT NULL,
  `item_name` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `calories` int DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `fat` varchar(20) DEFAULT NULL,
  `saturates` varchar(20) DEFAULT NULL,
  `sugars` varchar(20) DEFAULT NULL,
  `salt` varchar(20) DEFAULT NULL,
  `featured` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`menu_id`),
  KEY `restaurant_id` (`restaurant_id`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`restaurant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=334 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,1,'Classic Burger','The Classic Burger is a simple and delicious burger with a beef patty, cheese, lettuce, tomato, and onion.',16,472,'/images/home/burger.jpg','26g','10g','18g','1g',1),(2,1,'Double Burger','The Double Burger is a delicious burger with two beef patties.',18,326,'/images/home/restaurant-1.jpg','22g','9g','12g','1.2g',0),(3,1,'Green Burger','The Green Burger is a healthy burger option.',14,368,'/images/home/hero-salad.jpg','14g','5g','8g','0.9g',0),(4,1,'Taj Chili Burger','Taj style spicy burger.',18,334,'/images/home/promo-burger.jpg','20g','8g','10g','1.1g',0),(9,1,'Classic Burger','The Classic Burger is a simple and delicious burger with a beef patty, cheese, lettuce, tomato, and onion.',16,472,'/images/home/burger.jpg','26g','10g','18g','1g',1),(10,1,'Double Burger','The Double Burger is a delicious burger with two beef patties.',18,326,'/images/home/restaurant-1.jpg','22g','9g','12g','1.2g',0),(11,1,'Green Burger','The Green Burger is a healthy burger option.',14,368,'/images/home/hero-salad.jpg','14g','5g','8g','0.9g',0),(12,1,'Taj Chili Burger','Taj style spicy burger.',18,334,'/images/home/promo-burger.jpg','20g','8g','10g','1.1g',0),(13,2,'Margherita Pizza','Italian classic pizza.',15,420,'/images/home/pizza.jpg','18g','8g','6g','1.4g',1),(14,2,'Pepperoni Feast','Loaded with spicy pepperoni.',17,510,'/images/home/restaurant-2.jpg','24g','11g','5g','1.8g',0),(15,2,'Veggie Supreme','Fresh vegetables on pizza.',14,380,'/images/home/salad.jpg','12g','5g','8g','1.1g',0),(16,2,'BBQ Chicken','BBQ chicken pizza.',18,465,'/images/home/restaurant-1.jpg','20g','9g','12g','1.6g',0),(17,2,'Four Cheese','Four cheese pizza.',16,490,'/images/home/restaurant-2.jpg','28g','14g','4g','1.9g',0),(18,1,'Classic Burger','The Classic Burger is a simple and delicious burger with a beef patty, cheese, lettuce, tomato, and onion.',16,472,'/images/home/burger.jpg','26g','10g','18g','1g',1),(19,1,'Double Burger','The Double Burger is a delicious burger with two beef patties.',18,326,'/images/home/restaurant-1.jpg','22g','9g','12g','1.2g',0),(20,1,'Green Burger','The Green Burger is a healthy burger option.',14,368,'/images/home/hero-salad.jpg','14g','5g','8g','0.9g',0),(21,1,'Taj Chili Burger','Taj style spicy burger.',18,334,'/images/home/promo-burger.jpg','20g','8g','10g','1.1g',0),(22,2,'Margherita Pizza','Italian classic pizza.',15,420,'/images/home/pizza.jpg','18g','8g','6g','1.4g',1),(23,2,'Pepperoni Feast','Loaded with spicy pepperoni.',17,510,'/images/home/restaurant-2.jpg','24g','11g','5g','1.8g',0),(24,2,'Veggie Supreme','Fresh vegetables on pizza.',14,380,'/images/home/salad.jpg','12g','5g','8g','1.1g',0),(25,2,'BBQ Chicken','BBQ chicken pizza.',18,465,'/images/home/restaurant-1.jpg','20g','9g','12g','1.6g',0),(26,2,'Four Cheese','Four cheese pizza.',16,490,'/images/home/restaurant-2.jpg','28g','14g','4g','1.9g',0),(27,1,'Classic Burger','The Classic Burger is a simple and delicious burger with a beef patty, cheese, lettuce, tomato, and onion.',16,472,'/images/home/burger.jpg','26g','10g','18g','1g',1),(28,1,'Double Burger','The Double Burger is a delicious burger with two beef patties.',18,326,'/images/home/restaurant-1.jpg','22g','9g','12g','1.2g',0),(29,1,'Green Burger','The Green Burger is a healthy burger option.',14,368,'/images/home/hero-salad.jpg','14g','5g','8g','0.9g',0),(30,1,'Taj Chili Burger','Taj style spicy burger.',18,334,'/images/home/promo-burger.jpg','20g','8g','10g','1.1g',0),(31,2,'Margherita Pizza','Italian classic pizza.',15,420,'/images/home/pizza.jpg','18g','8g','6g','1.4g',1),(32,2,'Pepperoni Feast','Loaded with spicy pepperoni.',17,510,'/images/home/restaurant-2.jpg','24g','11g','5g','1.8g',0),(33,2,'Veggie Supreme','Fresh vegetables on pizza.',14,380,'/images/home/salad.jpg','12g','5g','8g','1.1g',0),(34,2,'BBQ Chicken','BBQ chicken pizza.',18,465,'/images/home/restaurant-1.jpg','20g','9g','12g','1.6g',0),(35,2,'Four Cheese','Four cheese pizza.',16,490,'/images/home/restaurant-2.jpg','28g','14g','4g','1.9g',0),(36,1,'Classic Burger','The Classic Burger is a simple and delicious burger with a beef patty, cheese, lettuce, tomato, and onion.',16,472,'/images/home/burger.jpg','26g','10g','18g','1g',1),(37,1,'Double Burger','The Double Burger is a delicious burger with two beef patties.',18,326,'/images/home/restaurant-1.jpg','22g','9g','12g','1.2g',0),(38,1,'Green Burger','The Green Burger is a healthy burger option.',14,368,'/images/home/hero-salad.jpg','14g','5g','8g','0.9g',0),(39,1,'Taj Chili Burger','Taj style spicy burger.',18,334,'/images/home/promo-burger.jpg','20g','8g','10g','1.1g',0),(40,2,'Margherita Pizza','Italian classic pizza.',15,420,'/images/home/pizza.jpg','18g','8g','6g','1.4g',1),(41,2,'Pepperoni Feast','Loaded with spicy pepperoni.',17,510,'/images/home/restaurant-2.jpg','24g','11g','5g','1.8g',0),(42,2,'Veggie Supreme','Fresh vegetables on pizza.',14,380,'/images/home/salad.jpg','12g','5g','8g','1.1g',0),(43,2,'BBQ Chicken','BBQ chicken pizza.',18,465,'/images/home/restaurant-1.jpg','20g','9g','12g','1.6g',0),(44,2,'Four Cheese','Four cheese pizza.',16,490,'/images/home/restaurant-2.jpg','28g','14g','4g','1.9g',0),(45,1,'Classic Burger','The Classic Burger is a simple and delicious burger with a beef patty, cheese, lettuce, tomato, and onion.',16,472,'/images/home/burger.jpg','26g','10g','18g','1g',1),(46,1,'Double Burger','The Double Burger is a delicious burger with two beef patties.',18,326,'/images/home/restaurant-1.jpg','22g','9g','12g','1.2g',0),(47,1,'Green Burger','The Green Burger is a healthy burger option.',14,368,'/images/home/hero-salad.jpg','14g','5g','8g','0.9g',0),(48,1,'Taj Chili Burger','Taj style spicy burger.',18,334,'/images/home/promo-burger.jpg','20g','8g','10g','1.1g',0),(49,2,'Margherita Pizza','Italian classic pizza.',15,420,'/images/home/pizza.jpg','18g','8g','6g','1.4g',1),(50,2,'Pepperoni Feast','Loaded with spicy pepperoni.',17,510,'/images/home/restaurant-2.jpg','24g','11g','5g','1.8g',0),(51,2,'Veggie Supreme','Fresh vegetables on pizza.',14,380,'/images/home/salad.jpg','12g','5g','8g','1.1g',0),(52,2,'BBQ Chicken','BBQ chicken pizza.',18,465,'/images/home/restaurant-1.jpg','20g','9g','12g','1.6g',0),(53,2,'Four Cheese','Four cheese pizza.',16,490,'/images/home/restaurant-2.jpg','28g','14g','4g','1.9g',0),(294,3,'California Roll','Fresh California sushi roll',220,280,'/images/home/pizza.jpg','8g','2g','4g','1g',1),(295,3,'Salmon Nigiri','Fresh salmon sushi',260,240,'/images/home/pizza.jpg','10g','2g','2g','1g',0),(296,3,'Dragon Roll','Crispy dragon roll',320,390,'/images/home/restaurant-1.jpg','14g','4g','6g','2g',0),(297,3,'Tempura Shrimp','Japanese tempura shrimp',280,350,'/images/home/restaurant-2.jpg','16g','3g','2g','2g',0),(298,4,'Veg Bowl','Healthy vegetable bowl',180,250,'/images/home/burger.jpg','6g','1g','5g','1g',1),(299,4,'Paneer Bowl','Paneer rice bowl',240,360,'/images/home/burger.jpg','14g','5g','4g','2g',0),(300,4,'Quinoa Salad','Healthy quinoa salad',210,280,'/images/home/dessert.jpg','5g','1g','4g','1g',0),(301,4,'Avocado Bowl','Fresh avocado bowl',260,340,'/images/home/restaurant-1.jpg','12g','2g','5g','1g',0),(302,5,'Chicken Taco','Mexican chicken taco',190,290,'/images/home/pizza.jpg','9g','2g','3g','2g',1),(303,5,'Beef Taco','Beef taco',220,330,'/images/home/burger.jpg','12g','4g','2g','2g',0),(304,5,'Veg Taco','Vegetable taco',170,250,'/images/home/dessert.jpg','5g','1g','4g','1g',0),(305,5,'Cheese Nachos','Loaded nachos',240,390,'/images/home/restaurant-2.jpg','16g','5g','4g','2g',0),(306,6,'White Sauce Pasta','Creamy pasta',280,420,'/images/home/pizza.jpg','18g','7g','5g','2g',1),(307,6,'Red Sauce Pasta','Italian tomato pasta',240,360,'/images/home/burger.jpg','8g','2g','6g','2g',0),(308,6,'Alfredo Pasta','Creamy Alfredo',320,460,'/images/home/restaurant-1.jpg','20g','8g','5g','2g',0),(309,6,'Cheese Pasta','Cheesy pasta',300,480,'/images/home/restaurant-2.jpg','22g','9g','4g','2g',0),(310,7,'Grilled Chicken','Tender grilled chicken',340,430,'/images/home/burger.jpg','18g','4g','2g','2g',1),(311,7,'BBQ Wings','BBQ wings',280,390,'/images/home/restaurant-1.jpg','16g','4g','6g','2g',0),(312,7,'Chicken Steak','Juicy steak',360,470,'/images/home/restaurant-2.jpg','20g','5g','2g','2g',0),(313,7,'Mixed Grill','Mixed grilled platter',420,560,'/images/home/pizza.jpg','24g','7g','3g','3g',0),(314,8,'Chocolate Cake','Chocolate cake',180,390,'/images/home/dessert.jpg','14g','7g','28g','1g',1),(315,8,'Brownie','Chocolate brownie',160,340,'/images/home/dessert.jpg','13g','5g','25g','1g',0),(316,8,'Vanilla Ice Cream','Vanilla ice cream',140,260,'/images/home/dessert.jpg','8g','5g','22g','1g',0),(317,8,'Cheesecake','Creamy cheesecake',220,410,'/images/home/dessert.jpg','18g','8g','24g','1g',0),(318,9,'Grilled Fish','Fresh grilled fish',360,420,'/images/home/restaurant-1.jpg','15g','3g','1g','2g',1),(319,9,'Prawn Fry','Crispy prawns',320,390,'/images/home/restaurant-2.jpg','16g','4g','2g','2g',0),(320,9,'Fish Curry','Traditional fish curry',280,350,'/images/home/burger.jpg','11g','2g','3g','2g',0),(321,9,'Seafood Rice','Seafood rice',340,460,'/images/home/pizza.jpg','14g','3g','4g','2g',0),(322,10,'Orange Juice','Fresh orange juice',90,110,'/images/home/dessert.jpg','0g','0g','18g','0g',1),(323,10,'Mango Shake','Fresh mango shake',160,220,'/images/home/dessert.jpg','4g','2g','24g','0g',0),(324,10,'Watermelon Juice','Fresh watermelon juice',80,95,'/images/home/dessert.jpg','0g','0g','15g','0g',0),(325,10,'Mixed Fruit Juice','Mixed fruit juice',120,140,'/images/home/dessert.jpg','1g','0g','20g','0g',0),(326,11,'Fruit Salad','Fresh fruit salad',150,180,'/images/home/dessert.jpg','2g','0g','14g','0g',1),(327,11,'Greek Salad','Healthy Greek salad',210,260,'/images/home/burger.jpg','8g','2g','5g','1g',0),(328,11,'Caesar Salad','Classic Caesar salad',240,320,'/images/home/pizza.jpg','12g','3g','3g','2g',0),(329,11,'Sprout Bowl','Healthy sprouts',170,210,'/images/home/restaurant-1.jpg','4g','1g','4g','1g',0),(330,12,'Classic Breakfast','Eggs toast and sausage',260,420,'/images/home/restaurant-2.jpg','18g','5g','4g','2g',1),(331,12,'Chicken Sandwich','Grilled chicken sandwich',220,330,'/images/home/burger.jpg','12g','3g','5g','2g',0),(332,12,'French Fries','Golden fries',150,290,'/images/home/pizza.jpg','14g','2g','1g','2g',0),(333,12,'Club Sandwich','Triple layer sandwich',280,430,'/images/home/restaurant-1.jpg','16g','5g','6g','2g',0);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `order_item_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `menu_id` int NOT NULL,
  `item_name` varchar(100) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `fk_orderitems_order` (`order_id`),
  KEY `fk_orderitems_menu` (`menu_id`),
  CONSTRAINT `fk_orderitems_menu` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`),
  CONSTRAINT `fk_orderitems_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `customer_name` varchar(100) DEFAULT NULL,
  `address` text,
  `subtotal` decimal(10,2) DEFAULT NULL,
  `delivery_fee` decimal(10,2) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(30) DEFAULT 'Placed',
  PRIMARY KEY (`order_id`),
  KEY `fk_orders_users` (`user_id`),
  CONSTRAINT `fk_orders_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `restaurant_id` int NOT NULL AUTO_INCREMENT,
  `slug` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `rating` double DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `delivery_time` varchar(50) DEFAULT NULL,
  `delivery_fee` varchar(50) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`restaurant_id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'burger-house','Burger House',4.6,'Burgers, Fast Food','30-40 min','$5.0 Delivery','/images/home/restaurant-1.jpg'),(2,'pizza-palace','Pizza Palace',4.8,'Pizza, Italian','25-35 min','$4.0 Delivery','/images/home/restaurant-2.jpg'),(3,'sushi-world','Sushi World',4.7,'Sushi, Japanese','35-45 min','$6.0 Delivery','/images/home/restaurant-3.jpg'),(4,'green-bowl','Green Bowl',4.5,'Salads, Healthy','20-30 min','$3.5 Delivery','/images/home/salad.jpg'),(5,'taco-fiesta','Taco Fiesta',4.4,'Mexican, Tacos','25-35 min','$4.5 Delivery','/images/home/taco.jpg'),(6,'pasta-corner','Pasta Corner',4.6,'Pasta, Italian','30-40 min','$5.0 Delivery','/images/home/pizza.jpg'),(7,'grill-master','Grill Master',4.3,'BBQ, Grills','35-50 min','$6.5 Delivery','/images/home/burger.jpg'),(8,'sweet-treats','Sweet Treats',4.9,'Desserts, Bakery','15-25 min','$3.0 Delivery','/images/home/dessert.jpg'),(9,'ocean-bite','Ocean Bite',4.5,'Seafood, Grilled','30-45 min','$7.0 Delivery','/images/home/sushi.jpg'),(10,'juice-bar','Juice Bar',4.2,'Drinks, Smoothies','10-20 min','$2.5 Delivery','/images/home/drinks.jpg'),(11,'fresh-harvest','Fresh Harvest',4.7,'Salads, Organic','20-30 min','$4.0 Delivery','/images/home/hero-salad.jpg'),(12,'classic-diner','Classic Diner',4.4,'American, Diner','25-35 min','$5.5 Delivery','/images/home/promo-burger.jpg');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_orders`
--

DROP TABLE IF EXISTS `test_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_orders`
--

LOCK TABLES `test_orders` WRITE;
/*!40000 ALTER TABLE `test_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Harini','harini@gmail.com','123456','2026-06-24 19:50:29'),(2,'shree','shrearini55@gmail.com','25252','2026-06-24 20:43:54'),(3,'testuser','testuser@123','1234567','2026-06-24 21:00:25'),(4,'testuser','testuser123@gmail.com','1234567','2026-06-24 21:01:37'),(9,'sahana','sahana2005@gmail.com','sahanaa','2026-06-24 21:12:19'),(12,'mirtha','mirtha123@gmail.com','7457625','2026-06-25 10:27:18'),(13,'harsh','harsath123@gamil.com','hjdfbdskjfb','2026-06-25 10:35:02'),(14,'harsath','harsath123@gmail.com','12345','2026-06-25 10:49:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-01 12:57:22

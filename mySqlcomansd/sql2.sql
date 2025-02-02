CREATE TABLE IF NOT EXISTS `personal_experience` (
  `id` int NOT NULL AUTO_INCREMENT,
  `person_id` int DEFAULT NULL,
  `experience_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `person_id` (`person_id`),
  KEY `experience_id` (`experience_id`),
  CONSTRAINT `personal_experience_ibfk_1` FOREIGN KEY (`person_id`) REFERENCES `personalinfo` (`id`),
  CONSTRAINT `personal_experience_ibfk_2` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`)
)
#CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(255) NULL DEFAULT NULL,
  `creationDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` INTEGER NULL DEFAULT NULL,
  `roomId` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);



DROP TABLE IF EXISTS `user`;
    
CREATE TABLE `user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);



DROP TABLE IF EXISTS `room`;
    
CREATE TABLE `room` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);



ALTER TABLE `messages` ADD FOREIGN KEY (userId) REFERENCES `user` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (roomId) REFERENCES `room` (`id`);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



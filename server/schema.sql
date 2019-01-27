DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  -- userId
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  -- roomId
  ID int NOT NULL AUTO_INCREMENT,
  roomname varchar(30) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT,
  usersID int NOT NULL,
  message varchar(255) NOT NULL,
  roomsID int NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



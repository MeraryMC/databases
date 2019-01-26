DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  -- userId
  ID int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  -- roomId
  ID int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  ID int NOT NULL,
  PRIMARY KEY (ID),
  message varchar(255),
  roomsID int,
  usersID int,
  FOREIGN KEY (roomsID) REFERENCES rooms(ID),
  FOREIGN KEY (usersID) REFERENCES users(ID)
  /* Describe your table here.*/
  -- primary foreign key userID
  -- primary key for msg is textId
  -- second foreign key would be a roomId
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



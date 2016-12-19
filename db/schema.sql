CREATE DATABASE national_db;
USE creativewriter_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(20) NOT NULL,
	password varchar (20) NOT NULL,
	type varchar (10) NOT NULL,
	PRIMARY KEY (id)
);

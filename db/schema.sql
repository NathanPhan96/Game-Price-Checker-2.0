DROP DATABASE IF EXISTS games_db;
CREATE DATABASE games_db;

USE games_db;

CREATE TABLE user (
        userID INT NOT NULL UNIQUE IDENTITY(100,1),
        email VARCHAR(50) NOT NULL UNIQUE,
        userName VARCHAR(50)NOT NULL UNIQUE CONSTRAINT check_lowercase_name check (lower(game_name) = game_name),
        PRIMARY KEY (userID)
        
);

CREATE TABLE games(
		gameId INT NOT NULL UNIQUE default newid() PRIMARY KEY,
		game_name VARCHAR(70) NOT NULL UNIQUE ALTERNATE KEY CONSTRAINT check_lowercase_name check (lower(game_name) = game_name),
);

CREATE TABLE gameInfo(
		gameID INT NOT NULL UNIQUE FOREIGN KEY,
		gameName FOREIGN KEY,
		gamePlateform FOREIGN KEY,
		gamePrice NOT NULL ,
		url,
		);
		
CREATE TABLE Platforms(
		id INT NOT NULL UNIQUE AUTO_INCREMNET,
		console VARCHAR(50) NOT NULL UNIQUE
)
		
Create TABLE price_graph (
		gameName,
		gamePrice,
		
		)
DROP DATABASE IF EXISTS games_db;
CREATE DATABASE games_db;

USE games_db;

CREATE TABLE IF NOT EXISTS user(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		username VARCHAR(50) NOT NULL UNIQUE,
		password VARCHAR(255) NOT NULL,
		email VARCHAR(100) NOT NULL UNIQUE,
) DEFAULT CHARSET=utf8;

CREATE TABLE platforms(
		id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(50) NOT NULL UNIQUE
) DEFAULT CHARSET=utf8;

CREATE TABLE game(
		id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(75) NOT NULL UNIQUE,
		platform INT NOT NULL,
		price DECIMAL(5,2),
		url VARCHAR(512),
		user_id INT NOT NULL,
		post_date DATE NOT NULL,	
		FOREIGN KEY (user_id)
		
			REFERENCES user(id),		
		FOREIGN KEY (platform)
			REFERENCES platforms(id)
		) DEFAULT CHARSET=utf8;
		
CREATE TABLE social(
		id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
		user_id INT NOT NULL,
		game_id INT NOT NULL,
		comment VARCHAR(255) NOT NULL,
		post_date DATE NOT NULL,
		
		FOREIGN KEY (user_id)
			REFERENCES user(id),
		FOREIGN KEY (game_id)
			REFERENCES game(id)
		) DEFAULT CHARSET=utf8;
		
CREATE TABLE history_price(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		game_id INT NOT NULL,
		game_price DECIMAL(5,2),
		post_date DATE NOT NULL,
		
		FOREIGN KEY (game_id)
			REFERENCES game(id)
		) DEFAULT CHARSET=utf8;
		
DROP TRIGGER IF EXISTS history_trigger
delimiter //
CREATE TRIGGER history_trigger
BEFORE UPDATE ON game
    FOR EACH ROW
    BEGIN
        IF OLD.price != NEW.price
        THEN
                INSERT INTO history_price
                    (
                        game_id,
                        game_price,
                        post_date
                        
                    )
                    VALUES
                    (
                        OLD.id,
                        OLD.price,
                        OLD.post_date
                    );
        END IF;
    END;
delimiter ;
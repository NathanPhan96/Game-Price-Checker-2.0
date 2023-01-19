DROP DATABASE IF EXISTS games_db;
CREATE DATABASE games_db;

USE games_db;

CREATE TABLE IF NOT EXISTS accounts(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		username VARCHAR(50) NOT NULL UNIQUE,
		password VARCHAR(255) NOT NULL,
		email VARCHAR(100) NOT NULL UNIQUE
) DEFAULT CHARSET=utf8;

CREATE TABLE platforms(
		id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
		console VARCHAR(50) NOT NULL UNIQUE
) DEFAULT CHARSET=utf8;

CREATE TABLE game(
		id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(75) NOT NULL UNIQUE,
		platform INT NOT NULL,
		price DECIMAL(5,2),
		url VARCHAR(512),
		account_id INT NOT NULL,
		
		FOREIGN KEY (account_id)
			REFERENCES accounts(id),
			
		FOREIGN KEY (platform)
			REFERENCES platforms(id)
		) DEFAULT CHARSET=utf8;
		
Create TABLE history_price(
		game_id INT NOT NULL,
		game_price DECIMAL(5,2),
		
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
                        game_price
                    )
                    VALUES
                    (
                        NEW.id,
                        NEW.price
                    );
        END IF;
    END;
delimiter ;
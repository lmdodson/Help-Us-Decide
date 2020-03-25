USE whaddya;

CREATE TABLE genres
(
	name varchar(255) NOT NULL,
	user1 BOOLEAN DEFAULT false,
    user2 BOOLEAN DEFAULT false,
	PRIMARY KEY (name)
);

INSERT INTO genres (name) VALUES ('Documentary');
INSERT INTO genres (name) VALUES ('Thriller');
INSERT INTO genres (name) VALUES ('Comedy');
INSERT INTO genres (name) VALUES ('Drama');
INSERT INTO genres (name) VALUES ('Horror');
INSERT INTO genres (name) VALUES ('Action');
INSERT INTO genres (name) VALUES ('Romance');
INSERT INTO genres (name) VALUES ('Mystery');
INSERT INTO genres (name) VALUES ('Science');
INSERT INTO genres (name) VALUES ('Crime');
INSERT INTO genres (name) VALUES ('Family');
INSERT INTO genres (name) VALUES ('Western');
INSERT INTO genres (name) VALUES ('Adventure');
INSERT INTO genres (name) VALUES ('Fantasy');
INSERT INTO genres (name) VALUES ('Animation');
INSERT INTO genres (name) VALUES ('History');
INSERT INTO genres (name) VALUES ('Music');
INSERT INTO genres (name) VALUES ('War');
DROP DATABASE IF EXISTS shows;

CREATE DATABASE shows;

\c shows;

-- ---
-- Table 'Shows'
--
-- ---

DROP TABLE IF EXISTS shows CASCADE;

CREATE TABLE shows (
  id INTEGER NULL DEFAULT NULL,
  name VARCHAR NULL DEFAULT NULL,
  genre VARCHAR NULL DEFAULT NULL,
  subgenre VARCHAR NULL DEFAULT NULL,
  seasons INTEGER NULL DEFAULT NULL,
  episodes INTEGER NULL DEFAULT NULL,
  platform VARCHAR NULL DEFAULT NULL,
  favorite BOOLEAN,
  link VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS credentials CASCADE;

CREATE TABLE credentials (
  id INTEGER NULL DEFAULT NULL,
  name VARCHAR NULL DEFAULT NULL,
  status VARCHAR NULL DEFAULT NULL,
  platform VARCHAR NULL DEFAULT NULL,
  image VARCHAR NULL DEFAULT NULL,
  link VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (id)
);


\COPY credentials FROM /Users/isaacmfavila/Downloads/credentials.csv DELIMITER ',' CSV HEADER;

\COPY shows FROM /Users/isaacmfavila/Downloads/shows.csv DELIMITER ',' CSV HEADER;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Shows` (`id`,`name`,`genre`,`subgenre`,`seasons`,`episodes`,`platform`,`image`,`link`) VALUES
-- ('','','','','','','','','');

DROP TABLE IF EXISTS trains;

CREATE TABLE trains(
  id SERIAL PRIMARY KEY,
  station VARCHAR(255)  NULL,
);


INSERT INTO stations (station) VALUES

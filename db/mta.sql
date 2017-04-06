DROP TABLE IF EXISTS trains;

CREATE TABLE trains(
  id SERIAL PRIMARY KEY,
  unit VARCHAR(255)  NULL,
  ca VARCHAR(255)  NULL,
  scp VARCHAR(255)  NULL,
  station VARCHAR(255)  NULL,
  linename VARCHAR(255)  NULL,
  division VARCHAR(255)  NULL,
  dates VARCHAR(255)  NULL,
  event_time VARCHAR(255)  NULL,
  description VARCHAR(255)  NULL,
  entries VARCHAR(255)  NULL,
  exits VARCHAR(255)  NULL
);


INSERT INTO trains (ca, unit, scp, station, linename, division, dates, event_time,description,entries,exits) VALUES
('r221', 'r170', '01-05-01', '14 ST-UNION SQ', '456LNQRW', 'IRT', '3/24/2017', '01:00:00', 'REGULAR', '3', '2974');

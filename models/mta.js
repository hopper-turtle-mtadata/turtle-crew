const db = require('../db');

const mtas = {};

mtas.findAll = () => {
  return db.any('SELECT * FROM trains');
};

mtas.showOne = (id) => {
  return db.one('SELECT * FROM trains WHERE id =$1', [id])
}

mtas.create = (ca, unit, scp, station, linename, division, dates, event_time,description,entries,exits) => {
    return db.one('INSERT INTO trains(ca, unit, scp, station, linename, division, dates, event_time,description,entries,exits) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning id', [ca, unit, scp, station, linename, division, dates, event_time,description,entries,exits]);
};
mtas.update = (id, ca, unit, scp, station, linename, division, dates, event_time,description,entries,exits) => {
    return db.one('UPDATE trains SET ca = $1, unit =$2, scp = $3, station = $4, linename = $5, division = $6, dates = $7, event_time = $8, description = $9, entries = $10, exits = $11,  WHERE id = $12 returning id', [ca, unit, scp, station, linename, division, dates, event_time,description,entries,exits, id]);
};

mtas.destroy = (id) => {
    return db.none('DELETE FROM trains WHERE id = $1', [id])
}

module.exports = mtas;

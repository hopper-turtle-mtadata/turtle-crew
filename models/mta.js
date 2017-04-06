const db = require('../db');

const mtas = {};

mtas.findAll = () => {
  return db.any('SELECT * FROM trains');
};

mtas.showOne = (id) => {
  return db.one('SELECT * FROM trains WHERE id =$1', [id])
}

// mtas.create = (station) => {
//     return db.one('INSERT INTO trains(station) VALUES ($1) returning id', [station]);
// };
// mtas.update = (id, station) => {
//     return db.one('UPDATE trains SET ca = $1, WHERE id = $2 returning id', [station, id]);
// };

mtas.destroy = (id) => {
    return db.none('DELETE FROM trains WHERE id = $1', [id])
}

module.exports = mtas;

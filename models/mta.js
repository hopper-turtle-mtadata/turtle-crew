const db = require('../db');

const mtas = {};

mtas.findAll = () => {
  return db.any('SELECT * FROM trains');
};

mtas.showOne = (id) => {
  return db.one('SELECT * FROM trains WHERE id =$1', [id])
}

mtas.dropdown = (station) => {
    return db.one("SELECT * FROM trains WHERE station LIKE \'%$1#\' LIMIT 1", [station]);
};

mtas.destroy = (id) => {
    return db.none('DELETE FROM trains WHERE id = $1', [id])
}

module.exports = mtas;

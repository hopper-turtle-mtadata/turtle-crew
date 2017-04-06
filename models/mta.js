const db = require('../db');

const mtas = {};

mtas.findAll = () => {
  return db.any('SELECT * FROM trains');
};

// movies.showOne = (id) => {
//   return db.one('SELECT * FROM movie WHERE id =$1', [id])
// }

// movies.create = (title, poster, rating, runtime) => {
//     return db.one('INSERT INTO movie(title, poster, rating, runtime) VALUES ($1, $2, $3, $4) returning id', [title, poster, rating, runtime]);
// };
// movies.update = (id, title, poster, runtime, rated) => {
//     return db.one('UPDATE movie SET title = $1, poster =$2, runtime = $3, rating = $4 WHERE id = $5 returning id', [title, poster, runtime, rated, id]);
// };
// movies.destroy = (id) => {
//     return db.none('DELETE FROM movie WHERE id = $1', [id])
// }

module.exports = mtas;

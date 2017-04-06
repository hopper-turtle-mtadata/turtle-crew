const pgp = require('pg-promise')();

const db = pgp(
  process.env.DATABASE_URL
  ||
  'postgres://student_32@localhost:5432/mtadata');

  module.exports = db;

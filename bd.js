const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'freddyAdmin27',
    password: '8~(qwa.W!lng',
    database: 'testHutrit'
  });

  module.exports = connection;
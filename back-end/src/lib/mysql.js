const mysql = require('mysql')
const config = require('../config/default')

const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
})

let query = (sql, values, callback) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (error, results, fields) => {
          if (error) {
            reject(error)
          } else {
            resolve(results)
          }
          // connection.end()
          connection.release();
         (callback && callback(error, results, fields))
        })
      }
    })
  })
}

let createTable = (sql) => {
  return query(sql, [])
}

module.exports = {
  query,
  createTable
}

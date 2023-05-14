const dbConfig = require('../models/app/config/db.config')
const sequelize = require('sequelize');
const mysql = require('mysql2');

require('dotenv').config()

const database = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
  {
    'host': dbConfig.dialect,
    'dialect': dbConfig.port,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
)

database.sync()
  .then((data) => {
    console.log('successfully synced the database.')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = database
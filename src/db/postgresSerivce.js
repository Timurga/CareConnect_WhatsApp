require('dotenv').config()

const { Client } = require('pg')

const dbClient = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
})

module.exports = dbClient 
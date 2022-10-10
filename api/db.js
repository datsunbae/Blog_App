const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USERNAME_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: 'blog'
})

module.exports = connection;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'blog'
})

console.log(process.env.USERNAME_MYSQL)

module.exports = connection;
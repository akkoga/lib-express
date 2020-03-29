import mysql from 'mysql';

export const database = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'libexpress'
});
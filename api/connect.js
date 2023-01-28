import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '898587',
  database: 'social_media',
});

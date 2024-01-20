const mysql = require('mysql2');//database connection logic will go here

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'metrics',
});
 

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports=db;
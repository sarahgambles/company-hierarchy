const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  
  user: "root",
  
  password: "YasssQ()een69",
  database: "employee_tracker"
});

connection.connect(function(err) {
    if(err) throw err
});

module.exports = connection;
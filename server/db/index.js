var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


exports.connect = function() {
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'billbillbill',
    database : 'chat'
  });
   
  connection.connect();

  return connection;
};

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
 
//   console.log('The solution is: ', rows[0].solution);
// });
 
// connection.end();



// var connection = db.connect();
// db.query(blah);
// db.end();
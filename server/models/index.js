var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {

      console.log('model get');

      var connection = db.connect();

      connection.query('select * from messages', function (err, rows, fields) {
        // console.log('rows =>', rows);
        // console.log('fields =>', fields);
        if (err) {
          console.log(err);
        }
        res.end(rows);
      });
      connection.end();

    }, // a function which produces all the messages
    post: function (data, res) {
      // console.log('model post', data.message);
      var connection = db.connect();
      data.message = data.message || '';
      connection.query('insert into messages (text) values (?)', data.message, function(err, rows, fields) {
        if (err) {
          console.log(err);
        }
        // console.log('rows:', rows);
        // console.log('fields:', fields);
        res.end();
      });
      connection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, res) {
      
      // console.log('model user post!');


      var connection = db.connect();
      connection.query('insert into user (username) values (?)', data.username, function(err, rows, fields) {
        if (err) {
          console.log(err);
        }
        res.end();
      });
      connection.end();


    }
  }
};


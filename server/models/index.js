var db = require('../db');

module.exports = {
  messages: {
    get: function () {

      console.log('model get');

    }, // a function which produces all the messages
    post: function () {
      console.log('model post');

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {
      
      console.log('model user post!');


      var connection = db.connect();
      connection.query('insert into user (username) values(?)', data.username, function(err, rows, fields) {
        if (err) {
          console.log(err);
        }

      });
      connection.end();


    }
  }
};


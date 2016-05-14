var db = require('../db');


/*

var findUser = function (user, cb) {
  
}


findUser(user, function(id) {
  
  if (id === null) {
    
    createUser(user, function(userId) {
  




    };
  };






});
*/



module.exports = {
  messages: {
    get: function (req, res) {

      console.log('model get');

      var connection = db.connect();

      connection.query('select m.id, m.text, m.creationDate, m.userId, r.roomname from messages m left outer join room r on r.id = m.roomId', 
        function (err, rows, fields) {
          //console.log('rows =>', rows);
          // console.log('fields =>', fields);
          if (err) {
            console.log(err);
          }
          res.end(JSON.stringify(rows));
        });
      connection.end();

    }, // a function which produces all the messages
    post: function (data, res) {
      // console.log('model post', data.message);
      var connection = db.connect();
      data.message = data.message || '';
      
      console.log('roomname =>', typeof data.roomname, data.roomname);

      connection.query('select * from room where roomname = ?', [data.roomname], function (err, rows, fields) {
        if (err) {
          console.log('Error from selecting roomname from room table', err);
        }
        // var roomId = '';
        console.log('Rows tpye from selecting from room table: ', typeof rows, rows);
        if (rows.length === 0) { // empty set returned from query
          
          connection.query('insert into room (roomname) values (?)', data.roomname, function (err, rows, fields) {
            if (err) {
              console.log(err);
            }

            var roomId = rows.insertId;

            connection.query('insert into messages (text, roomId) values (?, ?)',
            [data.message, roomId], 
            function (err, rows, field) {
              if (err) {
                console.log(err);
              }
              res.end();
            });


          });


          // connection.end();
        } else { // found the roomname
          // console.log('ROWS =>', rows);
          connection.query('insert into messages (text, roomId) values (?, ?)',
            [data.message, rows[0].id], 
            function (err, rows, field) {
              if (err) {
                console.log(err);
              }
              res.end();
            });


          // connection.end();
        }



      });

      // connection.query('insert into messages (text) values (?)', data.message, function(err, rows, fields) {
      //   if (err) {
      //     console.log(err);
      //   }
      //   // console.log('rows:', rows);
      //   // console.log('fields:', fields);
      //   res.end();
      // });
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
  },
  rooms: {
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


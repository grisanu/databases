var db = require('../db');


var findOrCreateUserId = function(userName, connection, cb) {
  connection.query('select id from user where username = ?', [userName], function(err, rows, fields) {
    if (err) {
      console.log(err);
    }

    if (rows.length === 0) {
      //create a new one.
      connection.query('insert into user (username) values (?)', [userName], function(err, rows, fields) {
        if (err) {
          console.log(err);
        }
        cb(rows.insertId);
      });

    } else {
      cb(rows[0].id);
    }

  });
};

var findOrCreateRoomId = function(roomName, connection, cb) {
  connection.query('select id from room where roomname = ?', [roomName], function(err, rows, fields) {
    if (err) {
      console.log(err);
    }

    if (rows.length === 0) {
      //create a new one.
      connection.query('insert into room (roomname) values (?)', [roomName], function(err, rows, fields) {
        if (err) {
          console.log(err);
        }
        cb(rows.insertId);
      });

    } else {
      cb(rows[0].id);
    }
    
  });
};

var createMessage = function(text, userId, roomId, connection, cb) {
  connection.query('insert into messages (text, roomId, userId) values (?, ?, ?)', [text, roomId, userId], 
    function (err, rows, field) {
      if (err) {
        console.log(err);
      }
      cb();
    });
};


module.exports = {
  messages: {
    get: function (req, res) {

      //console.log('model get');

      var connection = db.connect();

      connection.query('select m.id as objectId, m.text, m.creationDate, u.userName as username, r.roomname from messages m left outer join room r on r.id = m.roomId left outer join user u on u.id = m.userId', 
        function (err, rows, fields) {
          //console.log('rows =>', rows);
          if (err) {
            console.log(err);
          }
          res.header("Content-Type", "application/json");
          res.end(JSON.stringify({results: rows}));
        });
      connection.end();

    }, // a function which produces all the messages
    post: function (data, res) {
      // console.log('model post', data.message);
      var connection = db.connect();
      data.message = data.message || data.text || '';
      //console.log('data.text:', data.text);
      //console.log('received message: ', data.message);
      data.roomname = data.roomname || '';
      data.username = data.username || '';

      findOrCreateUserId(data.username, connection, function(userId) {
        findOrCreateRoomId(data.roomname, connection, function(roomId) {
          createMessage(data.message, userId, roomId, connection, function() {
            res.end();
          });
        });
      }); 
    }
  },
  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, res) {
      
      var connection = db.connect();

      findOrCreateUserId(data.username, connection, function(userId) {
        connection.end();
        res.end();
      });
    }
  },
  rooms: {
    get: function () {},
    post: function (data, res) {
      
      var connection = db.connect();

      findOrCreateRoomId(data.roomname, connection, function(userId) {
        connection.end();
        res.end();
      });

    }
  }
};


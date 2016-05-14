var models = require('../models');
var mysql = require('mysql');




module.exports = {
  messages: { // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('controller get');
      // console.log(req.body);
      models.messages.get(null, res);
    //select * from messages inner join room on messages.roomId = room.id inner join user on messages.userId = user.id;

    //select messages.text, messages.creationDate, room.roomname, user.userName from messages inner join room on messages.roomId = room.id inner join user on messages.userId = user.id;



    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('controller post');

      models.messages.post(req.body, res);
      //

    /*

    newpost = {text:'text', roomname:'room', username:'bill'};

    var userId = select id from user where username = newpost.username

    if (not exists userid) {
      var userId = insert into user (username) values (newpost.username);
    }

    var roomId = select id from room where roomname = newpost.roomname

    if (not exists roomid) {
      var roomId = insert into room (roomname) values (newpost.roomname);
    }

    var newid = insert into mesages (text, userId, roomId) values (newpost.text, userId, roomId);

    */


// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
 
//   console.log('The solution is: ', rows[0].solution);
// });
 
// connection.end();


    }

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // console.log('controller user post', req.body, typeof req.body);
      models.users.post(req.body, res);
    }
  }
};


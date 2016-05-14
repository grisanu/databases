var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

    //select * from messages inner join room on messages.roomId = room.id inner join user on messages.userId = user.id;

    //select messages.text, messages.creationDate, room.roomname, user.userName from messages inner join room on messages.roomId = room.id inner join user on messages.userId = user.id;



    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database

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



  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


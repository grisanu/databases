var models = require('../models');
var mysql = require('mysql');




module.exports = {
  messages: { // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(null, res);
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req.body, res);
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


var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.all('*', function(req, res, next) {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('access-control-allow-headers', 'content-type, accept');
  res.header('access-control-max-age', '10');
  next();
});

router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


router.use('/', function(req, res) {
  if (req.method === 'OPTIONS') {
    //console.log('options');

    var headers = {};
    headers['Content-Type'] = "application/json";
    res.writeHead(200, headers);
    res.end('');

  }
});



module.exports = router;


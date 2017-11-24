var express = require('express'),
  router = express();


module.exports = function (app) {
  app.use('/', router);
};

router.get('/test', function (req, res) {
  console.log("Hello World");
  res.end();
});

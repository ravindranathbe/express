var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource');
  res.sendFile(__dirname + '/../index.html');
});

router.get('/hello', function(req, res, next) {
  res.send('respond with a resource - home/hello');
});

module.exports = router;

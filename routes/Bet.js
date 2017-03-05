var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('Bet',
    { title: 'BET',
    text: 'Second letter',
    image:'images/Bet.png'
  });



});


module.exports = router;

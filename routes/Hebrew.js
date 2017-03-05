var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('Hebrew',
    { title: 'ALEPH',
    text: 'first letter',
    image:'images/Aleph.png'
  });



});


module.exports = router;

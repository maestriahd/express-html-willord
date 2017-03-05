var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('Gimmel',
    { title: 'GIMMEL',
    text: 'Third letter',
    image:'images/Gimmel.png'
  });



});


module.exports = router;

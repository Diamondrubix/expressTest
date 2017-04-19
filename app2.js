var express = require('express')
var app = express()
var url = require('url');
//var router = express.Router();

app.get('/', function (req, res) {
  res.send('Hello faiofejf World!')
})

app.get('/another', function (req, res) {
    res.send('Hello this is another page')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


/*
router.get('/', function(req, res){
    res.render('index', {
        title: 'Home'
    });
});

router.get('/about', function(req, res){
    res.render('about', {
        title: 'About'
    });
});

router.get('/contact', function(req, res){
    res.render('contact', {
        title: 'Contact'
    });
});

module.exports = router;
*/
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var log = require('./logs_database');


MongoClient.connect(log.DB_URI, function(err, db){
  if(!err){
    console.log("connect to BD");
  }
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;


var router = express.Router();

app.use('/api', router); // préfixe toutes les routes avec /api devant 'http://localhost:8080/api'

router.get('/', function(req, res) {
    res.json({ message : 'hooray! welcome to my api!' });
});


app.listen(port);
console.log('Magic happens on port ' + port);

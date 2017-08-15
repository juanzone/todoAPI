var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var Task = require('./models/task');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;


var router = express.Router();

app.use('/api', router); // préfixe toutes les routes avec /api devant 'http://localhost:8080/api'

router.get('/', function(req, res) {
    res.json({ message : 'hooray! welcome to my api!' });
    var test = new Task();
    test.addTask();
});


app.listen(port);
console.log('Magic happens on port ' + port);

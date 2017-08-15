var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var Task = require('./models/task');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;


var router = express.Router();

app.use('/api', router); // préfixe toutes les routes avec /api devant 'http://localhost:8080/api'

router.get('/task', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    var test = new Task();
    test.getAllTask(function(tasks){
      res.json({liste : tasks});
    });
});

router.post('/task', function(req, res) {
    var task = req.body.task
    var author = req.body.author
    var completed = false
    var newTask = new Task();
    newTask.addTask(task, author, completed , function(){
      res.json({message : 'Hooraaaaaah'});
    });
});


app.listen(port);
console.log('Magic happens on port ' + port);

var mongoose = require('mongoose');
var log = require('../logs_database');


var connection = mongoose.connect(log.config.url,{
  useMongoClient : true,
  user : log.config.user,
  pass : log.config.pass
})

var db = mongoose.connection;
//console.log(db);

module.exports = db;

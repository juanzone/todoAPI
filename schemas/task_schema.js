var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema   = new Schema({
    task: String,
    author: String,
    date: { type : Date, default : Date.now },
    completed : Boolean
});

module.exports = mongoose.model('Task', TaskSchema);

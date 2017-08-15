var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema   = new Schema({
    name: String,
    author: String,
    completed : Boolean
});

module.exports = mongoose.model('Task', TaskSchema);

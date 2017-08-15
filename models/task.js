'use strict'
var db = require('./connection');
var task = require('../schemas/task_schema');


class Task{

  getAllTask(cb){
    task.find(null, function (err, tasks) {
    if (err) { throw err; }
    cb(tasks);
    });
  }

  addTask(newTask, newAuthor, newCompleted, cb){
    var myNewTask = new task({
      task : newTask,
      author : newAuthor,
      completed : newCompleted
    })
    myNewTask.save(function(err, task){
      if(err) throw err;
      cb(task);
      console.log("Ajouté avec succès");
    })
  }

  removeTask(id, cb){
    task.findByIdAndRemove(id, function(err, success){
      if(err) throw err;
      cb(success);
    })
  }

}

module.exports = Task;

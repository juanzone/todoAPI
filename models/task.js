'use strict'
var db = require('./connection');
var task = require('../schemas/task_schema');


class Task{

  constructor(){
    console.log("Instanciation de l'objet");
  }

  getAllTask(){
    task.find(null, function (err, tasks) {
    if (err) { throw err; }
    console.log(tasks);
    });
  }

  addTask(){
    var myNewTask = new task({
      name : "Juan",
      author : "Juan",
      completed : false
    })
    myNewTask.save(function(err){
      if(err) throw err;
      console.log("Ajouté avec succès");
    })
  }

}

module.exports = Task;

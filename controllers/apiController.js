  var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Todos = require('../models/todoModel');

module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/api/todos', function(req, res){
    Todos.find({}, function(err, data){
      if(err) { throw err ;}
      res.send(data);
    });
  });

  app.get('/api/todos/:uname', function(req, res){
    Todos.find({username : req.params.uname}, function(err, data){
      if(err) { throw err ;}
      res.send(data);
    });
  });

  app.get('/api/todo/:id', function(req, res){
    console.log(req.body);
    Todos.findById({_id : req.params.id}, function(err, data){
      if(err) { throw err ;}
      res.send(data);
    })
  });

  app.post('/api/todo/', function(req, res){
    console.log(req.body);
    if(req.body.id) {
      Todos.findByIdAndUpdate(req.params.id, {
        todo: req.body.todo,
        isDone: req.body.isDOne,
        hasAttachment: req.body.hasAttachment
      }, function(err, data){
        if(err) {throw err;}
        res.send('success !');
      });
    } else {
      var newTodo = Todos({
        username: req.body.username,
        todo : req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });
      newTodo.save(function(err, data){
        if(err) { throw err; }
        res.send('saved !');
        console.log(data);
      });
    }
  });

  app.delete('/api/todo/:id', function(req, res){
    Todos.findByIdAndRemove(req.params.id, function(err, data){
      if(err) { throw err; }
      res.send('removed !');
    })
  });

}

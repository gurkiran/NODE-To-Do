var Todos = require('../models/todoModel');

module.exports = function(app) {

  app.get('/api/setupTodos', function(req, res){
    //set up starter data
    var starterTodos = [
      {
        username : 'test',
        todo: 'learn node',
        isDone: false,
        hasAttachment: false
      },
      {
        username : 'test',
        todo: 'Go to New York City',
        isDone: false,
        hasAttachment: false
      },
      {
        username : 'test',
        todo: 'Eat chipotle',
        isDone: false,
        hasAttachment: false
      },
      {
        username : 'gurkiran',
        todo: 'learn node',
        isDone: false,
        hasAttachment: false
      },
      {
        username : 'gurkiran',
        todo: 'Go to New York City',
        isDone: false,
        hasAttachment: false
      },
      {
        username : 'gurkiran',
        todo: 'Eat chipotle',
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, function(err, results){
      if(err) { throw err; }
      res.send(results);

    });
  });
}

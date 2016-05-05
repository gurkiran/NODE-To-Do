var configValues = require('./config');

module.exports = {
  getDbConnectionString : function(){
    return 'mongodb://'+ configValues.uname+':'+configValues.pwd
    +'@ds015750.mlab.com:15750/node-todo-sample';
  }

}

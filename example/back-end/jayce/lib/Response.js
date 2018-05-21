var Base = require('./base');

function Response() {

  this.send = function(msg) {
    console.log('res send');
    console.log(this.name);
    this.clients.forEach(item => {
      item.send('asdasdasd');
    });
  }
}

Response.prototype = new Base();

module.exports = Response;
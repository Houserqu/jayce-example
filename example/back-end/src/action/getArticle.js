const Action = require('../../jayce').Action;
const Response = require('../../jayce').Response;


Action.action('/sign', function(req){
  console.log(req.data);
  Response.all(req.data);
})

module.exports = Action;

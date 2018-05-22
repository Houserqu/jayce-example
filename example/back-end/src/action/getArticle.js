const Action = require('../../jayce').Action;
const Response = require('../../jayce').Response;


Action.action('/sign', function (req, res) {
  res.all(req.data);
})

Action.action('/login', function (req,res) {
  res.send(req.data);
})

module.exports = Action;

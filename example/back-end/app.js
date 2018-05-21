const http = require('http');
const jayce = require('./jayce');

const server = http.createServer();

const jayceApp = jayce()

jayceApp.action('GET', function(req, res){
  console.log(req.data);
  res.send('hahahahahha');
})


jayceApp.listen({
  server,
  "port": 3001,
  "verifyClient": function(info) {
    return true;//否则拒绝
  }
})

const http = require('http');
const jayce = require('jayce-server');

const Response = jayce.Response;
const Action = jayce.Action;

/**
 * actions
 */
const articleAction = require('./src/action/getArticle');

const server = http.createServer();
const jayceApp = jayce();

jayceApp.use('response',function (ctx, next) {
  console.log('middleware2', ctx.type);
  ctx.data = '888888888';
  next();
})

// 添加 事件监听
jayceApp.actionCollection(articleAction);

// jayceApp.action('/login', function(req){
//   console.log(req.data);
//   Response.all(req.data);
// })

jayceApp.listen({
  server,
  "port": 3001,
  "verifyClient": function(info) {
    return true;//否则拒绝
  }
})
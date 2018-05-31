function requestBodyParse(ctx, next) {
  let req = JSON.parse(ctx.message);
  if(req.header && req.body){
    ctx.req = req;
    next();
  } else {
    // 请求数据格式出错，修改url为 /error， 交给error事件处理器处理
    ctx.req = {
      header: {
        url: '/error'
      },
      body: ''
    }
    return;
  }
}

module.exports = requestBodyParse
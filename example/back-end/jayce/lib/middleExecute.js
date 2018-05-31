const Base = require('./base');

var base = new Base();

function MiddleExecute (ctx, type) {
  this.index = 0;
  this.ctx = ctx;

  this.middlewareChain = [];

  let that = this;
  base.middleware.forEach(function (item) {
    if(item.type === type){
      that.middlewareChain.push(item.fn);
    }
  })

  // console.log(this.middlewareChain);

  this.next = function(){
    if (this.index >= this.middlewareChain.length) {
      return 
    }

    let middlewareFn = this.middlewareChain[this.index];
    this.index++;
    middlewareFn(ctx, this.next.bind(this));
  }

  this.next();

  //return ctx;

}

module.exports = MiddleExecute;
## About

> 当前项目是Jayce示例应用

### birth

个人比较对实时性的应用比较感兴趣，而自己是个前端爱好者，非常喜欢基于react的单页应用开发，于是想能否结合react高点事情呢？于是诞生了开发Jayce这个框架的想法，一句话描述就是:

> 基于websocket的实时单页应用开发框架

**Jayce**可以让开发者用node.js + websocket + redux + react 开发出能够灵活的、健壮的、复杂的实时web应用，让程序员有更多时间喝咖啡。:coffee: :coffee:

### progress

经过了大半个月的设计和开发，目前开发出了非常基础的版本，完成了核心架构的开发，基本上能够完成需要的功能。但是目前只是个婴儿，还不能用于正式项目中。

目前相当于踏出了第一步，后续还有很长的路要走。:muscle: :muscle: :muscle:

## Installation

Jayce由三个子框架组成：[jayce](https://github.com/Houserqu/jayce)、[jayce-dom](https://github.com/Houserqu/jayce-dom)、[jayce-server](https://github.com/Houserqu/jayce-server)，与其对应的npm包为 [jayce-fe](https://www.npmjs.com/package/jayce-fe)、[jayce-dom](https://www.npmjs.com/package/jayce-dom)、[jayce-server](https://www.npmjs.com/package/jayce-server)

jayce-fe与jayce-dom用于前端部分，jayce-server用于服务端

前端项目安装:

```
npm i jayce-fe jayce-dom --save
```

服务端安装

```
npm i jayce-server --save
```

## Documention

由于框架还有很多部分需要完善，暂时还没有编写开发文档，[关于框架的详细介绍，可以看这一篇文章](https://github.com/Houserqu/jayce-example/blob/master/doc/paper/%E5%9F%BA%E4%BA%8Ewebsocket%E7%9A%84%E5%AE%9E%E6%97%B6%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E6%A1%86%E6%9E%B6.md)

## License

Jayce is [MIT licensed](https://github.com/facebook/react/blob/master/LICENSE).
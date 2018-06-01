import Jayce from '../jayce-fe';

let jayce = new Jayce({
  url: 'ws://localhost:3001'
});
let sign = function(){}

let login = function(url){
  jayce.post('/login', 'want to login');
}

let createArticle = function(title) {
  jayce.post('/createarticle', title);
}

export default sign;
export const loginService = login;
export const createArticleService = createArticle;
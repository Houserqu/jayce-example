import Jayce from './jayce-fe';
import store from './store';

let jayce = new Jayce(store, {
  url: 'ws://localhost:3001'
});

export default jayce;
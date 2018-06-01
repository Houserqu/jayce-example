import { createStore } from 'redux';
import AppReducer from './reducer';

const store = createStore(AppReducer);

export default store;
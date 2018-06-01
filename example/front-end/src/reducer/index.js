import { combineReducers } from 'redux'
import { jayceReducer } from '../jayce-fe';
import about from './about';
import home from './home';

const AppReducer = combineReducers({
  about,
  home,
  'jayce': jayceReducer
})

export default AppReducer;
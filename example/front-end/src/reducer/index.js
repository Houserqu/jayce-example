import { combineReducers } from 'redux'
import { jayceReducer } from 'jayce-fe';
import about from './about';
import home from './home';
import article from './articles';

const AppReducer = combineReducers({
  about,
  home,
  article,
  'jayce': jayceReducer
})

export default AppReducer;
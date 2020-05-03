//总的 reducer
import count from './count'
import personReducer from './person'
import {combineReducers} from 'redux'
import welcome from "./welcome";
export  default combineReducers({//总的
  number:count,
  persons:personReducer
})
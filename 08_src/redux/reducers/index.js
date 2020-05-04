//总的 reducer
import count from './count'
import personReducer from './person'
import {combineReducers} from 'redux'

export  default combineReducers({//总的
  number:count,
  persons:personReducer
})
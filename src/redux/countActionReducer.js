//用于count组件相关的action
import {INCREMENT,DECREMENT} from './actionType'
export const createIncrement=value=>({
  type:INCREMENT,data:value
})
export const createDecrement=value=>({
  type:DECREMENT,data:value
})
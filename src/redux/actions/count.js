//用于count组件相关的action
import {INCREMENT,DECREMENT} from '../actionType'
export const increment=value=>({
  type:INCREMENT,data:value
})
export const decrement=value=>({
  type:DECREMENT,data:value
})
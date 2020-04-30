//用于Person组件相关的action
import {ADD_PERSON} from '../actionType'

//添加 的action
export const addPerson =personObj=>({type:ADD_PERSON,data:personObj})
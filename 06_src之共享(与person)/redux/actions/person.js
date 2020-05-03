import {ADD_PERSON} from '../actionType'
//创建添加一个人的action ---- 对象式action ---- 同步action
export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})
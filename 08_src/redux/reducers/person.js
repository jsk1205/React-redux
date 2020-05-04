//为person服务的renducer即 真正操作状态的人
//并Reducers加工完状态给store了
//Reducers本质是一个函数
//特别注意reducer是一个纯函数
import { ADD_PERSON } from "../actionType";
let initState=[
  {id:'01',name:'小轲',age:18},
  {id:'02',name:'大美',age:20},
  {id:'03',name:'蛋蛋',age:19}
]
//传Reducers所需要的previousState,action
export default function (preState=initState,action) {
  const {type,data}=action
  let newState
  switch (type) {
    case ADD_PERSON:
      newState=[data,...preState]
      return newState
    
    default:
      return preState
  }
}
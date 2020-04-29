//为store服务的renducer即 真正操作状态的人
//并Reducers加工完状态给store了
//Reducers本质是一个函数

let initState=0
//传Reducers所需要的previousState,action
export default function (preState=initState,action) {
  const {type,data}=action
  let newState
  switch (type) {
    case 'increment':
      newState= preState+data
      return newState
    case 'decrement':
      newState= preState-data
      return newState
    default:
      return preState
  }
}
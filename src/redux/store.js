//创建store核心对象,随后暴露
import { createStore,applyMiddleware } from 'redux'
// //引入为store服务的renducer
// import countReducer from './reducers/count'
//引入总的 总的 reducer
import allReducer from './reducers'
//引入 redux-thunk 用于支持异步action --中间架,然后还需要applyMiddleware
import thunk from 'redux-thunk'
//引入composeWithDevTools(的返回值)  要作为createStore的第二个参数
import { composeWithDevTools } from "redux-devtools-extension"

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)),)
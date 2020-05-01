//创建store核心对象,随后暴露
import { createStore,applyMiddleware } from 'redux'
// //引入为store服务的renducer
// import countReducer from './reducers/count'
//引入总的 总的 reducer
import allReducer from './reducers'
//引入 redux-thunk 用于支持异步action --中间架,然后还需要applyMiddleware
import thunk from 'redux-thunk'
export default createStore(allReducer,applyMiddleware(thunk))
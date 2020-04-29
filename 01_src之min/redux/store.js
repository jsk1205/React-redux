//创建store核心对象,随后暴露
import { createStore } from 'redux'
//引入为store服务的renducer
import countReducer from './countReducer'

export default createStore(countReducer)
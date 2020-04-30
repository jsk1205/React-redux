import React, { Component } from 'react'
//引入store
// import store from '../../redux/store'
//action
// import {increment,decrement} from '../../redux/actions/count'

export default class Count extends Component {
  
  increment=()=>{
    const {value}=this.refs.user_selectd
    //通知redux 没有所谓的'服务员',我们可以自己写
   // store.dispatch(increment(value*1))
    this.props.increment(value*1)
  }
  decrement=()=>{
    const {value}=this.refs.user_selectd
    //store.dispatch(decrement(value*1))
    this.props.decrement(value*1)
  }
  incrementIfOdd=()=>{
    const {value}=this.refs.user_selectd
    const {count} = this.props
		if(count%2 === 1){
			this.props.increment(value*1)
		}
  
  }
  incrementAsync=()=>{
    const {value}=this.refs.user_selectd
    setTimeout(()=>{
			this.props.increment(value*1)
		},500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
        <select ref="user_selectd">
          <option value="1">1</option> 
          <option value="2">2</option> 
          <option value="3">3</option> 
        </select> &nbsp;
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

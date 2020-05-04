import React, { Component } from 'react'
//引入connect方法(重点)
import { connect } from 'react-redux' 
import {increment} from "../redux/actions/count";
 class Welcome extends Component {
  add=()=>{
		//函数体
		this.props.increment()
	}
  render() {
		// const {count,personCount} = this.props
		// console.log(this.props.count)
		//console.log(store.getState())
		//console.log(store.getState().number)
		//console.log(store.getState().persons.length)
    return ( 
			<div>
        <h1>所念皆星河,求和为:{this.props.he},总人数为:{this.props.ren}</h1>
				{/* <h2>当前求和为:{store.getState().number},组件总人数为:{store.getState().persons.length}</h2> */}
		    {/* <h2>当前求和为:{count},组件总人数为:{personCount}</h2> */}
        <button onClick={this.add}>change</button>			
			</div>
    )
  }
}
export default connect(
	state=({
		he:state.number,
		ren:state.persons.length
	}),
	{increment}
)(Welcome)
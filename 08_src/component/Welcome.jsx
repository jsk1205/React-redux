import React, { Component } from 'react'
//引入store
import store from '../redux/store'

export default class Count extends Component {
  
  render() {
		const {count,personCount} = this.props
		// console.log(this.props.count)
		//console.log(store.getState())
		//console.log(store.getState().number)
		//console.log(store.getState().persons.length)
    return ( 
			<div>
        <h1>所念皆星河</h1>
				<h2>当前求和为:{store.getState().number},组件总人数为:{store.getState().persons.length}</h2>
		    {/* <h2>当前求和为:{count},组件总人数为:{personCount}</h2> */}
			</div>
    )
  }
}

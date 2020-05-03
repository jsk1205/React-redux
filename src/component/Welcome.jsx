import React, { Component } from 'react'
import store from "../redux/store";

export default class Welcome extends Component {
	render() {
		const {persons,counts}=this.props
		return (
			<div>
				<h1>所念皆星河,星河不及你 </h1>
				{/* store.dispatch({
					type:'ADD_TODO',
					payload:'redux原理'
				}) */}
		    <h2>当前总人数为:{store.getState({number})},
					下方组件求和为:{store.getState({persons})
				</h2>
			</div>
		)
	}
}

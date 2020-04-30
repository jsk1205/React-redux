import React, { Component } from 'react'
import Count from './containers/Count' //不在入口js文件做处理-->会报错

export default class App extends Component {
  render() {
    return (
        <Count/>
    
    )
  }
}

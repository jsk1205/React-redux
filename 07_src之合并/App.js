import React, { Component } from 'react'
import Count from './containers/Count' //不在入口js文件做处理-->会报错
import Person from "./containers/Person";
import Welcome from "./component/Welcome";
export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome/>
        <hr/>
        <Count/>
        <hr/>
        <Person/>
      </div>
    )
  }
}

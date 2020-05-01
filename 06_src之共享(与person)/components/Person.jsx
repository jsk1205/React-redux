import React,{Component} from 'react'
import {v4 as uuidv4} from 'uuid'

export default class Person extends Component{
  add=()=>{
    const {nameNode,ageNode}=this.refs
    if (!nameNode.value||!ageNode.value) {
      alert('名字和年龄均不能为空')
      return
    }
    this.props.addPerson({
      id:uuidv4(),
      name:nameNode.value,
			age:ageNode.value
    })
    nameNode.value=''
    ageNode.value = ''
  }
  render (){
    const {persons,counts}=this.props
    return(
      <div>
        <h1>当前总人数为:{persons.length},上方组件求和为:{counts}</h1>
        <input type="text" placeholder="输入名字" ref='nameNode'/>&nbsp;
        <input type="text" placeholder="输入年龄" ref='ageNode'/>&nbsp;
        <button onClick={this.add}>添加</button>
        <ul>
          {
            persons.map((personObj)=>{
              return (
              <li key={personObj.id}>姓名：{personObj.name},年龄：{personObj.age}</li>
              )
            })
          }
          
        </ul>
    
      </div>
    )
  }
}
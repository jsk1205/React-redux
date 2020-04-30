//容器组件
//引入UI组件
import Count from '../components/Count/Count'
//引入connect方法(重点)
import { connect } from 'react-redux' 
// 引入action
import { increment,decrement,incrementAsync } from "../redux/actions/count"

//繁琐版
// function mapStateToProps (state){
// 	return {count:state}
// }
// function mapDispatchToProps(dispatch){
// 	return {
// 		increment:(value)=>{dispatch(increment(value))},
// 		decrement:(value)=>{dispatch(decrement(value))},
//   }
// }
//export default connect(mapStateToProps,mapDispatchToProps)(Count)

//精简版
export default connect(
  state=>({//映射状态, state是redux中保存的{总}状态
    count:state.number,
		personCount:state.persons.length
  }),//映射状态
  {increment,decrement,incrementAsync}
)(Count)
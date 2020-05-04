//引入UI组件
import Welcome from '../component/Welcome'
//引入connect方法(重点)
import { connect } from 'react-redux' 


//精简版
export default connect(
  state=>({
    count:state.number,
		personCount:state.persons.length
  }),//映射状态
  {}
)(Welcome)
//容器组件
//引入UI组件
import Person from '../components/Person'
//引入connect方法(重点)
import { connect } from 'react-redux' 
// 引入person的action
import {addPerson} from "../redux/actions/person"

//精简版
export default connect(
  state=>({
    persons:state.persons,
    count:state.number
  }),//映射状态
  {
    addPerson
  }
)(Person)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider} from 'react-redux'

ReactDOM.render(
<Provider	store={store}>
	<App/>
</Provider>,
document.getElementById('root'))
//如果redux保存的状态发生变化,那么就调用store.subscribe所指定的回调
// store.subscribe(()=>{
// 	ReactDOM.render(<App/>,document.getElementById('root'))
// })


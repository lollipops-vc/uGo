import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// 导入请求对象
import request from './utils/request.js'
// 导入样式
import 'static/iconfont.css'
import store from './store'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$request = request
Vue.prototype.$store = store
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

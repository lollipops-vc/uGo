// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'
	import {CARTKEY} from 'utils/key.js'
Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		// 购物车上商品数据
		goodsList:uni.getStorageSync(CARTKEY)||[]
	},
	mutations:{
		ADD2CART(state,goods){
			const {goodsList} = state
			const index = goodsList.findIndex(v=>{
				return v.goods_id===goods_id
			})
			if(index===-1){
				goodsList.push({
					...goods,
					num:1,
					isChecked:true
				})
			}else{
				goodsList[index].num++
			}
			console.log(`购物车`,goodsList)
		}
	}
})
export default store
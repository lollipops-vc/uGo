// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'
	import {CARTKEY} from 'utils/key.js'
Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		// 购物车上商品数据
		goodsList:uni.getStorageSync(CARTKEY)||[],
		userInfo:{}
	},
	mutations:{
		SETUSERINFO(state,userInfo){
			state.userInfo = userInfo
		},
		REFRESHCART(state,cartList){
			// state.goodsList = cartList.map(v=>{
			// 	const {goods_id,num,isChecked} = v
			// 	return {
			// 		goods_id,num,isChecked
			// 	}
			// })
			state.goodsList = cartList
		},
		ADD2CART(state,goods){
			const {goodsList} = state
			const index = goodsList.findIndex(v=>{
				return v.goods_id===goods.goods_id
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
			uni.showToast({
				title:'添加成功'
			})
		}
	}
})
export default store
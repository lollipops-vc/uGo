<template>
  <view>
    <!-- <button @tap="getUserInfo">点我登录</button> -->
    <button open-type="getUserInfo" @getuserinfo=" getuserinfo">点我登录</button>
  </view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				userInfo:','
			}
		},
		methods: {
			...mapMutations(['SETUSERINFO']),
			// getUserInfo(){
			// 	uni.getUserInfo({
			// 		success: (useRes) => {
			// 			this.userInfo = useRes;
			// 			console.log(`userinfo`,useRes)
			// 		}
			// 	})
			// },
			getuserinfo(userRes){
				console.log(`userinfo`,userRes)
				this.SETUSERINFO(userRes.detail.userInfo)
				uni.switchTab({
					url:'/pages/me/me'
				})
			}
		}
	}
</script>

<style>

</style>

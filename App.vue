<script>
	import {CARTKEY} from 'utils/key.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
			uni.setStorageSync(CARTKEY,this.$store.state.goodsList)
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

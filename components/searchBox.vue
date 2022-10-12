<template>
	<view class="search-box">
		<icon type="search" size="18"></icon>
		<input type="text" :value='value' @input="onInput" @confirm='onConfirm' placeholder="请输入你想要的商品">
		<button type="default" v-show="value.length" @tap='onCancel'>取消</button>		
	</view>
</template>

<script>
	export default{
		props:['value'],
		methods:{
			onInput(event){
				this.$emit('input',event.target.value)
			},
			onConfirm(){
				this.$emit('confirm')
			},
			onCancel(){
				this.$emit('cancel')
			}
		}
	}
</script>

<style lang="less">
	.search-box{
		height: 120rpx;
		background-color: #eeeeee;
		padding: 30rpx 20rpx 30rpx 10rpx;
		box-sizing: border-box;
		position: relative;
		display: flex;
		justify-content: space-between;
		icon{
			position: absolute;
			top: 38rpx;
			left: 30rpx;
		}
		input{
			background-color: white;
			padding-left: 70rpx;
			border-radius: 4rpx;
			margin-right: 20rpx;
			flex:1;
			height: 60rpx;
		}
		button{
			width: 160rpx;
			height: 60rpx;
			text-align: center;
			line-height: 60rpx;
			border-radius: 4rpx;
		}
	}
	
</style>
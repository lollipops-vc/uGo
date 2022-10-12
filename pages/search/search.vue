<template>
	<view class="search-container">
		<!-- 顶部 -->
		<view class="search-box">
			<icon type="search" size="20"></icon>
			<input type="text" v-model="query" @confirm='addHistory' placeholder="请输入你想要的商品">
			<button type="default" v-show="query.length" @tap='cancel'>取消</button>		
		</view>
		<!-- 底部 -->
		<view class="history-box">
			<view class="top">
				<text>历史搜索</text>
				<icon @tap='clear' type="clear"></icon>
			</view>
			<view class="bottom">
				<view v-for="(item,index) in history" :key="index">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				query:'',
				history:[],
			}
		},
		onLoad(){
			const history = uni.getStorageSync('history');
			this.history=history||[]
		},
		methods: {
			cancel(){
				this.query=''
			},
			addHistory(){
				if(this.query===''){
					return
				}
				this.history.push(this.query);
				this.history=[...new Set(this.history)]
				if(this.history.length>10){
					this.history.shift();
				}
				uni.setStorageSync('history',this.history)
			},
			clear(){
				this.history=[];
				uni.clearStorageSync('history')
			}
		}
	}
</script>

<style lang="less">
	.search-container{
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
		.history-box{
			padding: 25rpx 30rpx 0 20rpx;
			.top{
				display: flex;
				justify-content: space-between;
			}
			.bottom{
				display: flex;
				flex-wrap: wrap;
				margin-top: 30rpx;
				view{
					padding: 20rpx;
					margin-right: 30rpx;
					margin-bottom: 20rpx;
					background-color: #dddddd;
				}
			}
		}
	}

</style>

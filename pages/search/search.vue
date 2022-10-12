<template>
	<view class="search-container">
		<!-- 顶部 -->
		<searchBox v-model="query" @confirm='addHistory' @cancel='cancel()'></searchBox>
		<!-- 底部 -->
		<view class="history-box">
			<view class="top">
				<text>历史搜索</text>
				<icon @tap='clear' type="clear"></icon>
			</view>
			<view class="bottom">
				<view v-for="(item,index) in history" :key="index" @tap="clickHistory(item)">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "../../components/searchBox.vue"
	export default {
		components:{
			searchBox
		},
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
		onShow() {
			this.query='';
			const history = uni.getStorageSync('history');
			this.history=history||[]
		},
		methods: {
			clickHistory(item){
				this.query=item;
				this.goResult()
			},
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
				uni.setStorageSync('history',this.history);
				this.goResult()
			},
			clear(){
				this.history=[];
				uni.clearStorageSync('history')
			},
			goResult(){
				uni.navigateTo({
					url:`../searchResult/searchResult?query=${this.query}`
				})
			}
		}
	}
</script>

<style lang="less">
	.search-container{
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

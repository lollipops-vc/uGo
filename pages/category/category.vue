<template>
	<view class="category-container">
		<searchBar></searchBar>
		<!-- 底部的内容区域 -->
			<view class="bottom">
				<!-- 自己写滚动样式 1-->
				<!-- <view class="left">
				</view>
				<view class="right">
				</view> -->
				<!-- 组件滚动 -->
				<scroll-view class="left" scroll-y='true'></scroll-view>
				<scroll-view class="right" scroll-y='true'></scroll-view>
			</view>
			
	</view>
</template>

<script>
	import searchBar from '../../components/searchBar.vue'
	export default {
		components:{
			searchBar,
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.category-container{
		position: relative;
		height:100vh;
			.bottom{
				top: 85rpx;
				position: absolute;
				bottom: 0;
				width: 100%;
				background-color: skyblue;
				display: flex;
				.left{
					width: 200rpx;
					background-color: pink;
					// overflow-y: scroll;1
				}
				.right{
					flex: 1;
					background-color: orange;
					// overflow-y: scroll;1
				}
			}
	}
</style>

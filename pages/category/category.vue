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
			<scroll-view class="left" scroll-y='true'>
				<view class="item" v-for="(item,index) in categoryList" :key='item.cat_id' @tap="activeIndex=index"
					:class="{active:activeIndex===index}">
					{{item.cat_name}}
				</view>
			</scroll-view>
			<scroll-view class="right" scroll-y='true'>
				<image class="banner" src="../../static/floor/floor1.png" mode=""></image>
				<!-- 区域 -->
				<view class="pro-section" v-for="item in categoryList[activeIndex].children">
					<view class="title">
						<text>{{item.cat_name}}</text>
					</view>
					<!-- 列表区域 -->
					<view class="pro-items">
						<view class="item" v-for="it in item.children" :key="it.cat_id">
							<image :src="it.cat_icon"></image>
							<text>{{it.cat_name}}</text>
						</view>

					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import searchBar from '../../components/searchBar.vue'
	export default {
		components: {
			searchBar,
		},
		data() {
			return {
				categoryList: [],
				activeIndex: 0
			}
		},
		onLoad() {
			this.getList();
		},
		methods: {
			getList() {
				setTimeout(() => {
					let data = [{
						cat_id: 1,
						cat_name: "大家电",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
						children: [{
							cat_id: 3,
							cat_name: "电视",
							cat_pid: 1,
							cat_level: 1,
							cat_deleted: false,
							cat_icon: "",
							children: [{
              cat_id: 5,
              cat_name: "曲面电视",
              cat_pid: 3,
              cat_level: 2,
              cat_deleted: false,
              cat_icon: "../../static/floor/floor1.png"
            }]
						}]
					}, {
						cat_id: 2,
						cat_name: "大家电1",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
						children: [{
							cat_id: 3,
							cat_name: "电视",
							cat_pid: 1,
							cat_level: 1,
							cat_deleted: false,
							cat_icon: "",
							children: [{
						  cat_id: 5,
						  cat_name: "曲面电视",
						  cat_pid: 3,
						  cat_level: 2,
						  cat_deleted: false,
						  cat_icon: "../../static/floor/floor1.png"
						}]
						}]
					}, {
						cat_id: 3,
						cat_name: "大家电2",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 4,
						cat_name: "大家电3",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 5,
						cat_name: "大家电4",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 6,
						cat_name: "大家电5",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 7,
						cat_name: "大家电6",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 8,
						cat_name: "大家电7",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 9,
						cat_name: "大家电8",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 10,
						cat_name: "大家电9",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 11,
						cat_name: "大家电10",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}, {
						cat_id: 12,
						cat_name: "大家电11",
						cat_pid: 0,
						cat_level: 0,
						cat_deleted: false,
						cat_icon: "",
					}]
					this.categoryList = data
				}, 1000)
			},
		}
	}
</script>

<style lang="less">
	.category-container {
		position: relative;
		height: 100vh;

		.bottom {
			top: 85rpx;
			position: absolute;
			bottom: 0;
			width: 100%;
			// background-color: skyblue;
			display: flex;

			.left {
				width: 200rpx;

				// background-color: pink;
				// overflow-y: scroll;1
				.item {
					background-color: #f4f4f4;
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;

					&.active {
						background-color: white;
						color: #fe2c4b;
						position: relative;

						&::before {
							content: '';
							position: absolute;
							left: 0;
							height: 60rpx;
							top: 20rpx;
							background-color: #fe2c4b;
							width: 10rpx;
						}
					}
				}
			}

			.right {
				flex: 1;
				// background-color: orange;
				padding: 20rpx 16rpx;
				// overflow-y: scroll;1
				.banner{
					width: 520rpx;
					height: 180rpx;
				}
				.pro-section{
					margin-top :35rpx;
					.title{
						text-align: center;
						color: #dadada;
						text{
							color: black;
							margin: 0 35rpx;
						}
					}
				}
				.pro-items{
					display: flex;
					flex-wrap: wrap;
					.item{
						width: 33.333333%;
						text-align: center;
						font-size: 25rpx;
						image{
							display: block;
							width: 120rpx;
							height: 120rpx;
							margin: 0  auto;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<view class="home-container">
		<searchBar></searchBar>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swipers" :key='index'>
				<image :src="item.img_src" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav-box">
			<image v-for="item in navs" :key='item.name' :src="item.img_src" mode=""></image>
		</view>
		<!-- 楼层区域 -->
		<view class="floor-box" v-for="(item,index) in floors" :key='index'>
			<!-- 头部 -->
			<view class="header">
				<image :src="item.img_src" mode=""></image>
			</view>
			<!-- 底部 -->
			<view class="bottom">
				<image :src="item.product_list[0].img_src	" mode=""></image>
				<view class="right">
					<view v-for="(it,i) in item.product_list" :key='i'>
						<image v-if="i!==0" :src="it.img_src" mode=""></image>
					</view>
				</view>
			</view>
			<!-- 返回顶部 -->
			<view class="to-top" v-if="isShow" @click="toTop">
				<text>></text>顶部
			</view>
		</view>
	</view>
</template>

<script>
	import searchBar from '../../components/searchBar.vue'
	export default {
		components:{
			searchBar
		},
		data() {
			return {
				isFocus: false,
				swipers: [],
				navs: [],
				floors: [],
				isShow:false,
			}
		},
		onLoad() {
			this.getSwipers();
			this.getNav();
			this.getFloor();
		},
		// 滚动事件
		onPageScroll(e) {
			if(e.scrollTop>=200){
				this.isShow=true;
			}else{
				this.isShow=false;
			}
		},
		methods: {
			getSwipers() {
				setTimeout(() => {
					let data = [{
						img_src: '../../static/swiper/swiper01.png'
					}, {
						img_src: '../../static/swiper/swiper02.png'
					}, {
						img_src: '../../static/swiper/swiper03.png'
					}, {
						img_src: '../../static/swiper/swiper04.png'
					}]
					this.swipers = data
				}, 1000)
			},
			getNav() {
				setTimeout(() => {
					let data = [{
						name: '分类',
						img_src: '../../static/nav/nav5.png'
					}, {
						name: '超市购',
						img_src: '../../static/nav/nav2.png'
					}, {
						name: '分类',
						img_src: '../../static/nav/nav3.png'
					}, {
						name: '分类',
						img_src: '../../static/nav/nav6.png'
					}]
					this.navs = data
				}, 1000)
			},
			getFloor() {
				setTimeout(() => {
					let data = [{
							img_src: '../../static/floor/floor5.png',
							product_list: [{
									img_src: '../../static/floor/floor5.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								}
							],
						},{
							img_src: '../../static/floor/floor2.png',
							product_list: [{
									img_src: '../../static/floor/floor5.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								}
							],
						},{
							img_src: '../../static/floor/floor3.png',
							product_list: [{
									img_src: '../../static/floor/floor5.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								},
								{
									img_src: '../../static/floor/floor7.png',
								}
							],
						},
					]
					this.floors = data
				}, 1000)
			},
			toTop(){
				uni.pageScrollTo({
					scrollTop:0,
					duration:300
				})
			}
		}
	}
</script>

<style lang="less">
	.home-container {
		// 搜索区域
		.search-box {
			background-color: #fe2c4b;
			padding: 20rpx;
			position: relative;
			input {
				background-color: white;
				padding-left: 50%;
				border-radius: 10rpx;
				transition: 0.3s;
			}
			icon {
				position: absolute;
				top: 25rpx;
				left: 42%;
				transition: 0.3s;
			}
			// 当search-box 有focus的时候 input 和icon 就有生效的样式
			// .search-box.focus
			&.focus {
				input {
					padding-left: 60rpx;
				}
				icon {
					left: 4%;
				}
			}
		}
		.swiper-image{
			width: 100%;
		}
		// 导航区域
		.nav-box{
			height: 194rpx;
			display: flex;
			justify-content: space-around;
			margin-top: 20rpx;
			image{
				width: 128rpx;
				height: 140rpx;
			}
		}
		// 楼层区域
		.floor-box{
			.header{
				background-color: #f4f4f4;
				padding: 20rpx;
				image{
					width: 1280rpx;
					height: 100rpx;
				}
			}
			.bottom{
					display: flex;
					padding-left: 20rpx;
					>image{
						width:232rpx;
						height: 386rpx;
						margin-right:10rpx;
					}
					.right{
						flex:1;
						display: flex;
						flex-wrap: wrap;
						image{
							width:223rpx;
							height: 188rpx;
							margin-right:10rpx;
						}
					}
				}
			
		}	
		// 返回顶部
		.to-top{
			position: fixed;
			right: 20rpx;
			bottom: 40rpx;
			width: 120rpx;
			height: 120rpx;
			background-color: rgba(255,255,255,.3);
			text-align: center;
			border-radius: 50%;
			text{
				transform: rotate(-90deg);
				display: block;
			}
		}
	}
</style>
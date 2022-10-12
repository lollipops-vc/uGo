<template>
	<view class="search-result-container">
		<searchBox v-model="query" @confirm='search' @cancel='goBack()'></searchBox>
		<view class="filter-box">
			<view @tap="changeFilter('default')" :class="{active:filter=='default'}">综合</view>
			<view @tap="changeFilter('sales')" :class="{active:filter=='sales'}">销量</view>
			<view @tap="changeFilter('price')" :class="{active:filter=='price'}">
				价格
				<view class="arrow-box">
					<view class="arrow up " :class="{active:isUp==true}"></view>
					<view class="arrow down" :class="{active:isUp==false}"></view>
				</view>
			</view>
		</view>
		<!-- 搜索结果 -->
		<view class="result-box">
			<!-- 搜索结果 -->
			<view class="item" v-for="item in filterGoods" :key='item.goods_id' @tap="goDetail">
				<image :src="item.goods_small_logo">
				</image>
				<view class="right">
					<view class="title">{{item.goods_name}}</view>
					<view class="price">
						¥
						<text>{{item.goods_price}}</text>
						.00
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from "../../components/searchBox.vue"

	import {
		KEY
	} from '../../utils/key.js'
	export default {
		components: {
			searchBox
		},
		data() {
			return {
				query: '',
				goods: [],
				filter: 'default',
				isUp: true
			}
		},
		computed: {
			filterGoods() {
				const temArr = [...this.goods]
				switch (this.filter) {
					case 'default':
						return this.goods;
					case 'sales':
						return temArr.sort((a, b) => {
							return a.goods_id - b.goods_id;
						})
					case 'price':
						return temArr.sort((a, b) => {
							if (this.isUp) {
								return a.goods_price - b.goods_price
							} else {
								return b.goods_price - a.goods_price
							}
						})
				}
			}
		},
		onLoad(option) {
			const {
				query
			} = option;
			this.query = query
			this.getList()
		},
		//触底加载
		onReachBottom() {
			uni.showLoading({
				mask: true
			})
			setTimeout(() => {
				const data = require('./searchList.json');
				const result = data?.message?.goods;
				this.goods = [...this.goods, ...result]
				uni.hideLoading()
			}, 1000)
		},
		methods: {
			goDetail(){
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			},
			changeFilter(filter) {
				this.filter = filter
				if (this.filter === 'price' && filter === 'price') {
					this.isUp = !this.isUp;
				}
			},
			getList() {
				uni.showLoading()
				setTimeout(() => {
					const data = require('./searchList.json');
					this.goods = data?.message?.goods;
					uni.hideLoading()
				}, 1000)
			},
			search() {
				if (this.query === '') {
					return
				}
				const history = uni.getStorageSync(KEY);
				console.log(`history`, history)
				history.push(this.query)
				uni.setStorageSync(KEY, [...new Set(history)])
			},
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="less">
	.search-result-container {
		padding-top: 186rpx;

		.search-box {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
		}

		// 筛选区域
		.filter-box {
			display: flex;
			height: 100rpx;
			border-bottom: 1rpx solid #dddddd;
			box-sizing: border-box;
			background-color: white;
			position: fixed;
			width: 100%;
			top: 102rpx;

			>view {
				flex: 1;
				text-align: center;
				line-height: 100rpx;

				&.active {
					color: #ff2d4a;
				}

				// 最后一个格子
				&:last-child {
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.arrow-box {
					margin-left: 10rpx;
				}

				// 箭头
				.arrow {
					width: 0;
					height: 0;
					border-left: 8rpx solid transparent;
					border-right: 8rpx solid transparent;

					&.up {
						border-bottom: 12rpx solid #cccccc;
						margin-bottom: 10rpx;

						&.active {
							border-bottom-color: #666;
						}
					}

					&.down {
						border-top: 12rpx solid #cccccc;

						&.active {
							border-top-color: #666;
						}
					}
				}
			}
		}

		// 搜索结果
		.result-box {
			.item {
				display: flex;
				padding: 20rpx;

				image {
					width: 200rpx;
					height: 200rpx;
					margin-right: 20rpx;
				}

				.right {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}

					.price {
						color: #ff2d4a;
						font-size: 24rpx;

						text {
							font-size: 40rpx;
						}
					}
				}
			}
		}
	}
</style>

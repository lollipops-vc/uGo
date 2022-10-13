<template>
	<view class="cart-container">
		<view class="empty" v-if="isEmpty">
			<text>🛒</text>
			你没有添加任何商品
		</view>
		<view class="full" v-else>
			<!-- 地址 -->
			<view class="address-box">
				<view>
					<text class="label">收货人:</text>
					<text class="content">苏</text>
					<text class="phone">18888888888</text>
					<text class="arrow">></text>
				</view>
				<view>
					<text class="label">收货地址:</text>
					<text class="content">广东省广州市天河区</text>
				</view>
				<image src="/static/images/cart_border@2x.png" mode=""></image>
			</view>
			<!-- 标题 -->
			<view class="title">
				<text>🏪</text>
				<text>优购生活馆</text>
			</view>
			<!-- 商品列表 -->
			<view class="goods-list">
				<view class="goods-item" v-for="(item, index) in cartList" :key="index">
					<text class="iconfont" @tap="toggleCheck(item,index)" :class="[item.isChecked?'icon-checked':' icon-uncheck']"></text>
					<image :src="item.goods_small_logo" alt="" />
					<view class="right">
						<text class="text-line2">{{item.goods_name}}</text>
						<view class="btm">
							<text class="price">
								￥
								<text>{{item.goods_price}}</text>
								.00
							</text>
							<view class="goods-num">
								<button @tap="sub(item,index)">-</button>
								<text>{{item.num}}</text>
								<button @tap="add(item,index)">+</button>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="account">
				<view class="select-all">
					<text class="iconfont icon-uncheck"></text>
					<text>全选</text>
				</view>
				<view class="price-wrapper">
					<view class="price">
						<view>
							合计:
							<text class="num">￥{{totalPrice}}.00</text>
						</view>
						<text class="info">包含运费</text>
					</view>
				</view>
				<view class="account-btn">结算({{totalNum}})</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				// 购物车是否为空
				isEmpty: true,
				cartList: [],
			};
		},
		onShow() {
			this.isEmpty = this.goodsList.length == 0
			// 获取商品数据
			this.getList();
		},
		computed: {
			...mapState(['goodsList']),
			totalPrice() {
				let totalPrice = 0
				this.cartList.forEach(v => {
					totalPrice += (v.num * v.goods_price)
				})
				return totalPrice
			},
			totalNum() {
				let totalNum = 0
				this.cartList.forEach(v => {
					totalNum += v.num
				})
				return totalNum
			},
		},
		methods: {
			toggleCheck(item,index){
				item.isChecked = !item.isChecked;
				console.log(`item`,item)
				this.cartList[index].isChecked = item.isChecked;
				// this.$forceUpdate()
			},
			add(item){
				item.num++
			},
			sub(item,index){
				if(item.num===1){
					uni.showModal({
						title:'提示',
						content:'是否删除',
						success:(res)=>{
							if(res.confirm){
								this.cartList.splice(index,1)
							}
						}
					})
				}else{
					item.num--
				}
			},
			getList() {
				setTimeout(() => {
					let data = [{
							goods_id: 140,
							goods_name: "海尔Haier Q7 负离子车载空气净化器 除异味烟味甲醛PM2.5 负离子氧吧 智能除菌净化 红色",
							goods_price: 588,
							goods_small_logo: "http://image2.suning.cn/uimg/b2c/newcatentries/0070069826-000000000135563442_1_400x400.jpg",
							item.c
							num:1
						},
						{
							goods_id: 395,
							goods_name: "洛玛 汽车车衣车罩 加厚防晒隔热车套外罩牛津布 福特麦柯斯 探险者 福特Mustang 福克斯RS 征服者 黑色",
							goods_price: 168,
							goods_small_logo: "http://image2.suning.cn/uimg/b2c/newcatentries/0070125000-000000000167731487_1_400x400.jpg",
							num:1
						}
					]
					//接口会吧加入购物车的传给后台，，这里先自己拼接下
					data=[...data,...this.goodsList]
					this.cartList = data.map(v => {
						const mergeObj = this.goodsList.find(item => {
							return v.goods_id === item.goods_id
						})
						return {
							...v,
							...mergeObj
						}

					})
				}, 100)
			}
		},
	};
</script>

<style lang="less">
	.cart-container {
		height: 100vh;
		background-color: #f4f4f4;

		.empty {
			text-align: center;

			text {
				font-size: 200rpx;
				display: block;
				margin-bottom: 20rpx;
			}
		}

		.iconfont {
			font-size: 44rpx;
		}

		.address-box {
			padding-left: 15rpx;
			padding-right: 20rpx;
			position: relative;
			height: 230rpx;

			>view {
				display: flex;
				align-items: center;
				height: 100rpx;
				justify-content: space-between;

				.label {
					margin-right: 20rpx;
				}

				.arrow {
					color: gray;
					margin-left: 50rpx;
				}

				.content {
					text-align: left;
					flex: 1;
				}
			}

			image {
				width: 750rpx;
				height: 15rpx;
				position: absolute;
				left: 0;
				bottom: 0;
			}
		}

		.title {
			height: 88rpx;
			display: flex;
			align-items: center;
			padding-left: 20rpx;

			text:first-child {
				margin-right: 10rpx;
			}
		}

		.goods-list {
			border-top: 1rpx solid #ddd;

			.goods-item {
				height: 210rpx;
				padding: 15rpx;
				background-color: #fff;
				display: flex;
				// box-sizing: border-box;
				align-items: center;

				.iconfont {
					color: #eb4450;
					margin: 0 30rpx;
				}

				image {
					width: 160rpx;
					height: 160rpx;
				}

				.right-box {
					display: flex;
					align-items: center;
					border-bottom: 1rpx solid #ddd;
				}

				.right {
					flex: 1;
					display: flex;
					flex-direction: column;
					margin: 0 20rpx 0 18rpx;

					.text-line2 {
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}

					.btm {
						display: flex;
						margin-top: 40rpx;
						justify-content: space-between;

						.price {
							color: #eb4450;
							display: flex;

							>text {
								font-size: 24px;
							}
						}

						.goods-num {
							display: flex;
							align-items: center;

							button {
								width: 60rpx;
								height: 50rpx;
								box-sizing: border-box;
								display: flex;
								justify-content: center;
								align-items: center;
								border: 4rpx solid #666;
							}

							text {
								margin: 0 30rpx;
							}
						}
					}
				}
			}
		}

		.goods-list {
			position: absolute;
			bottom: 98rpx;
			top: 320rpx;
			width: 100%;
			overflow: auto;
			padding-bottom: 60rpx;
			background-color: #f4f4f4;
		}

		.account {
			height: 98rpx;
			border-bottom: 1rpx solid #ddd;
			display: flex;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			align-items: center;

			.iconfont {
				color: #eb4450;
				margin: 0 30rpx;
			}

			.account-btn {
				width: 230rpx;
				height: 98rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				background-color: #eb4450;
			}

			.select-all {
				flex: 1;
				display: flex;
				align-items: center;

				.price-wrapper {
					display: flex;
					flex: 1;
					justify-content: flex-end;
					align-items: center;
				}
			}

			.price {
				margin-right: 20rpx;

				.num {
					color: #eb4450;
				}

				.info {
					color: #999;
				}
			}
		}
	}
</style>

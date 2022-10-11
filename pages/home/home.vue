<template>
	<view class="home-container">
		<view class="search-box" focus :class="{focus:isFocus}">
				<input @focus="isFocus=true" @blur='isFocus=false' type="text" placeholder="搜索"/>
				<icon type="search" size="20"></icon>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFocus:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.home-container{
		.search-box{
			background-color: #fe2c4b;
			padding: 20rpx;
			input{
				background-color: white;
				padding-left: 50%;
				border-radius: 10rpx;
				transition: .3s;
			}
			icon{
				position: absolute;
				top:25rpx;
				left:43%;
				transition: .3s;
			}
			//当search-box有focus的时候input和icon生效
			&.focus{
				input{
					padding-left: 60rpx;
				}
				icon{
					left:2%
				}
			}
		}
	}
</style>

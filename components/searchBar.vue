<template>
	<view class="search-box" focus :class="{focus:isFocus}">
		<input @focus="isFocus=true" @blur='isFocus=false' type="text" placeholder="搜索" />
		<icon type="search" size="20"></icon>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isFocus: false,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
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
	
</style>
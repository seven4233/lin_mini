
<script setup>
	import Bank from './components/bank.vue'
	const search = ()=>{
		uni.showToast({
			title:"搜索中"
		})
	} 
	
</script>
<template>
  <view class="page">
            <div class="search">
				<uni-search-bar class="uni-mt-10" radius="5" placeholder="请输入关键词搜索" clearButton="auto" cancelButton="none" @confirm="search" />
				<view class="search-history">
					  <u-tag text="标签" plain size="mini" shape="circle"  closable></u-tag>
					  <u-tag text="标签" plain size="mini" shape="circle"  closable></u-tag>
				</view>
            </div>
  </view>
</template>

<style lang="less" scoped>
	
	.page {
		
		.search{
			
			.search-history{
				display: flex;
				padding: 0 25rpx 0;
			}
		}
	}
</style>


<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import {
		getFileListAPI
	} from '../../src/services/file';

	let fileList = ref()

	onMounted(() => {
		getFileListAPI().then(res => {
			console.log(res);
			fileList.value = res.result
		})
	})

	const success = async ({
		tempFiles
	}) => {
		uni.showToast({
			title: `${tempFiles[0]?.name} 上传成功`,
			icon: 'none'
		})
	}



	// 上传文件
	const selectedAvatar = async (chooseImageRes) => {
		const tempFilePaths = chooseImageRes.tempFilePaths;
		const fileInfo = chooseImageRes.tempFiles[0].file


		console.log(tempFilePaths[0]);
		uni.uploadFile({
			url: '/file',
			filePath: tempFilePaths[0],
			name: 'file',

			formData: {
				'info': JSON.stringify(fileInfo)
			},
			success: (uploadFileRes) => {
				const resObj = JSON.parse(uploadFileRes?.data)
				console.log(resObj);
				// 获取文件列表
				getFileListAPI().then(res => {
					fileList.value = res.result
				})
			}
		})

	}
	// 获取上传进度
	function progress(e) {
		uni.showLoading({
			title: `上传中 ${e.progress}%`,
			mask: true
		});
		console.log('上传进度：', e)
	}
	const thumbUrl = "https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/word.png"
	
	
	const download = (url)=>{
		const downloadTask = uni.downloadFile({
			url, //仅为示例，并非真实的资源
			success: (res) => {
				if (res.statusCode === 200) {
					console.log('下载成功');
				}
			}
		});
	}
</script>

<template>

	<view class="file">
		<uni-file-picker mode="grid"  @success="success" @progress="progress" limit="1"
			file-mediatype="all" title="每次只能选择一个文件" @select="selectedAvatar">
			<button>点击上传文件</button>
		</uni-file-picker>

		
		<uni-section title="文件列表" type="line"></uni-section>
		<uni-list>
			<uni-list-item v-for="item in fileList" :key="item.id" showArrow :thumb="thumbUrl">
				<template v-slot:body>
					<text @click="download(item.url)"  >{{item.name}}</text>
				</template>
			</uni-list-item>
		</uni-list>

	</view>
</template>

<style lang="scss" scoped>
	.file {}
</style>
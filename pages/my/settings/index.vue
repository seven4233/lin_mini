<script setup >
import { ref } from 'vue'
import { updateAvatarAPI, updateUserInfoAPI } from '../../../src/services/user';
import { useUserStore } from '../../../src/store/user';

const userStore = useUserStore()

const formData = ref({
  account: userStore?.userinfo?.account,
  nickname: userStore?.userinfo?.nickname,
  email: userStore?.userinfo?.email,
  sign: userStore?.userinfo?.sign,
  avatar: userStore?.userinfo?.avatar
})
const avatarObj = ref({
	url: formData.value.avatar,
})
const formRef = ref()
const rules = {
  // 对name字段进行必填验证
  name: {
    rules: [
      {
        required: true,
        errorMessage: '请输入姓名',
      },
      {
        minLength: 3,
        maxLength: 5,
        errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
      },
    ],
  },
  // 对email字段进行必填验证
  email: {
    rules: [
      {
        format: 'email',
        errorMessage: '请输入正确的邮箱地址',
      },
    ],
  },
}

const selectedAvatar  =async (chooseImageRes) =>{
	const tempFilePaths = chooseImageRes.tempFilePaths;
	uni.uploadFile({
		url: '/user/avatar',
		filePath: tempFilePaths[0],
		name:'file',
		success: (uploadFileRes) => {
			 const resObj = JSON.parse(uploadFileRes?.data)
			 console.log(resObj);
			formData.value.avatar = resObj.result
		}
		
		
	})
	// let res = await updateAvatarAPI(f)
	// console.log(res);
}
const submit = () => {
  formRef.value
    .validate()
    .then( async(res) => {
      console.log('表单数据信息：', res)
	  let r = await updateUserInfoAPI(res)
	  if(r.code === 0) {
		  uni.showToast({
		  	title: r.message || "操作成功"
		  })
		  userStore.refreshUserInfo()
		  
	  }
	  console.log(r);
	  
    })
    .catch((err) => {
      console.log('表单错误信息：', err)
    })
}
</script>

<template>
	
  <view class="settings">
   
      <view class="form">
        <!-- 基础表单校验 -->
        <uni-forms ref="formRef" :rules="rules" :modelValue="formData">
			<uni-forms-item label="账号"  >
			  <uni-easyinput disabled v-model="formData.account" placeholder="请输入昵称" />
			</uni-forms-item>
          <uni-forms-item label="昵称" required name="nickname">
            <uni-easyinput v-model="formData.nickname" placeholder="请输入昵称" />
          </uni-forms-item>
          <uni-forms-item label="邮箱" required name="email">
            <uni-easyinput v-model="formData.email" placeholder="请输入邮箱" />
          </uni-forms-item>
          <uni-forms-item label="个性签名" name="sign">
            <uni-easyinput
              type="textarea"
              v-model="formData.sign"
              placeholder="请输入个性签名"
            />
          </uni-forms-item>
		  <uni-forms-item label="头像" required name="avatar">
		  	<uni-file-picker
		  		disable-preview
		  		:del-icon="false"
		  		return-type="object"
		  		@select="selectedAvatar"
		  		v-model="avatarObj"
				
		  	>
		  	</uni-file-picker>
		  </uni-forms-item>
        </uni-forms>
	
		<button type="primary" @click="submit">提交</button>
		
      </view>
  </view>
</template>

<style lang="less" scoped>
	.settings {
		.form{
			padding: 20rpx 30rpx;
		}
	}

</style>


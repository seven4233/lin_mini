

<script setup >
import { onMounted, ref } from 'vue'
import { loginAPI } from '@/src/services/login.js'
import { useUserStore } from '@/src/store/user.js'
import lin_modal from '@/src/components/lin_modal.vue'
const userStore = useUserStore()

onMounted(()=>{
	const token = userStore?.userinfo?.token
	if(token){
		uni.switchTab({
			url:'/pages/index/index'
		})
		uni.showToast({
			title:"已登录，正在跳转",
			
		})
	}
})
const closeFn = () => {
  showDialog.value = false
}
const showDialog = ref(false)

const form = ref({
  account: '15860181568',
  password: '123aaa',
})
const login = async () => {
  let res = await loginAPI(form.value)
  console.log(res)
  //登录成功情况
  if (res.code === 0) {


    // 存
    res.result.token = res.token
    userStore.setUserinfo(res.result)
    // 跳转
    uni.switchTab({ url: '/pages/index/index' })
	
	// 提示
	uni.showToast({
	  title: res.message,
	  icon: 'success',
	  mask: true,
	})
  }
}

const showType = ref('')
const showProtocol = (type) => {
  if (type === 'privacy') {
    showDialog.value = true
    showType.value = '隐私协议'
  } else if (type === 'user') {
    showDialog.value = true
    showType.value = '用户协议'
  }
}
</script>

<template>
  <lin_modal v-if="showDialog" :type="showType" :close-fn="closeFn" />

  <view class="viewport">
    <view class="logo">
      <image src="/static/images/avatar.jpg"></image>
      <!-- <view class="title">夜深人静刷题</view> -->
    </view>
    <view class="login">
      <!-- 网页端表单登录 -->
      <input class="input" type="text" placeholder="请输入用户名/手机号码" v-model="form.account" />
      <input class="input" type="text" password placeholder="请输入密码" v-model="form.password" />
      <button class="button phone" @click="login">登录</button>

      <view class="extra">
        <view class="caption">
          <text>没有账号?</text>
        </view>
        <!-- <button size="default" class="register_btn" type="primary">点击注册</button> -->
      </view>
      <view class="tips"
        >登录/注册即视为你同意 <text @click="showProtocol('privacy')">《隐私协议》</text>和<text
          @click="showProtocol('user')"
          >《用户协议》</text
        ></view
      >
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;
  image {
    border-radius: 50%;
    width: 220rpx;
    height: 220rpx;
    margin-top: 10vh;
  }
  .title {
    margin-top: 14rpx;
    color: #444;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    border: 1px solid #ddd;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;
    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: #28bb9c;
  }

  .wechat {
    background-color: #06c05f;
  }

  .extra {
    flex: 1;
    padding: 70rpx 70rpx 0;
    .caption {
      width: 440rpx;
      line-height: 1;
      border-top: 1rpx solid #ddd;
      font-size: 26rpx;
      color: #999;
      position: relative;
      text {
        transform: translate(-40%);
        background-color: #fff;
        position: absolute;
        top: -12rpx;
        left: 50%;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;
      button {
        padding: 0;
        background-color: transparent;
      }
    }
    .register_btn {
      margin-top: 30rpx;
    }

    .icon {
      font-size: 24rpx;
      color: #444;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }
    .icon-weixin::before {
      border-color: #06c05f;
      color: #06c05f;
    }
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #999;
  text-align: center;
  text {
    color: blue;
  }
}
</style>

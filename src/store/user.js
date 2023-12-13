import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfoAPI } from '../services/user'

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const userinfo = ref()

	const refreshUserInfo = async()=>{
	  let res = await getUserInfoAPI()
	  userinfo.value = {...userinfo.value, ...res}
}
    // 保存用户信息，登录时使用
    const setUserinfo = (val) => {
      userinfo.value = val
    }

    // 清理会员信息，退出时使用
    const clearUserinfo = () => {
      userinfo.value = undefined
    }
	

    // 记得 return
    return {
      userinfo,
      setUserinfo,
      clearUserinfo,
	  refreshUserInfo
    }
  },
  // TODO: 持久化
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value) // [!code warning]
        },
        getItem(key) {
          return uni.getStorageSync(key) // [!code warning]
        },
      },
    },
  },
)

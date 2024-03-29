// src/utils/http.ts

import { useUserStore } from '@/src/store/user.js'

// 请求基地址
// const baseURL = 'http://localhost:3000'
const baseURL = 'https://www.iccmsm.com'

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2.  请求超时 
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      'source-client': 'miniapp',
      ...options.header,
    }
    // 4. 添加 token 请求头标识
    const userStore = useUserStore()
    const token = userStore.userinfo?.token
    if (token) {
      options.header.Authorization = token
    }else {
		// uni.navigateTo({
		// 	url: '/pages/login/login',
		// })
	}
  },
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)


// 2.2 添加类型，支持泛型
export const http = (options) => {
  // 1. 返回 Promise 对象
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data)
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
		  console.log('unauthorization');
	
          const userStore = useUserStore()
          userStore.clearUserinfo()
       
          reject(res)
	
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          uni.showToast({
            icon: 'error',
            title: res.data.message || '请求错误',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

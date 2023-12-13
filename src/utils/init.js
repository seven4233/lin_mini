import { useUserStore } from "../store/user";

// 在main.js或者一个初始化脚本中设置
function myNavigate(url, options) {
    // 这里可以添加你的拦截逻辑
    // 比如检查用户是否登录，或者记录页面访问数据
	const userStore = useUserStore()
	const token = userStore.userinfo?.token
    if (!token) {
        // 重定向到登录页面
        uni.navigateTo({ url: '/pages/login/login' });
    } else {
        // 正常跳转到目标页面
        uni.navigateTo({ url: url, ...options });
    }
}

// 重写全局的 uni.navigateTo 方法
uni.navigateTo = myNavigate;


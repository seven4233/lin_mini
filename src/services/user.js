import { http } from "../utils/http";



//获取用户信息
export async function getUserInfoAPI() {
  return http({url:'/user/getUserInfo', method:'GET'})
}

// 更新用户信息
export async function updateUserInfoAPI(userToUpdate) {
  return http({
	  url:'/user/update',
	  method:'PUT',
	  data:userToUpdate
  })
}

// 上传头像
export async function updateAvatarAPI(file, ) {
  return http( { url: '/user/avatar',  data:file , method:'POST'})
}
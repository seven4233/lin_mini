import { http } from "../utils/http";



// 获取文件列表
export async function getFileListAPI() {
  return http({url:'/file', method:'GET'})
}

// 上传文件
export async function createFileAPI(file) {
  return http({url:'/file', method:'POST', data:file})
}
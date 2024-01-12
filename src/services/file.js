import { http } from "../utils/http";




export async function getFileListAPI() {
  return http({url:'/file', method:'GET'})
}

export async function createFileAPI(file) {
  return http({url:'/file', method:'POST', data:file})
}
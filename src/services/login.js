import { http } from '../utils/http.js'


export const loginAPI = (data) => {
  return http({
    method: 'POST',
    url: '/user/login',
    data,
  })
}

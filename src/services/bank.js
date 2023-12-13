import {http} from '../utils/http.js'



// 获取题库列表  bank
export function getBankListAPI() {
  return http({
    method: 'GET',
    url: '/question/bank',
  })
}

// 获取分类信息
export function getSortInfoAPI(bankId) {
  return http({ method: 'GET', url: `/question/${bankId}/sort` })
}

// 获取单选题列表
export function getSingleListAPI(bankId) {
  return http({ method: 'GET', url: `/question/${bankId}/single` })
}

// 提交題目
export function submitQuestionAPI(params) {
  return http({ url: `/question/finish`, method: 'POST', data: params })
}

import request from '/src/utils/request'

export function getCurrentUser() {
  return request.get('/sysUserService/getCurrentUser')
}


export function queryByCondition(data) {
  return request.get('/sysUserService/queryByCondition',{params:data})
}
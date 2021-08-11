import request from '/src/utils/request'

export function getCurrentUser() {
  return request.get('/sysUserService/getCurrentUser')
}

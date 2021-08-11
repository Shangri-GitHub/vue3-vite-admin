import request from '/src/utils/request'

export function captcha() {
  return request.get('/loginService/captcha')
}
export function login(data) {
  return request.post('/loginService/login', data)
}

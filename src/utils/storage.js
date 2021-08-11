import Cookies from 'js-cookie'
//docs https://www.npmjs.com/package/js-cookie

const KEY_PREFIX = 'YUAN-'
const Authorization = 'Authorization'

export function getToken() {
  return Cookies.get(Authorization)
}

export function setToken(value) {
  Cookies.set(Authorization, value)
}

export function removeToken() {
  return Cookies.remove(Authorization)
}

export function getCookies(key) {
  return Cookies.get(key)
}

export function setCookies(key, value) {
  Cookies.set(key, value)
}

export function removeCookies(key) {
  Cookies.set(key)
}

export function saveSetting(key, val) {
  localStorage.setItem(KEY_PREFIX + key, val)
}

// 从localStorage里那的东西是字符串要手动转
export function getSetting(key, need, defaultValue = null) {
  let item = localStorage.getItem(KEY_PREFIX + key)
  if (need === 'int') {
    item = Number.parseInt(item)
    return Number.isInteger(item) ? item : defaultValue
  } else if (need === 'bool') {
    item = JSON.parse(item)
    return item === true || item === false ? item : defaultValue
  }
  return item
}

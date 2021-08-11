<template>
  <div class="login-container">
    <div class="login-form">
      <el-form
        ref="loginFormRef"
        :model="form"
        :rules="loginRules"
        label-width="80px"
      >
        <el-form-item label="账号:" size="small" prop="username">
          <el-input
            placeholder="用户名/邮箱"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码:" size="small" prop="password">
          <!--       :type="showPassword ? '' : 'password'"   -->
          <el-input placeholder="请输入密码" v-model="form.password">
            <template #suffix>
              <i @click="showPasswordToggle" class="el-icon-view"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码:" size="small" prop="code">
          <div style="display: flex">
            <el-input placeholder="请输入验证码" v-model="form.code"></el-input>
            <el-image
              style="width: 100px; height: 30px"
              @click="refreshCode"
              :src="imgSrc"
            ></el-image>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button size="small" type="primary" @click="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { captcha, login } from '@/api/loginService'
import { getCurrentUser } from '@/api/sysUserService'
import { reactive, ref, onMounted } from 'vue'

import router from '/src/router'
import { login as userLogin } from '../../store/user'
import { setToken, removeToken } from '../../utils/storage'

export default {
  name: 'login',
  setup() {
    onMounted(() => {
      // 移除token
      removeToken()
      // refreshCode();
    })
    const showPassword = ref(false)
    const imgSrc = ref('')
    const uuid = ref('')
    // el-form的引用
    let loginFormRef = ref(null)
    // 登录表单校验
    const loginRules = {
      username: [{ required: true, message: '用户名不能为空' }],
      password: [{ required: true, message: '密码不能为空' }],
      code: [{ required: true, message: '验证码不能为空' }],
    }
    const form = reactive({
      username: 'admin',
      password: '111111',
      code: '1234',
    })

    function refreshCode() {
      // 验证码
      captcha().then((res) => {
        if (res.code === 0) {
          imgSrc.value = res.data.imageBase64
          uuid.value = res.data.uuid
        }
      })
    }

    function showPasswordToggle() {
      showPassword.value = !showPassword.value
    }

    // 点击登录按钮调用的函数
    function handleLogin() {
      loginFormRef.value.validate((valid) => {
        if (valid) {
          form.codeId = uuid.value
          // 表单校验通过，发起ajax请求然后保存必要的token、roles最后路由跳转
          login(form).then((res) => {
            setToken(res.data.token)
            // getCurrentUser().then((res) => {
            //
            // })
            router.push({
              path: router.currentRoute.value.query.redirect || '/',
            })
          })
        } else {
          console.log('login fail because ', valid)
          return false
        }
      })
    }

    return {
      handleLogin,
      showPasswordToggle,
      showPassword,
      form,
      imgSrc,
      loginRules,
      refreshCode,
      loginFormRef,
      // ...useLogin() /* 表单操作相关逻辑 */,
    }
  },
}
</script>

<style scoped>
.login-container {
  background: url(../../assets/background.jpg) 50% no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.login-form {
  width: 300px;
  height: 200px;
  position: absolute;
  margin: auto;
  top: 20%;
  right: 0;
  left: 0;
}

:deep(.el-form-item__label) {
  color: white;
}
</style>

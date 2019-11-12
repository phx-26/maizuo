<template>
  <div class="page-login">
<!-- 一级路由页面 登录 -->
    <h1>登录</h1>
    <input type="text" placeholder="用户名">
    <input type="password" placeholder="密码">
    <button @click="handleLogin">点我就登陆成功</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleLogin () {
      window.localStorage.setItem(
        'userInfo',
        JSON.stringify({ username: '张三' })
      )
      let redirect = this.$route.query.redirect || '/films'
      this.$router.replace(redirect)
    }
  }
}
</script>

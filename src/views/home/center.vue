<template>
  <div class="page-center">
<!-- 二级路由页面 我的页面 -->
    <h1>个人中心页</h1>
    <p v-if="userInfo.username">{{ userInfo.username }}</p>
    <router-link to="/login" v-else>去登陆</router-link>
    <hr />
    <router-link tag="li" to="/money">余额</router-link>
    <router-link tag="li" to="/card">卡劵页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Center',
  data () {
    let userInfo = window.localStorage.getItem('userInfo')
    return {
      userInfo: userInfo ? JSON.parse(window.localStorage.getItem('userInfo')) : {}
    }
  }
}
</script>

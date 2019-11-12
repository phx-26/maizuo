<template>
  <div class="page-films">
<!-- 二级路由页面 影片列表页 -->
    <h1>影片列表</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Films',
  created () {
    // fetch('http://localhost:3000/posts', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title: '沃德天',
    //     price: 10
    //   })
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result)
    //   })

    // axios.get('http://localhost:3000/posts').then(response => {
    //   console.log(response)
    //   let result = response.data
    //   console.log(result)
    // })
    // axios.get('http://localhost:3000/posts', {
    //   params: {
    //     title_like: '沃'
    //   }
    // }).then(response => {
    //   console.log(response.data)
    // })
  }
}
</script>

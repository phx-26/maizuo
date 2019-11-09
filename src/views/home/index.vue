<template>
  <div class="page-home">
<!-- 一级路由页面 主页 -->
<!--  二级路由页面坑 -->
    <router-view></router-view>

    <ul class="navbar">
      <router-link tag="li" to="/films">
        <i class="iconfont icongongnengdingyi"></i>
        <span>电影</span>
      </router-link>
      <router-link tag="li" to="/cinemas">
        <i class="iconfont iconguanfangbanben"></i>
        <span>影院</span>
      </router-link>
      <router-link tag="li" to="/center">
        <i class="iconfont iconmenu"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../../assets/styles/common/mixins.scss';

.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }

  .navbar{
    @include border-top;
    height: 50px;
    display: flex;

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 50px;
      text-align: center;
      color: #797d82;

      i {
        margin-bottom: 3px;
        font-size: 24px;
      }

      span {
        font-size: 12px;
      }
      &.router-link-active {
        color: #ff5f16;
      }
    }
  }
}

</style>

<template>
  <div class="home">
    <Loading :active.sync="isLoading"></Loading>
    <div class="nav d-flex justify-content-between align-items-center">
      <button type="button" class="btn logo">logo</button>
     <ul class="d-flex justify-content-between col-6">
      <li><router-link to="/" class="navButton">最新消息</router-link></li>
      <li><router-link to="/core" class="navButton">經營理念</router-link></li>
      <li><router-link to="/products" class="navButton">美食饗宴</router-link></li>
    </ul>
    <ul class="d-flex justify-content-between col-2">
       <li><router-link to="/admin" class="btn">管理者專用</router-link></li>
       <li><router-link to="/cart" class="navButton">購物車</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
  <div class="footer">
    <div>copyright</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  components: {

  },
  created () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    })
  }
}
</script>

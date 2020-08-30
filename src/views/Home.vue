<template>
<div class="bgc">
  <div class="home">
    <div class="darkbgc">
    <div class="container">
    <Loading :active.sync="isLoading"></Loading>
    <div class="nav d-flex justify-content-between align-items-center mb-3">
      <b-link to="/" class="logo col-4"></b-link>
     <ul class="d-flex justify-content-around col-6">
      <li><router-link to="/news" class="navButton">最新消息</router-link></li>
      <li><router-link to="/core" class="navButton">經營理念</router-link></li>
      <li><router-link to="/products" class="navButton">美食饗宴</router-link></li>
      <li><router-link to="/admin" class="btn btn-danger btn-manager">管理者專用</router-link></li>
    </ul>
    <ul class="d-flex flex-column justify-content-center align-items-center col-2">
       <li><b-button to="/cart" class="cartButton">購物車</b-button></li>
    </ul>
  </div>
  </div>
  </div>
  <router-view></router-view>
  <div class="darkbgc">
  <footer class="d-flex justify-content-between align-items-center footer container">
    <b-link to="/" class="logo col-4"></b-link>
    <ul>
      <li class="address rounded-pill bgc p-1 mb-3">餐廳地址：台北市信義區光復南路888號</li>
      <li class="address rounded-pill bgc d-flex justify-content-center p-1">本網站由ccysteak公司所有</li>
    </ul>
    <ul class="d-flex flex-column align-items-start">
    <li class="bgc rounded-pill p-1 mb-3"><a href="tel:+#" class="contact">Tel：(02)34567890</a></li>
    <li class="bgc rounded-pill p-1"><a href="mailto:#" class="contact">E-mail：ccysteak@gmail.com</a></li>
    </ul>
  </footer>
  </div>
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

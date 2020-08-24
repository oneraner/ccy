<template>
  <div class="home container">
    <Loading :active.sync="isLoading"></Loading>
    <div class="nav d-flex justify-content-between align-items-center mb-3">
      <b-link to="/" class="logo col-4"></b-link>
     <ul class="d-flex justify-content-around col-6">
      <li><router-link to="/" class="navButton">最新消息</router-link></li>
      <li><router-link to="/core" class="navButton">經營理念</router-link></li>
      <li><router-link to="/products" class="navButton">美食饗宴</router-link></li>
      <li><router-link to="/admin" class="btn btn-danger btn-manager">管理者專用</router-link></li>
    </ul>
    <ul class="d-flex flex-column justify-content-center align-items-center col-2">
       <li><router-link to="/cart" class="cartButton">購物車</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
  <footer class="d-flex justify-content-between align-items-center footer">
    <b-link to="/" class="logo col-4"></b-link>
    <ul>
      <li class="address mb-3">餐廳地址：台北市信義區光復南路888號</li>
      <li class="text-success">本網站由ccysteak公司所有</li>
    </ul>
    <ul class="d-flex flex-column align-items-start">
    <li><a href="tel:+#" class="contact">Tel：(02)34567890</a></li>
    <li><a href="mailto:#" class="contact">E-mail：ccysteak@gmail.com</a></li>
    </ul>
  </footer>
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

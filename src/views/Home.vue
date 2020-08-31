<template>
<div class="bgc">
  <div class="home">
    <div class="darkbgc">
    <div class="container">
    <Loading :active.sync="isLoading"></Loading>
    <nav class="nav d-flex justify-content-between align-items-center mb-3">
      <b-link to="/" class="logo col-12 col-xl-3"></b-link>
     <ul class="d-flex justify-content-around col-8 col-xl-7">
      <li class="col-4 col-xl-3">
        <router-link to="/news" class="iconButton noneBoard"><font-awesome-icon :icon="['fas', 'gift']" style="color:black; width:25px; height:25px;"/></router-link>
        <router-link to="/news" class="navButton nonePad">最新消息</router-link>
      </li>
      <li class="col-4 col-xl-3">
        <router-link to="/core" class="iconButton noneBoard"><font-awesome-icon :icon="['fas', 'info']" style="color:black; width:25px; height:25px;"/></router-link>
        <router-link to="/core" class="navButton nonePad">經營理念</router-link>
      </li>
      <li class="col-4 col-xl-3">
        <router-link to="/products" class="iconButton noneBoard"><font-awesome-icon :icon="['fas', 'list-alt']" style="color:black; width:25px; height:25px;"/></router-link>
        <router-link to="/products" class="navButton nonePad">美食饗宴</router-link>
      </li>
      <li><router-link to="/admin" class="btn btn-danger btn-manager nonePad">管理者專用</router-link></li>
    </ul>
    <ul class="d-flex flex-column justify-content-center align-items-center col-4 col-xl-2">
      <li>
        <b-button to="/cart" class="iconButton noneBoard"><font-awesome-icon :icon="['fas', 'shopping-cart']" style="color:black; width:32px; height:25px;"/></b-button>
        <b-button to="/cart" class="cartButton nonePad">購物車</b-button>
      </li>
    </ul>
  </nav>
  </div>
  </div>
  <router-view></router-view>
  <div class="darkbgc">
  <footer class="d-flex justify-content-between align-items-center footer container flex-wrap">
    <router-link to="/" class="logo col-12 col-xl-4"></router-link>
    <ul class="col-6 col-xl-4">
      <li class="address rounded-pill bgc p-1 mb-3">餐廳地址：台北市信義區光復南路888號</li>
      <li class="address rounded-pill bgc d-flex justify-content-center p-1">本網站由ccysteak公司所有</li>
    </ul>
    <ul class="d-flex flex-column align-items-start justify-content-end col-6 col-xl-4">
    <li class="bgc rounded-pill p-1 mb-3"><a href="tel:+#" class="contact">Tel：(02)34567890</a></li>
    <li class="bgc rounded-pill p-1"><a href="mailto:#" class="contact">E-mail：ccysteak@gmail.com</a></li>
    </ul>
  </footer>
  </div>
  </div>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
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

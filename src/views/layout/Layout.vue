<template>
<div class="bgc">
  <div class="home">
    <div class="darkbgc">
    <div class="container">
    <nav class="nav row justify-content-between align-items-center">
      <div class="col-12 col-xl-3 pl-0">
      <b-link to="/" ><div class="logo"></div></b-link>
      </div>
     <ul class="d-flex justify-content-between align-items-center col-9 col-xl-7">
      <li class="col-4 col-xl-3 center">
        <router-link to="/news" class="iconButton rounded-circle noneBoard"><font-awesome-icon :icon="['fas', 'gift']" style="color:#ddac56; width:32px; height:25px;"/></router-link>
        <router-link to="/news" class="navButton nonePad">最新消息</router-link>
      </li>
      <li class="col-4 col-xl-3 center">
        <router-link to="/core" class="iconButton rounded-circle noneBoard"><font-awesome-icon :icon="['fas', 'info']" style="color:#ddac56; width:32px; height:25px;"/></router-link>
        <router-link to="/core" class="navButton nonePad">關於CCY</router-link>
      </li>
      <li class="col-4 col-xl-3 center">
        <router-link to="/products" class="iconButton rounded-circle noneBoard"><font-awesome-icon :icon="['fas', 'list-alt']" style="color:#ddac56; width:32px; height:25px;"/></router-link>
        <router-link to="/products" class="navButton nonePad">美食饗宴</router-link>
      </li>
    </ul>
    <ul class="d-flex justify-content-center justify-content-xl-end align-items-center col-3 col-xl-2">
      <li class="hoverWhite">
        <b-button to="/cart" class="iconButton rounded-circle noneBoard"><font-awesome-icon :icon="['fas', 'shopping-cart']" style="color:#ddac56; width:32px; height:25px;"/></b-button>
        <b-button to="/cart" variant="outline-primary" class="cartButton rounded-circle nonePad"><font-awesome-icon :icon="['fas', 'shopping-cart']" style="color:#ddac56; width:32px; height:25px;"/></b-button>
      </li>
    </ul>
  </nav>
  </div>
  </div>
  <div class="min-vh">
  <router-view></router-view>
  </div>
  <div class="darkbgc">
  <footer class="container">
    <div class="row footer align-items-center pl-0">
     <b-link to="/" class="logo col-3"></b-link>
    <ul class="col-5 nonePad">
      <li class="address rounded d-flex justify-content-center p-2 mb-3 nonePad">餐廳地址：台北市信義區光復南路888號</li>
      <li class="address rounded d-flex justify-content-center p-1 nonePad">本網站由ccysteak公司所有
        <router-link to="/admin" class="btn btn-manager nonePad"><font-awesome-icon :icon="['fas', 'tools']" style="color:#ddac56; width:27px; height:20px;"/></router-link>
      </li>
    </ul>
    <ul class="col-4 nonePad pl-5">
      <li class="rounded p-1 mb-3"><a href="tel:+#" class="contact">Tel：(02)34567890</a></li>
      <li class="rounded p-1"><a href="mailto:#" class="contact">E-mail：ccysteak@gmail.com</a></li>
    </ul>
    <!-- pad footer -->
    <ul class="col-9 noneBoard d-flex justify-content-around align-items-center">
      <li class="p-1 noneBoard"><font-awesome-icon :icon="['fas', 'map']" style="color:#ddac56; width:32px; height:25px;"/></li>
      <li class="p-1 noneBoard"><a href="tel:+#" class="contact"><font-awesome-icon :icon="['fas', 'phone-alt']" style="color:#ddac56; width:32px; height:25px;"/></a></li>
      <li class="p-1 noneBoard"><a href="mailto:#" class="contact"><font-awesome-icon :icon="['fas', 'envelope']" style="color:#ddac56; width:32px; height:25px;"/></a></li>
    </ul>
     </div>
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
  data () {
    return {
      fullPage: true
    }
  }
}
</script>

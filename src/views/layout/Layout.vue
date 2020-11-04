<template>
  <div id="top" class="light-color">
    <div class="home">
      <div class="dark-color position-relative">
        <ul class="navDropdown-menu" style="display:none">
          <li class="navDropdown-item"><b-link to="/news" class="navButton" @click="navDropdown()">最新消息</b-link></li>
          <li class="navDropdown-item"><b-link to="/core" class="navButton" @click="navDropdown()">關於CCY</b-link></li>
          <li class="navDropdown-item"><b-link to="/products" class="navButton" @click="navDropdown()">美食饗宴</b-link></li>
        </ul>
        <div class="container">
          <nav class="nav row justify-content-between align-items-center">
            <!-- moilbe -->
            <div class="col-3 noneBoard">
              <b-button @click.prevent="navDropdown()">
                <font-awesome-icon :icon="['fas', 'bars']" style="color:#ddac56; width:35px; height:35px;"/>
              </b-button>
            </div>
            <!-- logo -->
            <div class="col-6 col-lg-3 pl-0 pr-0">
              <b-link to="/" class="overflow-hidden" @click="closeDropdown()"><div class="logo"></div></b-link>
            </div>
            <!-- board -->
            <ul class="d-lg-flex nonePad justify-content-between align-items-center col-lg-7">
              <li class="col-4 col-lg-3 center">
                <router-link to="/news" class="navButton">最新消息</router-link>
              </li>
              <li class="col-4 col-lg-3 center">
                <router-link to="/core" class="navButton">關於CCY</router-link>
              </li>
              <li class="col-4 col-lg-3 center">
                <router-link to="/products" class="navButton">美食饗宴</router-link>
              </li>
            </ul>
            <!-- board-cart -->
            <ul class="d-lg-flex justify-content-center justify-content-xl-end align-items-center nonePad col-3 col-lg-2">
              <li class="hoverWhite">
                <b-button to="/cart" variant="outline-primary" class="cartButton">
                  <font-awesome-icon :icon="['fas', 'shopping-cart']" style="color:#ddac56; width:30px; height:30px; border-radius:50%;"/>
                </b-button>
              </li>
            </ul>
            <!-- pad moilbe cart -->
            <ul class="d-flex d-lg-none noneBoard justify-content-center align-items-center col-3">
              <li class="hoverWhite">
                <b-button to="/cart" @click="closeDropdown()">
                   <font-awesome-icon :icon="['fas', 'shopping-cart']" style="color:#ddac56; width:35px; height:35px;"/>
                </b-button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  <div class="min-vh">
    <router-view></router-view>
  </div>
      <div class="dark-color">
        <footer class="container">
          <div class="row footer justify-content-between align-items-center pl-0">
            <ul class="col-6 col-lg-3 m-auto m-lg-0">
              <b-link to="/"><div class="logo"></div></b-link>
              <li class="address rounded p-1 nonePad d-lg-flex align-items-center">本網站由ccysteak公司所有
                <router-link to="/admin/image" class="btn btn-manager nonePad"><font-awesome-icon :icon="['fas', 'tools']" style="color:#ddac56; width:27px; height:20px;"/></router-link>
              </li>
            </ul>
            <ul class="col-4 d-lg-flex flex-column justify-content-center nonePad">
              <li class="address rounded p-1 mb-1 nonePad">餐廳地址：台北市信義區光復南路888號</li>
              <li class="rounded p-1 mb-1">
                <a href="tel:+#" class="contact">Tel：(02)34567890</a>
              </li>
              <li class="rounded p-1 mb-1">
                 <a href="mailto:#" class="contact">E-mail：ccysteak@gmail.com</a>
              </li>
            </ul>
               <!-- pad footer -->
            <ul class="col-12 noneBoard d-flex justify-content-around align-items-center">
              <li class="p-1 address rounded p-1 mb-1 noneBoard">餐廳地址：台北市信義區<br>光復南路888號</li>
              <li class="p-1 noneBoard">
                <a href="tel:+#" class="contact"><font-awesome-icon :icon="['fas', 'phone-alt']" style="color:#ddac56; width:32px; height:25px;"/></a>
              </li>
              <li class="p-1 noneBoard">
                <a href="mailto:#" class="contact"><font-awesome-icon :icon="['fas', 'envelope']" style="color:#ddac56; width:32px; height:25px;"/></a>
              </li>
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

    }
  },
  methods: {
    navDropdown () {
      const dropdown = document.querySelector('.navDropdown-menu')
      if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block'
      } else {
        dropdown.style.display = 'none'
      }
    },
    closeDropdown () {
      const dropdown = document.querySelector('.navDropdown-menu')
      dropdown.style.display = 'none'
    }
  }
}
</script>

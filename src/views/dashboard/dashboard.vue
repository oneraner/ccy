<template>
  <div class="home">
    <Loading :active.sync="isLoading"></Loading>
    <div class="nav">
     <ul class="d-flex justify-content-between">
      <li><router-link to="/">回前台</router-link></li>
      <li><router-link to="/admin/">後台首頁</router-link></li>
      <li><router-link to="/admin/products">後台products</router-link></li>
      <li><router-link to="/admin/order">order</router-link></li>
      <li><router-link to="/admin/discount">discount</router-link></li>
      <li><router-link to="/admin/image">image</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
  </div>
</template>

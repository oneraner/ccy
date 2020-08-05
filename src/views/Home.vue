<template>
  <div class="home">
    <Loading :active.sync="isLoading"></Loading>
    <div class="nav">
     <ul class="d-flex justify-content-between">
      <li><router-link to="/">index</router-link></li>
      <li><router-link to="/core">core</router-link></li>
      <li><router-link to="/products">products</router-link></li>
      <li><router-link to="/cart">cart</router-link></li>
      <li><router-link to="/admin">dashboard</router-link></li>
    </ul>
  </div>
  <router-view></router-view>
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

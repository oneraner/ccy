<template>
<div class="darkbgc ">
  <div class="container">
    <ul class="d-flex justify-content-between">
      <li><router-link class="text-primary" to="/">回前台</router-link></li>
      <li><router-link class="text-primary" to="/admin/products">後台products</router-link></li>
      <li><router-link class="text-primary" to="/admin/order">order</router-link></li>
      <li><router-link class="text-primary" to="/admin/discount">discount</router-link></li>
      <li><router-link class="text-primary" to="/admin/image">image</router-link></li>
    </ul>
  <router-view :token="token" v-if="checkSuccess"></router-view>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`
      this.$http.post(api, {
        api_token: this.token
      })
        .then((res) => {
          this.checkSuccess = true
          this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
        })
        .catch((error) => {
          if (error) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>

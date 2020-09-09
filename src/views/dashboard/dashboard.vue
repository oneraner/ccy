<template>
<div class="darkbgc">
  <div class="container">
    <ul class="d-flex justify-content-between">
      <li><router-link to="/">回前台</router-link></li>
      <li><router-link to="/admin/products">後台products</router-link></li>
      <li><router-link to="/admin/order">order</router-link></li>
      <li><router-link to="/admin/discount">discount</router-link></li>
      <li><router-link to="/admin/image">image</router-link></li>
    </ul>
  <router-view></router-view>
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
  // props:['token'],
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`
      this.$http.post(api, {
        api_token: this.token
      })
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error.response)
          this.$router.push('/login')
        })
    }
  }
}
</script>

<template>
<div>
  <b-container>
    <b-row class="justify-content-center">
      <b-form class="col-6 mt-3" @submit.prevent="signin">
        <div class="form-group">
          <label for="InputEmail">Email address</label>
          <input v-model="user.email" type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="InputPassword">Password</label>
          <input v-model="user.password" type="password" class="form-control" id="InputPassword" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-secondary mb-5">登入</button>
      </b-form>
    </b-row>
  </b-container>
</div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`
      this.$http.post(api, this.user).then((response) => {
        const { token } = response.data
        const { expired } = response.data
        document.cookie = `hextoken=${token}; expires=${new Date(expired * 1000)};`
        this.$router.push('/admin/image')
      }).catch((error) => {
        if (error) {
          this.$swal({
            icon: 'error',
            title: '登入失敗!',
            text: '請稍後再試一次',
            button: 'OK'
          })
        }
      })
    }
  }
}
</script>

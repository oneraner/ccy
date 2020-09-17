<template>
  <div class="container">
      <div class="pinkBorder row p-3">
      <div class="text-white" v-for="item in orders" :key="item.id">
          <p class="col-6">訂單編號：{{item.id}}</p>
          <p class="col-6">訂單時間：{{item.updated.datetime}}</p>
          <p class="col-6">訂單總價: {{item.amount}}</p>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: []
    }
  },
  created () {
    this.getOrder()
  },
  methods: {
    getOrder (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}`
      this.$http.get(api).then((response) => {
        this.orders = response.data.data
      }).catch((error) => {
        if (error) {
          this.$swal({
            icon: 'error',
            title: '取得訂單失敗!',
            text: '請稍後重新整理頁面',
            button: 'OK'
          })
        }
      })
    }
  }
}
</script>

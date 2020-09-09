<template>
<div class="container">
<div class="row justify-content-center">
  <div class="d-flex flex-column justify-content-center align-items-center col-10">
    <div>img</div>
    <div>九月新菜</div>
    <div>活動內容</div>
    <div>立刻訂餐</div>
  </div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      carts: {}
    }
  },
  methods: {
    orderMeal (id, quantity = 1) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: 'uAS6KZTStqFisYU99ntdY7QUv5BEtJYsC8YJcPDC2MJnVoEJOovyUEwpw2AHTBv6',
        quantity
      }
      this.$http.post(api, cart)
        .then((res) => {
          this.$router.push('/cart')
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }

}
</script>

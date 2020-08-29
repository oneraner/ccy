<template>
<div class="container">
  <div class="posterImage col-12 mb-3"></div>
  <div class="d-flex justify-content-center">
  <b-button pill variant="outline-primary" class="cartButton mb-3" @click="orderMeal">立刻訂餐</b-button>
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

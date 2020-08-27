<template>
  <div>
    <div v-for="item in products" :key="item.id" class="card">
    <img :src="item.imageUrl[0]" class="card-img-top">
    <p class="card-title">{{item.title}}</p>
    <p class="card-text">{{item.price}}</p>
    <p class="d-flex justify-content-around">
    <b-button @click="getProduct(item.id)">查看詳情</b-button>
    <b-button @click="addCart(item.id)">加入購物車</b-button>
    </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      cart: {},
      cartTotal: 0
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`
      this.$http.get(api).then((res) => {
        this.products = res.data.data
      })
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http.get(api).then((res) => {
        this.tempProduct = res.data.data
        this.tempProduct.num = 1
      })
    },
    addCart (id, quantity = 1) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.post(api, cart).then((res) => {
        console.log(res)
      }).catch(error => {
        console.log(error.response)
      })
    }
  }

}
</script>

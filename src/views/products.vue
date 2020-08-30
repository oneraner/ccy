<template>
  <div class="container">
  <loading :active.sync="isLoading"
  :color="loadColor"
  :loader="load"
  :opacity="0.5"
  :is-full-page="false"
  ></loading>
    <div class="d-flex justify-content-around flex-wrap">
    <div v-for="item in products" :key="item.id" class="card mb-3">
    <img :src="item.imageUrl[0]" class="card-img-top mb-3">
    <p class="card-title mb-3">{{item.title}}</p>
    <p class="d-flex justify-content-around">
    <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
    <span class="card-text">特價：{{item.price}}</span>
    </p>
    <p class="d-flex justify-content-around darkbgc p-3">
    <b-button @click="getProduct(item.id)">查看詳情</b-button>
    <b-button @click="addCart(item.id)">加入購物車</b-button>
    </p>
    </div>
    </div>
    <b-modal ref="productModal" :title="tempProduct.title" centered hide-footer>
      <div class="mb-3">介紹：{{tempProduct.content}}</div>
      <div class="mb-3">成分：{{tempProduct.description}}</div>
      <p class="d-flex justify-content-around">
      <span>原價：<del>{{tempProduct.origin_price}}</del></span>
      <span>特價：{{tempProduct.price}}</span>
      </p>
    </b-modal>
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data () {
    return {
      isLoading: false,
      loadColor: '#ff73b3',
      load: 'dots',
      products: [],
      tempProduct: {},
      cart: {},
      cartTotal: 0
    }
  },
  components: {
    Loading
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`
      this.$http.get(api).then((res) => {
        this.products = res.data.data
        this.isLoading = false
      }).catch(error => {
        this.isLoading = false
      })
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http.get(api).then((res) => {
        this.tempProduct = res.data.data
        this.tempProduct.num = 1
        this.$refs.productModal.show()
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

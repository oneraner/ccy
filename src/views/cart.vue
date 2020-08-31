<template>
<div class="container">
  <loading :active.sync="isLoading"
  :color="loadColor"
  :loader="load"
  :opacity="0.5"
  ></loading>
    <div class="row justify-content-center">
    <div class="d-flex justify-content-between flex-wrap col-11 mb-3">
         <div class="card mb-3">
          <img :src="products[2].imageUrl[0]" class="card-img-top mb-3">
          <p class="card-title mb-3">{{products[2].title}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{products[2].origin_price}}</del></span>
            <span class="card-text">特價：{{products[2].price}}</span>
          </p>
          <p class="d-flex justify-content-around darkbgc p-3">
            <b-button @click="getProduct(products[2].id)">查看詳情</b-button>
            <b-button @click="addCart(products[2].id)">加入購物車</b-button>
          </p>
        </div>
        <div class="card mb-3">
          <img :src="products[3].imageUrl[0]" class="card-img-top mb-3">
          <p class="card-title mb-3">{{products[3].title}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{products[3].origin_price}}</del></span>
            <span class="card-text">特價：{{products[3].price}}</span>
          </p>
          <p class="d-flex justify-content-around darkbgc p-3">
            <b-button @click="getProduct(products[3].id)">查看詳情</b-button>
            <b-button @click="addCart(products[3].id)">加入購物車</b-button>
          </p>
        </div>
         <div class="card mb-3">
          <img :src="products[5].imageUrl[0]" class="card-img-top mb-3">
          <p class="card-title mb-3">{{products[5].title}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{products[5].origin_price}}</del></span>
            <span class="card-text">特價：{{products[5].price}}</span>
          </p>
          <p class="d-flex justify-content-around darkbgc p-3">
            <b-button @click="getProduct(products[5].id)">查看詳情</b-button>
            <b-button @click="addCart(products[5].id)">加入購物車</b-button>
          </p>
        </div>
    </div>
    </div>
    <table class="table col-11 m-auto">
        <thead>
            <th scope="col">從購物車移除</th>
            <th scope="col" class="d-flex justify-content-center">餐點</th>
            <th scope="col">數量</th>
            <th scope="col">單價</th>
            <th scope="col">總價</th>
        </thead>
        <tbody>
            <tr v-for="item in carts" :key="item.id">
                <td align="center"><b-button fill class="pinkBorder" @click="deleteCart(item)"><font-awesome-icon :icon="['fas', 'trash-alt']"/></b-button></td>
                <td>{{item.product.title}}</td>
                <td>
                  <b-form-spinbutton  v-model="item.quantity" min="1" max="100" @change="updateTotal(item.product.id, item.quantity)"></b-form-spinbutton>
                </td>
                <td>{{item.product.price}}</td>
                <td>{{item.product.price * item.quantity}}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>總金額：</td>
              <td><span class="underLine">{{cartTotal}}</span></td>
              <td><b-button pill to="/order" variant="outline-primary" class="cartbutton">結帳</b-button></td>
            </tr>
        </tbody>
    </table>
  <b-modal ref="productModal" :title="tempProduct.title" centered hide-footer>
      <div class="mb-3">介紹：{{tempProduct.content}}</div>
      <div class="mb-3">成分：{{tempProduct.description}}</div>
      <p class="d-flex justify-content-around mb-0">
      <span>原價：<del>{{tempProduct.origin_price}}</del></span>
      <span>特價：{{tempProduct.price}}</span>
      </p>
  </b-modal>
</div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default {
  data () {
    return {
      isLoading: false,
      loadColor: '#ff73b3',
      load: 'dots',
      products: [],
      carts: {},
      cartTotal: 0,
      tempProduct: {
        num: 0,
        quantity: 1
      }
    }
  },
  components: {
    Loading
  },
  created () {
    this.getProducts()
    this.getCart()
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`
      this.$http.get(api).then((res) => {
        this.products = res.data.data
        this.isLoading = false
      }).catch(error => {
        console.log(error.response)
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
    getCart () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((res) => {
        this.carts = res.data.data
        this.updateTotal()
        this.isLoading = false
      }).catch(error => {
        this.isLoading = false
      })
    },
    updateTotal (id, num) {
      this.isLoading = true
      this.cartTotal = 0
      this.carts.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity
      })
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity: num
      }
      this.$http.patch(api, cart)
        .then((res) => {
          this.isLoading = false
        })
        .catch(error => {
          this.isLoading = false
        })
    },
    updateQuantity (id, quantity) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((res) => {
        this.carts = res.data.data
        this.updateTotal()
      })
    },
    addCart (id, quantity = 1) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.post(api, cart)
        .then((res) => {
          this.getCart()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    deleteCart (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${item.product.id}`
      console.log(item.product.id)
      this.$http.delete(api).then((response) => {
        console.log(response)
        this.getCart()
      }).catch(error => {
        this.isLoading = false
      })
    }
  }

}
</script>

<template>
<div class="container">
  <Loading :active.sync="isLoading">
    <div class="loadingSet d-flex justify-content-center align-items-center min-vh">
      <div class="loadingio-spinner-spinner-jz9qo78s5j"><div class="ldio-9d27yb1g2eu">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div></div>
    </div>
  </Loading>
  <div class="row justify-content-around flex-wrap">
  <div class="menuTitle col-8 d-flex justify-content-center mb-3">我的購物車</div>
    <table class="table col-11 m-auto">
        <thead>
            <th style="text-align:center;">從購物車移除</th>
            <th style="text-align:center;">餐點</th>
            <th style="text-align:center;">數量</th>
            <th style="text-align:center;">單價</th>
            <th style="text-align:center;">總價</th>
        </thead>
        <tbody>
            <tr v-for="item in carts" :key="item.id">
                <td style="text-align:center;"><b-button fill class="pinkBorder" @click.prevent="deleteCart(item)"><font-awesome-icon :icon="['fas', 'trash-alt']"/></b-button></td>
                <td style="text-align:center;">{{item.product.title}}</td>
                <td>
                  <b-form-spinbutton  v-model="item.quantity" min="1" max="100" @change="updateTotal(item.product.id, item.quantity)"></b-form-spinbutton>
                </td>
                <td style="text-align:center;">{{item.product.price}}</td>
                <td style="text-align:center;">{{item.product.price * item.quantity}}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>總金額：</td>
              <td style="text-align:center;"><span class="underLine">{{cartTotal}}</span></td>
              <td style="text-align:center;" v-if="carts.length > 0"><b-button pill size="lg" variant="secondary" class="cartbutton" to="/order">結帳</b-button></td>
              <td style="text-align:center;" v-else><b-button pill size="lg" variant="secondary" class="cartbutton" to="/products">返回購物</b-button></td>
            </tr>
        </tbody>
    </table>
  </div>
   <div class="row justify-content-around flex-wrap">
   <div class="menuTitle col-8 d-flex justify-content-center mb-3">本日優惠</div>
    <div v-for="item in entree" :key="item.id" class="customCard d-flex justify-content-start mb-3">
      <div class="col-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden">
        <img :src="item.imageUrl[0]" class="card-img">
      </div>
      <div class="custom-cardright col-6 bg-white">
        <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
        <p class="custom-cardbody">{{item.content}}</p>
        <p class="d-flex justify-content-around">
          <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
          <span class="card-text">特價：{{item.price}}</span>
        </p>
        <p class="d-flex justify-content-around">
          <b-button @click.prevent="getProduct(item.id)">查看詳情</b-button>
          <b-button @click.prevent="addCart(item.id)">加入購物車</b-button>
        </p>
      </div>
    </div>
  </div>
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      entree: [],
      carts: {},
      cartTotal: 0,
      tempProduct: {
        num: 0,
        quantity: 1
      }
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`
      this.$http.get(api).then((res) => {
        this.products = res.data.data
        const entree = this.products.filter(function (item, index, array) {
          return item.category === '前菜'
        })
        this.entree = entree
      }).catch((error) => {
        if (error) {
          this.$swal({
            icon: 'error',
            title: '取得產品資料失敗!',
            text: '請重新整理頁面',
            button: 'OK'
          })
        }
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
        if (error) {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: '讀取購物車資料失敗!',
            text: '請重新整理頁面',
            button: 'OK'
          })
        }
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
        .catch((error) => {
          if (error) {
            this.isLoading = false
          }
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
          this.$swal({
            icon: 'success',
            title: '加入購物車成功!',
            text: '可以繼續選購其他商品',
            button: 'OK'
          })
        })
        .catch((error) => {
          if (error) {
            this.$swal({
              icon: 'error',
              title: '加入購物車失敗!',
              text: '請重新選購',
              button: 'OK'
            })
          }
        })
    },
    deleteCart (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${item.product.id}`
      console.log(item.product.id)
      this.$http.delete(api).then((response) => {
        this.$swal({
          icon: 'success',
          title: '刪除成功!',
          text: '可以繼續選購',
          button: 'OK'
        })
        this.getCart()
      }).catch((error) => {
        if (error) {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: '刪除商品失敗!',
            text: '請稍後再試一次',
            button: 'OK'
          })
        }
      })
    }
  }

}
</script>

<template>
<div class="container">
  <Loading :active.sync="isLoading" :is-full-page="true">
    <div class="loadingio-spinner-spinner-jz9qo78s5j"><div class="ldio-9d27yb1g2eu">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div></div></div>
  </Loading>
  <div class="row justify-content-center align-items-center flex-wrap flex-column flex-sm-row sectionSpcing">
    <div class="menuTitle col-8 d-flex justify-content-center bigtopSpacing mb-3">我的購物車</div>
      <table class="carttable table col-11 m-auto" v-if="carts.length >= 1">
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
            <td style="text-align:center;" v-if="carts.length > 0"><b-button pill variant="secondary" class="cartbutton h-100 w-75" to="/order">結帳</b-button></td>
            <td style="text-align:center;" v-else><b-button pill size="lg" variant="secondary" class="cartbutton" to="/products">返回購物</b-button></td>
          </tr>
        </tbody>
      </table>
       <!-- moilbe cart -->
      <div class="moilbe col-12 flex-column" v-if="carts.length >= 1">
        <div class="col-12 d-flex flex-column border p-3 mb-3" v-for="item in carts" :key="item.id">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="cart-title">餐點：</div>
            <div class="cart-text">{{item.product.title}}</div>
            <b-button fill class="pinkBorder" @click.prevent="deleteCart(item)"><font-awesome-icon :icon="['fas', 'trash-alt']"/></b-button>
          </div>
          <div class="mb-3">
             <b-form-spinbutton  v-model="item.quantity" min="1" max="100" @change="updateTotal(item.product.id, item.quantity)"></b-form-spinbutton>
          </div>
          <div class="d-flex justify-content-between">
            <div>單價：{{item.product.price}}</div>
            <div>總價：{{item.product.price * item.quantity}}</div>
          </div>
        </div>
        <div class="d-flex justify-content-between">總金額：<span class="underLine">{{cartTotal}}</span><b-button pill variant="secondary" class="cartbutton w-50" to="/order">結帳</b-button></div>
      </div>
    <div class="col-11 d-flex justify-content-center align-items-center flex-column pl-5 pr-5 pl-sm-3 pr-sm-3" v-if="carts.length < 1">
      <h3 class="mb-3">購物車空的喔，看看我們的菜單吧！</h3>
      <p class="card-text">也可以從下面立刻加購我們的優惠單品</p>
      <p>
        <b-button to="/products">去看菜單</b-button>
      </p>
    </div>
  </div>

  <div class="row justify-content-center bigbotSpacing">
    <div class="menuTitle col-8 d-flex justify-content-center mb-3">本日優惠</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
        <div v-for="item in entree" :key="item.id" class="animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3">
          <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center pl-0 pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
            <img :src="item.imageUrl[0]" class="animateimg card-img">
          </div>
          <div class="custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between" @click.prevent="getProduct(item.id)">
            <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
            <p class="custom-cardbody">{{item.content}}</p>
            <p class="d-flex justify-content-around">
              <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
              <span class="card-text">特價：{{item.price}}</span>
            </p>
            <p class="d-flex justify-content-around">
              <b-button variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
              <span onclick="event.cancelBubble = true"><b-button @click.prevent="addCart(item.id)">加入購物車</b-button></span>
            </p>
          </div>
        </div>
      </div>
    <b-modal id="productModal" ref="productModal" size="xl" centered hide-header hide-footer>
      <b-button class="xButton d-flex justify-content-center align-items-center rounded-circle position-absolute" @click="$bvModal.hide('productModal')">x</b-button>
      <div class="row justify-content-between flex-wrap mb-4">
        <div class="col-12 col-md-6">
          <b-img :src="tempProduct.imageUrl[0]" fluid class="mb-3"></b-img>
        </div>
        <div class="col-12 col-md-6">
          <div class="activityTitle d-flex mb-3">{{tempProduct.title}}</div>
          <div class="d-flex justify-content-center mb-3">{{tempProduct.description}}</div>
            <p class="d-flex justify-content-center">
              各式料理皆可以優惠價線上點餐，貨到付款，或是訂位在CCY Steak店內享有優惠套餐。
            </p>
            <p class="d-flex justify-content-end mb-4">
              <span class="mr-3"><small>原價：<del>{{tempProduct.origin_price}}</del></small></span>
              <span>特價：{{tempProduct.price}}</span>
            </p>
            <div class="col-12 d-flex justify-content-between">
              <div class="numberButton d-flex">
                <b-button class="addButton" @click.prevent="updateSubtract()">-</b-button>
                <div class="productNum">{{tempProduct.num}}</div>
                <b-button class="lessButton" @click.prevent="tempProduct.num ++;updateQ()">+</b-button>
              </div>
              <b-button class="modalCartbutton mr-3" @click.prevent="addCart(tempProduct.id, tempProduct.num)">加入購物車</b-button>
            </div>
         </div>
      </div>
      <div class="col-12 modalBotline mb-3"></div>
      <div class="row">
        <ul class="d-flex flex-column col-12">
          <li class="activityTitle mb-3">常見問題</li>
          <li class="q1 w-100 p-3 light-color" @click.prevent="QA1()">Q：素食者可否食用？</li>
          <li class="a1 p-3">A：CCY大部分的產品為動物製品，若需純素食品請電洽為您特製。</li>
          <li class="q2 w-100 p-3 light-color" @click.prevent="QA2()">Q：CCY如何包裝產品？</li>
          <li class="a2 p-3">A：大廚料理完放涼之後真空無菌包裝，讓您吃得安心。</li>
          <li class="q3 w-100 p-3 light-color" @click.prevent="QA3()">Q：CCY的付款方式？</li>
          <li class="a3 p-3">A：可選常見的信用卡以及行動支付。</li>
          <li class="q4 w-100 p-3 light-color" @click.prevent="QA4()">Q：CCY的送貨方式？</li>
          <li class="a4 p-3">A：與物流業者合作，可送至住家周圍的超商或直接送貨到府。</li>
        </ul>
      </div>
    </b-modal>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      entree: [],
      carts: {},
      cartTotal: 0,
      tempProduct: {
        imageUrl: [],
        num: 0
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
      if (id) {
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
              this.$swal({
                icon: 'error',
                title: '更新總價失敗!',
                text: '請再試一次',
                button: 'OK'
              })
            }
          })
      }
    },
    updateQuantity (id, quantity) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((res) => {
        this.carts = res.data.data
        this.updateTotal()
      })
        .catch((error) => {
          if (error) {
            this.$swal({
              icon: 'error',
              title: '更新數量失敗!',
              text: '請再試一次',
              button: 'OK'
            })
          }
        })
    },
    updateSubtract () {
      if (this.tempProduct.num > 1) {
        this.tempProduct.num--
        this.$forceUpdate()
      } else {
        this.$swal({
          icon: 'error',
          title: '數量不可小於1!',
          text: '請重新調整',
          button: 'OK'
        })
      }
    },
    updateQ () {
      this.$forceUpdate()
    },
    QA1 () {
      const a1 = document.querySelector('.a1')
      const a2 = document.querySelector('.a2')
      const a3 = document.querySelector('.a3')
      const a4 = document.querySelector('.a4')
      if (a1.style.display === 'none') {
        a1.style.display = 'block'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'none'
      } else {
        a1.style.display = 'none'
      }
    },
    QA2 () {
      const a1 = document.querySelector('.a1')
      const a2 = document.querySelector('.a2')
      const a3 = document.querySelector('.a3')
      const a4 = document.querySelector('.a4')
      if (a2.style.display === 'none') {
        a2.style.display = 'block'
        a1.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'none'
      } else {
        a2.style.display = 'none'
      }
    },
    QA3 () {
      const a1 = document.querySelector('.a1')
      const a2 = document.querySelector('.a2')
      const a3 = document.querySelector('.a3')
      const a4 = document.querySelector('.a4')
      if (a3.style.display === 'none') {
        a3.style.display = 'block'
        a2.style.display = 'none'
        a1.style.display = 'none'
        a4.style.display = 'none'
      } else {
        a3.style.display = 'none'
      }
    },
    QA4 () {
      const a1 = document.querySelector('.a1')
      const a2 = document.querySelector('.a2')
      const a3 = document.querySelector('.a3')
      const a4 = document.querySelector('.a4')
      if (a4.style.display === 'none') {
        a4.style.display = 'block'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a1.style.display = 'none'
      } else {
        a4.style.display = 'none'
      }
    },
    addCart (id, quantity = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.post(api, cart)
        .then((res) => {
          this.isLoading = false
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
            this.isLoading = false
            this.$swal({
              icon: 'error',
              title: error.response.data.errors[0],
              text: '請重新選購',
              button: 'OK'
            })
          }
        })
    },
    deleteCart (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${item.product.id}`
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

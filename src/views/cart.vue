<template>
<div class="container">
    <div class="row justify-content-center">
    <div class="card-group justify-content-between col-11">
        <div class="card">
          <img class="card-img-top mb-4" :src="products[2].imageUrl[0]">
          <p class="card-title">
              {{products[2].title}}
              <span>加購價:{{products[2].price}}</span>
          </p>
          <p class="d-flex justify-content-around">
          <b-button @click="getProduct(products[2].id)">查看詳情</b-button>
          <b-button @click="addCart(products[2].id)">加入購物車</b-button>
          </p>
        </div>
        <div class="card">
          <img class="card-img-top mb-4" :src="products[3].imageUrl[0]">
          <p class="card-title">
              {{products[3].title}}
              <span>加購價:{{products[3].price}}</span>
          </p>
          <p class="d-flex justify-content-around">
          <b-button @click="getProduct(products[3].id)">查看詳情</b-button>
          <b-button @click="addCart(products[3].id)">加入購物車</b-button>
          </p>
        </div>
        <div class="card">
          <img class="card-img-top mb-4" :src="products[1].imageUrl[0]">
          <p class="card-title">
              {{products[1].title}}
              <span>加購價:{{products[1].price}}</span>
          </p>
          <p class="d-flex justify-content-around">
          <b-button @click="getProduct(products[1].id)">查看詳情</b-button>
          <b-button @click="addCart(products[1].id)">加入購物車</b-button>
          </p>
        </div>
    </div>
    </div>
    <table class="table col-11">
        <thead>
            <th>刪除</th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
            <th>總價</th>
        </thead>
        <tbody>
            <tr v-for="item in carts" :key="item.id">
                <td>刪除按鈕</td>
                <td>{{item.product.title}}</td>
                <td>
                  <b-form-spinbutton  v-model="item.quantity" min="1" max="100" @change="updateTotal()"></b-form-spinbutton>
                </td>
                <td>{{item.product.price}}</td>
                <td>{{item.product.price * item.quantity}}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>總金額</td>
              <td>{{cartTotal}}</td>
              <td>結帳按鈕</td>
            </tr>
        </tbody>

    </table>

</div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
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
      })
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http.get(api).then((res) => {
        this.tempProduct = res.data.data
        this.tempProduct.num = 1
      })
    },
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((res) => {
        this.carts = res.data.data
        this.updateTotal()
      })
    },
    updateTotal () {
      this.cartTotal = 0
      this.carts.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity
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
          getCart()
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }

}
</script>

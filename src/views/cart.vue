<template>
<div class="container">
    <div class="row justify-content-center">
    <div class="d-flex justify-content-between col-11 mb-3">
         <div class="card">
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
        <div class="card">
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
         <div class="card">
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
            <th>從購物車移除</th>
            <th>餐點</th>
            <th>數量</th>
            <th>單價</th>
            <th>總價</th>
        </thead>
        <tbody>
            <tr v-for="item in carts" :key="item.id">
                <td><b-button fill @click="deleteCart(item)">刪除按鈕</b-button></td>
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
              <td>總金額</td>
              <td>{{cartTotal}}</td>
              <td><b-button pill to="/order">結帳</b-button></td>
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
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api).then((res) => {
        this.carts = res.data.data;
        this.updateTotal();
      });
    },
    updateTotal (id, num) {
      this.cartTotal = 0
      this.carts.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity
      });
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity: num,
      };
      this.$http.patch(api, cart)
        .then((res) => {
          
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    updateQuantity (id, quantity) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(api).then((res) => {
        this.carts = res.data.data;
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
          console.log(error.response);
        });
    },
    deleteCart (item) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping/${item.product.id}`
      console.log(item.product.id)
      this.$http.delete(api).then((response) => {
        console.log(response)
        this.getCart()
      });
    },
  },

}
</script>

<template>
<div class="container">
 <loading :active.sync="isLoading"
  :color="loadColor"
  :loader="load"
  :opacity="0.5"
 ></loading>
    <div class="d-flex justify-content-center col-12">購餐明細</div>
    <table class="table col-11 m-auto">
        <thead>
            <th>餐點</th>
            <th>數量</th>
            <th>單價</th>
            <th>總價</th>
        </thead>
        <tbody>
            <tr v-for="item in carts" :key="item.id">
                <td>{{item.product.title}}</td>
                <td>
                  {{item.quantity}}
                </td>
                <td>{{item.product.price}}</td>
                <td>{{item.product.price * item.quantity}}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>總金額</td>
              <td>{{cartTotal}}</td>
            </tr>
        </tbody>
    </table>
    <div class="pinkBorder mb-3">
      <p class="d-flex justify-content-center mb-3">請填寫付款資料</p>
      <form>
        <div class="row justify-content-start mb-3">
          <div class="d-flex justify-content-between align-items-center col-3">
            <p class="mb-0">姓名：</p>
            <p class="col-8 mb-0"><b-form-input v-model="name" placeholder="請輸入姓名"></b-form-input></p>
          </div>
          <div class="d-flex justify-content-center align-items-center col-4">
            <p class="m-0">E-mail：</p>
            <p class="col-8 m-0"><b-form-input v-model="email" placeholder="請輸入電子郵件"></b-form-input></p>
          </div>
          <div class="d-flex justify-content-start align-items-center col-5">
            <p class="d-flex justify-content-between m-0">優惠券代碼：</p>
            <p class="col-7 m-0"><b-form-input v-model="coupon" placeholder="請輸入優惠券代碼"></b-form-input></p>
          </div>
        </div>
        <div class="row justify-content-start mb-3">
          <div class="d-flex justify-content-between align-items-center col-3">
            <p class="m-0">聯絡：<br>電話</p>
            <p class="col-8 m-0"><b-form-input v-model="tel" placeholder="請輸入電話"></b-form-input></p>
          </div>
          <div class="d-flex justify-content-start align-items-center col-4">
            <p class="m-0">付款方式：</p>
            <p class="col-8 m-0"><b-form-select v-model="payment" placeholder="請選擇付款方式" :options="options"></b-form-select></p>
          </div>
          <div class="d-flex justify-content-start align-items-center col-5">
             <p class="m-0">寄送地址：</p>
             <p class="col-8 m-0"><b-form-input v-model="address" placeholder="請輸入地址"></b-form-input></p>
          </div>
        </div>
        <div class="row mb-3">
        <div class="d-flex align-items-center col-7">
          <p class="m-0 mr-3">備註：</p>
          <p class="col-10 m-0"><b-form-textarea v-model="message" no-resize rows="2" placeholder="請輸入備註"></b-form-textarea></p>
        </div>
        <div class="d-flex justify-content-center align-items-center col-5">
            <b-button pill variant="outline-primary" class="cartButton" @click="postOrder">送出訂單</b-button>
        </div>

        </div>
      </form>
    </div>
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
      carts: [],
      cartTotal: 0,
      name: '',
      email: '',
      tel: '',
      address: '',
      payment: 'Credit',
      coupon: '',
      message: '',
      options: [
        { value: 'WebATM', text: 'WebATM' },
        { value: 'ATM', text: 'ATM' },
        { value: 'CVS', text: 'CVS' },
        { value: 'Barcode', text: 'Barcode' },
        { value: 'Credit', text: 'Credit' },
        { value: 'ApplePay', text: 'ApplePay' },
        { value: 'GooglePay', text: 'GooglePay' }
      ]
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((response) => {
        this.carts = response.data.data
        this.carts.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity
        })
        this.isLoading = false
      }).catch(error => {
        this.isLoading = false
      })
    },
    postOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/orders`
      const order = {
        name: this.name,
        email: this.email,
        tel: this.tel,
        address: this.address,
        payment: this.payment,
        coupon: this.coupon,
        message: this.message
      }
      this.$http.post(api, order).then((res) => {
        this.isLoading = false
        this.$router.push('/products')
      }).catch(error => {
        this.isLoading = false
      })
    }

  }

}
</script>

<style>

</style>

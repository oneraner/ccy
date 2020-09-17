<template>
<div class="container">
  <Loading :active.sync="isLoading">
      <div class="loadingio-spinner-rolling-pk2fn1fr5ha"><div class="ldio-8hp1gnnwoky">
      <div></div>
      </div></div>
  </Loading>
  <div class="row">
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
              <td>總金額：</td>
              <td><span class="underLine">{{cartTotal}}</span></td>
            </tr>
        </tbody>
    </table>
  </div>
    <div class="pinkBorder mb-3">
      <p class="d-flex justify-content-center mb-3" >請填寫付款資料</p>
      <validation-observer ref="observer">
      <b-form slot-scope="{ validate }">
        <div class="row justify-content-center align-items-center mb-3">
          <div class="d-flex justify-content-center align-items-center col-3">
            <ValidationProvider rules="required" name="姓名">
              <b-form-group slot-scope="{ valid, errors }" label="姓名：" class="m-0">
                <b-form-input
                  v-model="name" placeholder="請輸入姓名" type="text" :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
                <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div class="d-flex justify-content-center align-items-center col-3">
            <ValidationProvider rules="required|email" name="Email">
              <b-form-group slot-scope="{ valid, errors }" label="E-mail：" class="m-0">
                <b-form-input v-model="email" placeholder="請輸入電子郵件" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>
                <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div class="d-flex justify-content-start align-items-center col-4">
            <b-form-group label="優惠券代碼：" class="m-0">
              <b-form-input v-model="coupon" placeholder="請輸入優惠券代碼"></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center mb-3">
          <div class="d-flex justify-content-between align-items-center col-3">
            <ValidationProvider rules="required|numeric" name="聯絡電話">
              <b-form-group slot-scope="{ valid, errors }" label="聯絡電話：" class="m-0">
                <b-form-input v-model="tel" placeholder="請輸入電話" type="tel" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>
                <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div class="d-flex justify-content-start align-items-center col-2">
            <b-form-group label="付款方式：" class="m-0">
              <b-form-select v-model="payment" placeholder="請選擇付款方式" :options="options"></b-form-select>
            </b-form-group>
          </div>
          <div class="d-flex justify-content-start align-items-center col-5">
            <ValidationProvider rules="required" name="寄送地址">
              <b-form-group label="寄送地址：" class="m-0" slot-scope="{ valid, errors }">
                <b-form-input v-model="address" placeholder="請輸入寄送地址" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>
                <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
        </div>
        <div class="row justify-content-center mb-3">
          <b-form-group label="備註：" class="col-6 m-0">
            <b-form-textarea v-model="message" placeholder="請輸入備註" no-resize rows="2"></b-form-textarea>
          </b-form-group>
        <div class="d-flex justify-content-center align-items-center col-4">
            <b-button pill size="lg" variant="secondary" class="cartButton" @click.prevent="validate().then(postOrder)">送出訂單</b-button>
        </div>
        </div>
      </b-form>
    </validation-observer>
    </div>
</div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  data () {
    return {
      isLoading: false,
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
  components: {
    Loading,
    ValidationObserver,
    ValidationProvider
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
      }).catch((error) => {
        if (error) {
          this.isLoading = false
        }
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
        this.$swal({
          icon: 'success',
          title: '結帳成功!',
          text: '謝謝光臨!歡迎繼續選購其他商品',
          button: 'OK'
        })
      }).catch((error) => {
        if (error) {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: '結帳失敗!',
            text: '請確認資料是否正確',
            button: 'OK'
          })
        }
      })
    }
  }

}
</script>

<style>

</style>

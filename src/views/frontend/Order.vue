<template>
<div class="container">
  <Loading :active.sync="isLoading">
    <div class="loadingSet d-flex justify-content-center align-items-center min-vh">
      <div class="loadingio-spinner-spinner-jz9qo78s5j"><div class="ldio-9d27yb1g2eu">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div></div>
    </div>
  </Loading>
  <div class="row bigtopSpacing justify-content-center mb-3">
    <h1 class="menuTitle d-flex justify-content-center col-8 mb-3">購餐明細</h1>
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
    <div class="formBorder bigbotSpacing">
      <h2 class="menuTitle col-8 d-flex justify-content-center mt-3 mb-3 ml-auto mr-auto" >請填寫付款資料</h2>
      <validation-observer ref="observer">
      <b-form slot-scope="{ validate }">
        <div class="row justify-content-center align-items-center mb-3">
          <div class="d-flex justify-content-center align-items-center col-12">
            <ValidationProvider rules="required" name="姓名" class="col-6">
              <b-form-group slot-scope="{ valid, errors }" label="姓名：" class="activityTitle">
                <b-form-input
                  v-model="name" placeholder="請輸入姓名(必填)" type="text" :state="errors[0] ? false : (valid ? true : null)"
                ></b-form-input>
                <b-form-invalid-feedback class="card-text"><small>{{ errors[0] }}</small></b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div class="d-flex justify-content-center align-items-center col-12">
            <ValidationProvider rules="required|email" name="Email" class="col-6">
              <b-form-group slot-scope="{ valid, errors }" label="E-mail：" class="activityTitle">
                <b-form-input v-model="email" placeholder="請輸入電子郵件(必填)" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>
                <b-form-invalid-feedback class="card-text"><small>{{ errors[0] }}</small></b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div class="d-flex justify-content-center align-items-center col-12">
            <ValidationProvider rules="required|numeric" name="聯絡電話" class="col-6">
              <b-form-group slot-scope="{ valid, errors }" label="聯絡電話：" class="activityTitle">
                <b-form-input v-model="tel" placeholder="請輸入電話(必填)" type="tel" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>
                <b-form-invalid-feedback class="card-text"><small>{{ errors[0] }}</small></b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div class="d-flex justify-content-center align-items-center col-12">
            <b-form-group label="付款方式：" class="col-6 activityTitle">
              <b-form-select v-model="payment" placeholder="請選擇付款方式" :options="options"></b-form-select>
            </b-form-group>
          </div>
          <div class="d-flex justify-content-center align-items-center col-12">
            <ValidationProvider rules="required" name="寄送地址" class="col-6">
              <b-form-group label="寄送地址：" slot-scope="{ valid, errors }" class="activityTitle">
                <b-form-input v-model="address" placeholder="請輸入寄送地址(必填)" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>
                <b-form-invalid-feedback class="card-text"><small>{{ errors[0] }}</small></b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div class="d-flex justify-content-center align-items-center col-12">
            <b-form-group label="優惠券代碼：" class="col-6 activityTitle">
              <b-form-input v-model="coupon" placeholder="請輸入優惠券代碼(若無可不填)"></b-form-input>
            </b-form-group>
          </div>
          <div class="d-flex justify-content-center align-items-center col-12">
          <b-form-group label="備註：" class="col-6 activityTitle">
            <b-form-textarea v-model="message" placeholder="請輸入備註(若無可不填)" no-resize rows="3"></b-form-textarea>
          </b-form-group>
          </div>
        <div class="d-flex justify-content-center align-items-center col-12">
            <b-button pill size="lg" variant="secondary" class="cartButton" @click.prevent="validate().then(postOrder)">送出訂單</b-button>
        </div>
        </div>
      </b-form>
    </validation-observer>
    </div>
</div>
</template>

<script>
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
        this.$router.push('/products')
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

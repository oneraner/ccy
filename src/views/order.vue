<template>
<div class="container">
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
    <p class="d-flex justify-content-center">請填寫付款資料</p>
    <form>
        <b-form-input v-model="name" placeholder="請輸入姓名"></b-form-input>
        <b-form-input v-model="email" placeholder="請輸入電子郵件"></b-form-input>
        <b-form-input v-model="tel" placeholder="請輸入電話"></b-form-input>
        <b-form-input v-model="address" placeholder="請輸入地址"></b-form-input>
        <b-form-input v-model="payment" placeholder="請選擇付款方式"></b-form-input>
        <b-form-input v-model="coupon" placeholder="請輸入優惠券代碼"></b-form-input>
        <b-form-input v-model="message" placeholder="請輸入備註"></b-form-input>
    </form>
</div>
</template>

<script>
export default {
    data(){
        return{
            carts:[],
            cartTotal:0,
            name:'',
            email:'',
            tel:'',
            address:'',
            payment:'',
            coupon:'',
            message:'',
        };
    },
    created(){
        this.getCart();
    },
    methods:{
      getCart () {
        const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`;
        this.$http.get(api).then((res) => {
        this.carts = res.data.data;
        this.carts.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity
            });
        });
      
    },

    },

}
</script>

<style>

</style>
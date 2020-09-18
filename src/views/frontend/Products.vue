<template>
  <div class="container min-vh">
     <Loading :active.sync="isLoading">
      <div class="loadingSet d-flex justify-content-center align-items-center min-vh">
        <div class="loadingio-spinner-spinner-jz9qo78s5j"><div class="ldio-9d27yb1g2eu">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
      </div>
    </Loading>
    <div class="row bigtopSpacing bigbotSpacing">
      <div class="menuTitle col-8 ml-auto mr-auto mb-3">套餐</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in setMenu" :key="item.id" class="animateMenu customCard d-flex justify-content-start mb-3 position-relative">
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
      <div class="animate col-12 d-flex flex-column justify-content-center align-items-center bg-secondary text-primary">
        <p class="activityTitle mb-3">{{item.title}}</p>
        <p class="activityBody mb-3">特價：{{item.price}}</p>
        <p>點擊加入購物車</p>
      </div>
      </div>
      </div>
      <div class="menuTitle col-8 ml-auto mr-auto mb-3">前菜</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in entree" :key="item.id" class="animateMenu customCard d-flex justify-content-start position-relative mb-3">
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
      <div class="animate col-12 d-flex flex-column justify-content-center align-items-center bg-secondary text-primary">
        <p class="activityTitle mb-3">{{item.title}}</p>
        <p class="activityBody mb-3">特價：{{item.price}}</p>
        <p>點擊加入購物車</p>
      </div>
      </div>
      </div>
      <div class="menuTitle col-8 ml-auto mr-auto mb-3">湯</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in soup" :key="item.id" class="animateMenu customCard d-flex justify-content-start position-relative mb-3">
        <div class="custom-cardleft col-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden">
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
      <div class="animate col-12 d-flex flex-column justify-content-center align-items-center bg-secondary text-primary">
        <p class="activityTitle mb-3">{{item.title}}</p>
        <p class="activityBody mb-3">特價：{{item.price}}</p>
        <p>點擊加入購物車</p>
      </div>
      </div>
      </div>
      <div class="menuTitle col-8 ml-auto mr-auto mb-3">沙拉</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in salad" :key="item.id" class="animateMenu customCard d-flex justify-content-start position-relative mb-3">
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
      <div class="animate col-12 d-flex flex-column justify-content-center align-items-center bg-secondary text-primary">
        <p class="activityTitle mb-3">{{item.title}}</p>
        <p class="activityBody mb-3">特價：{{item.price}}</p>
        <p>點擊加入購物車</p>
      </div>
      </div>
      </div>
      <div class="menuTitle col-8 ml-auto mr-auto mb-3">主餐</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in meat" :key="item.id" class="animateMenu position-relative customCard d-flex justify-content-start mb-3">
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
      <div class="animate col-12 d-flex flex-column justify-content-center align-items-center bg-secondary text-primary">
        <p class="activityTitle mb-3">{{item.title}}</p>
        <p class="activityBody mb-3">特價：{{item.price}}</p>
        <p>點擊加入購物車</p>
      </div>
      </div>
      </div>
      <div class="menuTitle col-8 ml-auto mr-auto mb-3">甜點</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in sweets" :key="item.id" class="animateMenu position-relative customCard d-flex justify-content-start mb-3">
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
      <div class="animate col-12 d-flex flex-column justify-content-center align-items-center bg-secondary text-primary">
        <p class="activityTitle mb-3">{{item.title}}</p>
        <p class="activityBody mb-3">特價：{{item.price}}</p>
        <p>點擊加入購物車</p>
      </div>
      </div>
      </div>
      <div class="menuTitle col-8 ml-auto mr-auto mb-3">飲料</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in beverage" :key="item.id" class="animateMenu position-relative customCard d-flex justify-content-start mb-3">
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
      <div class="animate col-12 d-flex flex-column justify-content-center align-items-center bg-secondary text-primary">
        <p class="activityTitle mb-3">{{item.title}}</p>
        <p class="activityBody mb-3">特價：{{item.price}}</p>
        <p>點擊加入購物車</p>
      </div>
      </div>
      </div>
    <b-modal ref="productModal" :title="tempProduct.title" centered hide-footer>
      <b-img :src="tempProduct.imageUrl" fluid class="mb-3" ></b-img>
      <div class="mb-3">詳細介紹：</div>
      <div class="mb-3">{{tempProduct.description}}</div>
      <p>
        各式料理皆可以優惠價線上點餐，貨到付款，或是訂位在CCY Steak店內享有優惠套餐。
      </p>
      <p class="d-flex justify-content-around">
      <span>原價：<del>{{tempProduct.origin_price}}</del></span>
      <span>特價：{{tempProduct.price}}</span>
      </p>
    </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false,
      fullPage: true,
      products: [],
      setMenu: [],
      entree: [],
      salad: [],
      soup: [],
      meat: [],
      sweets: [],
      beverage: [],
      tempProduct: {},
      cart: {},
      cartTotal: 0
    }
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
        const setMenu = this.products.filter(function (item) {
          return item.category === '套餐'
        })
        const entree = this.products.filter(function (item) {
          return item.category === '前菜'
        })
        const salad = this.products.filter(function (item) {
          return item.category === '沙拉'
        })
        const soup = this.products.filter(function (item) {
          return item.category === '湯'
        })
        const meat = this.products.filter(function (item) {
          return item.category === '主餐'
        })
        const sweets = this.products.filter(function (item) {
          return item.category === '甜點'
        })
        const beverage = this.products.filter(function (item) {
          return item.category === '飲品'
        })
        this.setMenu = setMenu
        this.salad = salad
        this.soup = soup
        this.meat = meat
        this.entree = entree
        this.sweets = sweets
        this.beverage = beverage
        this.isLoading = false
      }).catch((error) => {
        if (error) {
          this.isLoading = false
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
    addCart (id, quantity = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.post(api, cart).then((res) => {
        this.isLoading = false
        this.$swal({
          icon: 'success',
          title: '加入購物車成功!',
          text: '可繼續選購其他商品',
          button: 'OK'
        })
      }).catch((error) => {
        if (error) {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: '加入購物車失敗!',
            text: '請重新選購',
            button: 'OK'
          })
        }
      })
    }
  }

}
</script>

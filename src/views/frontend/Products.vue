<template>
  <div class="container min-vh">
     <Loading :active.sync="isLoading">
      <div class="loadingSet d-flex justify-content-center align-items-center min-vh">
        <div class="loadingio-spinner-spinner-jz9qo78s5j"><div class="ldio-9d27yb1g2eu">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
      </div>
    </Loading>
    <div class="row justify-content-center bigtopSpacing bigbotSpacing">
      <div class="menuTitle col-12 mb-3">套餐</div>
      <div class="col-12 flex-wrap">
      <div v-for="item in setMenu" :key="item.id" class="animateMenu w-100 d-flex justify-content-start mb-3 overflow-hidden position-relative">
        <div class="menuimg d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
          <img :src="item.imageUrl[0]" class="animateimg card-img">
        </div>
        <div class="menu w-100 d-flex justify-content-between bg-white">
          <div class="col-3" @click.prevent="getProduct(item.id)">
            <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
            <p class="custom-cardbody">{{item.content}}</p>
            <p class="d-flex justify-content-around">
              <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
              <span class="card-text">特價：{{item.price}}</span>
            </p>
          </div>
          <div class="col-4 d-flex flex-column justify-content-around align-items-center">
            <b-button variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
            <b-button @click.prevent="addCart(item.id)">加入購物車</b-button>
          </div>
        </div>
      </div>
      </div>
      <div class="menuTitle col-12 mb-3">前菜</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in entree" :key="item.id" class="animateMenu customCard d-flex justify-content-start overflow-hidden mb-3">
        <div class="col-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
          <img :src="item.imageUrl[0]" class="animateimg card-img">
        </div>
        <div class="custom-cardright col-6 bg-white d-flex flex-column justify-content-between">
          <div @click.prevent="getProduct(item.id)">
          <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
          <p class="custom-cardbody">{{item.content}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
            <span class="card-text">特價：{{item.price}}</span>
          </p>
          </div>
          <p class="d-flex justify-content-around">
            <b-button variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
            <b-button @click.prevent="addCart(item.id)">加入購物車</b-button>
          </p>
        </div>
      </div>
      </div>
      <div class="menuTitle col-12 mb-3">湯</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in soup" :key="item.id" class="animateMenu customCard d-flex justify-content-start overflow-hidden mb-3">
        <div class="custom-cardleft col-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
          <img :src="item.imageUrl[0]" class="animateimg card-img">
        </div>
        <div class="custom-cardright col-6 bg-white d-flex flex-column justify-content-between">
          <div @click.prevent="getProduct(item.id)">
          <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
          <p class="custom-cardbody">{{item.content}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
            <span class="card-text">特價：{{item.price}}</span>
          </p>
          </div>
          <p class="d-flex justify-content-around">
            <b-button variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
            <b-button @click.prevent="addCart(item.id)">加入購物車</b-button>
          </p>
        </div>
      </div>
      </div>
      <div class="menuTitle col-12 mb-3">沙拉</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in salad" :key="item.id" class="animateMenu customCard d-flex justify-content-start overflow-hidden mb-3">
        <div class="col-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
          <img :src="item.imageUrl[0]" class="animateimg card-img">
        </div>
        <div class="custom-cardright col-6 bg-white d-flex flex-column justify-content-between">
          <div @click.prevent="getProduct(item.id)">
          <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
          <p class="custom-cardbody">{{item.content}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
            <span class="card-text">特價：{{item.price}}</span>
          </p>
          </div>
          <p class="d-flex justify-content-around">
            <b-button variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
            <b-button @click.prevent="addCart(item.id)">加入購物車</b-button>
          </p>
        </div>
      </div>
      </div>
      <div class="menuTitle col-12 mb-3">主餐</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in meat" :key="item.id" class="animateMenu customCard d-flex justify-content-start overflow-hidden mb-3">
        <div class="col-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
          <img :src="item.imageUrl[0]" class="animateimg card-img">
        </div>
        <div class="custom-cardright col-6 bg-white d-flex flex-column justify-content-between">
          <div @click.prevent="getProduct(item.id)">
          <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
          <p class="custom-cardbody">{{item.content}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
            <span class="card-text">特價：{{item.price}}</span>
          </p>
          </div>
          <p class="d-flex justify-content-around">
            <b-button variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
            <b-button @click.prevent="addCart(item.id)">加入購物車</b-button>
          </p>
        </div>
      </div>
      </div>
      <div class="menuTitle col-12 mb-3">甜點</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in sweets" :key="item.id" class="animateMenu customCard d-flex justify-content-start overflow-hidden mb-3">
        <div class="col-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
          <img :src="item.imageUrl[0]" class="animateimg card-img">
        </div>
        <div class="custom-cardright col-6 bg-white d-flex flex-column justify-content-between">
          <div @click.prevent="getProduct(item.id)">
          <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
          <p class="custom-cardbody">{{item.content}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
            <span class="card-text">特價：{{item.price}}</span>
          </p>
          </div>
          <p class="d-flex justify-content-around">
            <b-button variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
            <b-button @click.prevent="addCart(item.id)">加入購物車</b-button>
          </p>
        </div>
      </div>
      </div>
      <div class="menuTitle col-12 mb-3">飲料</div>
      <div class="col-12 d-flex justify-content-around flex-wrap">
      <div v-for="item in beverage" :key="item.id" class="animateMenu customCard d-flex justify-content-start overflow-hidden mb-3">
        <div class="col-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
          <img :src="item.imageUrl[0]" class="animateimg card-img">
        </div>
        <div class="custom-cardright col-6 bg-white d-flex flex-column justify-content-between">
          <div @click.prevent="getProduct(item.id)">
          <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
          <p class="custom-cardbody">{{item.content}}</p>
          <p class="d-flex justify-content-around">
            <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
            <span class="card-text">特價：{{item.price}}</span>
          </p>
          </div>
          <p class="d-flex justify-content-around">
            <b-button variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
            <b-button @click.prevent="addCart(item.id)">加入購物車</b-button>
          </p>
        </div>
      </div>
      </div>
    <b-modal ref="productModal" :title="tempProduct.title" size="xl" centered hide-footer>
      <div class="row justify-content-between mb-4">
        <b-img :src="tempProduct.imageUrl[0]" fluid class="mb-3" ></b-img>
        <div class="d-flex flex-column align-items-center col-5">
          <div class="activityTitle mb-3">常見問題</div>
          <p class="w-100">Q：素食者可否食用？</p>
          <p class="w-100">A：CCY大部分的產品為動物製品，若需純素食品請電洽為您特製。</p>
          <p class="w-100">Q：CCY如何包裝產品？</p>
          <p class="w-100">A：大廚料理完放涼之後真空無菌包裝，讓您吃得安心。</p>
          <p class="w-100">Q：CCY的付款方式？</p>
          <p class="w-100">A：可選常見的信用卡以及行動支付。</p>
          <p class="w-100">Q：CCY的送貨方式？</p>
          <p class="w-100">A：與物流業者合作，可送至住家周圍的超商或直接送貨到府。</p>
        </div>
      </div>
      <div class="activityTitle d-flex justify-content-center mb-3">詳細介紹：</div>
      <div class="d-flex justify-content-center mb-3">{{tempProduct.description}}</div>
      <p class="d-flex justify-content-center">
        各式料理皆可以優惠價線上點餐，貨到付款，或是訂位在CCY Steak店內享有優惠套餐。
      </p>
      <p class="d-flex justify-content-around mb-4">
      <span>原價：<del>{{tempProduct.origin_price}}</del></span>
      <span>特價：{{tempProduct.price}}</span>
      </p>
      <p class="d-flex justify-content-end">
      <b-button class="mr-3" @click.prevent="addCart(tempProduct.id)">加入購物車</b-button>
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
      tempProduct: {
        imageUrl :[]
      },
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
        this.setMenu = this.products.filter((item) =>
          item.category === '套餐'
        )
        this.entree = this.products.filter((item) =>
          item.category === '前菜'
        )
        this.salad = this.products.filter((item) =>
          item.category === '沙拉'
        )
        this.soup = this.products.filter((item) =>
          item.category === '湯'
        )
        this.meat = this.products.filter((item) =>
          item.category === '主餐'
        )
        this.sweets = this.products.filter((item) =>
          item.category === '甜點'
        )
        this.beverage = this.products.filter((item) =>
          item.category === '飲品'
        )
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

<template>
  <div class="container min-vh">
    <Loading :active.sync="isLoading" :is-full-page="true">
      <div class="loadingio-spinner-spinner-jz9qo78s5j"><div class="ldio-9d27yb1g2eu">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div></div>
    </Loading>
    <div class="row justify-content-center bigtopSpacing bigbotSpacing">
      <div class="col-12 sectionSpcing">
        <div class="menuTitle col-12 mb-3">套餐</div>
        <div class="col-12 d-flex justify-content-center flex-wrap paddingLevel">
          <div v-for="item in setMenu" :key="item.id" class="animateMenu customBorder w-100 d-flex justify-content-start mb-3 overflow-hidden position-relative">
            <div class="setMenu d-flex flex-column flex-sm-row justify-content-start align-items-center rounded overflow-hidden" @click.prevent="getProduct(item.id)">
              <div class="col-12 col-md-6 d-flex justify-content-center align-items-center overflow-hidden">
                <img :src="item.imageUrl[0]" class="animateimg setMenu-img">
              </div>
              <div class="menu col-12 col-sm-6 d-flex flex-column justify-content-between bg-white pt-sm-5 pb-sm-5">
                <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
                <p class="custom-cardbody d-flex justify-content-center">{{item.content}}</p>
                <p class="d-flex justify-content-around">
                  <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
                  <span class="card-text">特價：{{item.price}}</span>
                </p>
                <p class="d-flex justify-content-between">
                  <span class="col-6 pl-0 pr-sm-3"><b-button class="w-100" variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button></span>
                  <span class="col-6 pl-0 pl-sm-3 pr-0 pr-sm-3" onclick="event.cancelBubble = true"><b-button class="w-100" @click.prevent="addCart(item.id)">加入購物車</b-button></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 sectionSpcing">
        <div class="menuTitle col-12 mb-3">前菜</div>
        <div class="col-12 d-flex justify-content-around flex-wrap">
          <div v-for="item in entree" :key="item.id" class="animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3">
            <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
              <img :src="item.imageUrl[0]" class="animateimg card-img">
            </div>
            <div class="custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between"  @click.prevent="getProduct(item.id)">
              <p class="card-title d-flex justify-content-center pt-3 pb-3 mb-0">{{item.title}}</p>
              <p class="custom-cardbody">{{item.content}}</p>
              <p class="d-flex justify-content-around">
                <span class="card-text">原價：<del>{{item.origin_price}}</del></span>
                <span class="card-text">特價：{{item.price}}</span>
              </p>
              <p class="d-flex justify-content-around">
                <b-button class="mr-3" variant="outline-secondary" @click.prevent="getProduct(item.id)">查看詳情</b-button>
                <span onclick="event.cancelBubble = true"><b-button @click.prevent="addCart(item.id)">加入購物車</b-button></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 sectionSpcing">
        <div class="menuTitle col-12 mb-3">湯</div>
        <div class="col-12 d-flex justify-content-around flex-wrap">
          <div v-for="item in soup" :key="item.id" class="animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3">
            <div class="custom-cardleft col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
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
      </div>
      <div class="col-12 sectionSpcing">
        <div class="menuTitle col-12 mb-3">沙拉</div>
        <div class="col-12 d-flex justify-content-around flex-wrap">
          <div v-for="item in salad" :key="item.id" class="animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3">
            <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
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
      </div>
      <div class="col-12 sectionSpcing">
        <div class="menuTitle col-12 mb-3">主餐</div>
        <div class="col-12 d-flex justify-content-around flex-wrap">
          <div v-for="item in meat" :key="item.id" class="animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3">
            <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
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
      </div>
      <div class="col-12 sectionSpcing">
        <div class="menuTitle col-12 mb-3">甜點</div>
        <div class="col-12 d-flex justify-content-around flex-wrap">
          <div v-for="item in sweets" :key="item.id" class="animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3">
            <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden" @click.prevent="getProduct(item.id)">
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
      </div>
      <div class="menuTitle col-12 mb-3">飲料</div>
        <div class="col-12 d-flex justify-content-around flex-wrap">
          <div v-for="item in beverage" :key="item.id" class="animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3">
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
        <div class="col-12 col-lg-6">
          <b-img :src="tempProduct.imageUrl[0]" fluid class="mb-3"></b-img>
        </div>
        <div class="col-12 col-lg-6">
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
        num: 1,
        imageUrl: []
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
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http.get(api)
        .then((res) => {
          this.tempProduct = res.data.data
          this.tempProduct.num = 1
          this.$refs.productModal.show()
          this.isLoading = false
        })
        .catch((error) => {
          if (error) {
            this.isLoading = false
            this.$swal({
              icon: 'error',
              title: '取得商品資料失敗!',
              text: '請再試一次',
              button: 'OK'
            })
          }
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
            title: error.response.data.errors[0],
            text: '請重新選購',
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
    }
  }

}
</script>

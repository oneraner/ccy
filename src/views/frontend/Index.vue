<template>
<div>
  <Loading :active.sync="isLoading" :is-full-page="true">
    <div class="loadingio-spinner-spinner-jz9qo78s5j"><div class="ldio-9d27yb1g2eu">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </Loading>
  <div class="banner d-flex align-items-center text-white sectionSpcing position-relative">
    <div class="bannerGradient h-100 w-50 position-absolute"></div>
    <div class="banner-text">
      <h1 class="mb-3">一客完美的牛排</h1>
      <p>創新熟成技術，歲月的琢磨打造自信的牛排，<br>東西方經典甜點。</p>
      <b-link to="/products" class="bannerbutton border rounded d-flex justify-content-center align-items-center p-3">瀏覽菜單</b-link>
    </div>
  </div>
  <div class="container">
    <swiper ref="indexSwiper" class="swiper overflow-hidden sectionSpcing" :options="swiperOption">
      <swiper-slide class="entree rounded position-relative">
        <div class="swiperanimate" @click.prevent="getProduct(swiperitem.id[0])">綜合刺身</div>
      </swiper-slide>
      <swiper-slide class="soup rounded position-relative">
        <div class="swiperanimate" @click.prevent="getProduct(swiperitem.id[1])">法式洋蔥湯</div>
      </swiper-slide>
      <swiper-slide class="salad rounded position-relative">
        <div class="swiperanimate" @click.prevent="getProduct(swiperitem.id[2])">凱薩沙拉</div>
      </swiper-slide>
      <swiper-slide class="dessert rounded position-relative">
        <div class="swiperanimate" @click.prevent="getProduct(swiperitem.id[3])">法式馬卡龍</div>
      </swiper-slide>
      <swiper-slide class="tea rounded position-relative">
        <div class="swiperanimate" @click.prevent="getProduct(swiperitem.id[4])">名間冬片仔</div>
      </swiper-slide>
      <swiper-slide class="sausage rounded position-relative">
        <div class="swiperanimate" @click.prevent="getProduct(swiperitem.id[5])">墨魚香腸</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination">
      </div>
    </swiper>
    <div class="row justify-content-center">
      <h2 class="col-8 d-flex justify-content-center chefTitle mb-3">主廚</h2>
      <div class="col-12 d-flex justify-content-center">
        <div class="chef col-6"></div>
        <div class="chefright d-flex flex-column justify-content-center col-6 bg-secondary text-white p-4">
          <p class="activityTitle d-flex justify-content-center">Chef Chao</p>
          <p class="activityBody p-3">15歲學徒出身，經歷多家知名牛排餐廳洗禮，擷取各家之長，擅長發揮牛肉不同部位不同風味，經典料理上也很嚴謹，靈活多變不墨守成規。</p>
          <div class="d-flex justify-content-center align-items-center flex-column">
            <p class="xol-12 col-xl-8 d-flex justify-content-start">經歷：</p>
            <p class="col-12 col-xl-4 d-flex justify-content-between"><span>B Cut</span> <span>主廚</span></p>
            <p class="col-12 col-xl-4 d-flex justify-content-between"><span>Mature</span> <span>主廚</span></p>
            <p class="col-12 col-xl-4 d-flex justify-content-between"><span>教母牛排</span> <span>主廚</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row sectionSpcing">
      <div class="col-12 d-flex">
        <ul class="businessHours d-flex flex-column align-items-start col-6 bg-secondary text-white p-4">
          <li class="activityTitle w-100 d-flex justify-content-center mb-5">營業時間 Business Hours</li>
          <li class="mb-5">午餐 Lunch： 11；00~14：00(最後點餐時間為13：00)</li>
          <li class="mb-5">晚餐 Dinner：17：00~22：00(最後點餐時間為21：00)</li>
          <li class="mb-5">餐廳地址：台北市信義區光復南路888號</li>
          <li class="mb-5">Tel：(02)34567890</li>
          <li class="mb-5">餐廳內用餐最低消費為一人NT1000元</li>
          <li class="mb-5">小費請由簽帳單自行勾選5%~20%不等之金額</li>
        </ul>
        <div class="restaurantImage col-6"></div>
      </div>
    </div>
    <div class="bigbotSpacing">
      <b-card-group deck>
        <b-card title="牛肉" img-height="300px" img-src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/dIGe6WZllAFQZl8AgI5xAg4mPf94qlxdD2KLK4FsO27q4yyi8ovmt9S885sxflNPIB811oKBVjuUuVGKqar2pDKMR10wqAVoiACdcK4mjODKKTbYNlvzxdi9h3XpyjYk.jpg" img-alt="Image" img-top>
          <b-card-text>
            CCY Steak 的優質牛肉皆從美國進口 USDA 認證之 Prime 等級牛肉，並且利用乾式熟成處理，在嚴格管控溫、濕度之下，牛肉更顯多汁可口。
          </b-card-text>
        </b-card>

        <b-card title="蔬菜" img-height="300px" img-src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Qa5tPmad92gcKZGZErneQwJPfuZfnszBenOzVdvhWzRWBXfzPYzm2sJsn9m0DNKGXw02ji40IoLTr3I3TUMHDxJ6Rtup9kYWwQqD4mRGLENO8npPUX6qtPePN7S8WNcQ.jpg" img-alt="Image" img-top>
          <b-card-text>
            CCY Steak 的蔬菜皆與台灣中南部的農友簽約，這些農友皆經營有機農業，並且嚴格管控蔬菜之品質，讓各位客人吃的到在地的精緻味道。
          </b-card-text>
        </b-card>

        <b-card title="茶" img-height="300px" img-src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/4ru8CnlbiZjSKZuM8HaHPvzIWBafjcJ10BzooVAZCJJFEXeRitqD1tBC4If16x5jjTRnEP6EfJSkF7oJDkIS7V0DiDVzPLJQracP62FhIGteCHrWTQF9Ibwn6yWkwp1w.jpg" img-alt="Image" img-top>
          <b-card-text>
            CCY Steak 的茶葉皆為台灣茶，台灣茶遠近馳名，各式茶葉皆從特色茶農處進口，香氣宜人，清新淡雅，值得您細細品味。
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  <b-modal id="productModal" ref="productModal" size="xl" centered hide-header hide-footer>
    <b-button class="xButton d-flex justify-content-center align-items-center rounded-circle position-absolute" @click="$bvModal.hide('productModal')">x</b-button>
    <div class="row justify-content-between mb-4">
      <div class="col-6">
        <b-img :src="tempProduct.imageUrl[0]" fluid class="mb-3"></b-img>
      </div>
      <div class="col-6">
        <div class="activityTitle d-flex mb-3">{{tempProduct.title}}</div>
        <div class="d-flex justify-content-center mb-3">{{tempProduct.description}}</div>
          <p class="d-flex justify-content-center">
            各式料理皆可以優惠價線上點餐，貨到付款，或是訂位在CCY Steak店內享有優惠套餐。
          </p>
          <p class="d-flex justify-content-end mb-4">
            <span class="mr-3"><small>原價：<del>{{tempProduct.origin_price}}</del></small></span>
            <span>特價：{{tempProduct.price}}</span>
          </p>
        <div class="col-12 d-flex justify-content-end">
          <div class="w-50 d-flex">
            <b-button class="addButton" @click.prevent="updateSubtract()">-</b-button>
            <div class="productNum">{{tempProduct.num}}</div>
            <b-button class="lessButton" @click.prevent="tempProduct.num ++;updateQ()">+</b-button>
          </div>
          <b-button class="w-50 mr-3" @click.prevent="addCart(tempProduct.id, tempProduct.num)">加入購物車</b-button>
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
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        freeMode: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      tempProduct: {
        num: 1,
        imageUrl: []
      },
      swiperitem: {
        id: [
          'mVsZuU5Edl0g86gHY5nqXdEvhwnDwNnW9B3oPQfPZ9CAgccusL5QQ1hWPGWNiLLh',
          'Aaf4J4oyogzzbk2HLyIaj1wGkoJl0CehbFb5W4JSO742C4AZEJ6RdoxpbeQaeMcY',
          'om1vaaOKyguOPytK8Wc1w7cQr79rkFhj1VixAo1n7HVXJ1tVfloPAjVP4z83R2Ht',
          'CjppvjoSHaHZb9GERAvi61lxPiDrZsrLWZ0vvwvN8odI6bPt2gEglzmZkGixQcEk',
          'WkAfUCXpld02XjCc8eViH8gRKgdpO6TgJLN93d36ZxDJHUbJ13hSnFRTzjrH8wcY',
          'TDC5rsi2mOvijkAyKWfkwhRa6UMNGYV41repGm8A7Kja1UkKBtaYN4h2YTpnzBm7'
        ]

      }

    }
  },
  methods: {
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
      this.$http.post(api, cart)
        .then((res) => {
          this.isLoading = false
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
              title: '加入購物車失敗!',
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

<template>
<div>
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
        <div class="swiperanimate">綜合刺身</div>
      </swiper-slide>
      <swiper-slide class="soup rounded position-relative">
        <div class="swiperanimate">法式洋蔥湯</div>
      </swiper-slide>
      <swiper-slide class="salad rounded position-relative">
        <div class="swiperanimate">凱薩沙拉</div>
      </swiper-slide>
      <swiper-slide class="dessert rounded position-relative">
        <div class="swiperanimate">法式馬卡龍</div>
      </swiper-slide>
      <swiper-slide class="tea rounded position-relative">
        <div class="swiperanimate">名間冬片仔</div>
      </swiper-slide>
      <swiper-slide class="sausage rounded position-relative">
        <div class="swiperanimate">墨魚香腸</div>
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
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        freeMode:true,
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
      }
    }
  }
}
</script>

<template>
<div class="container">
<div class="row justify-content-center mt-3 mb-3">
  <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-6 mb-3">
    <div class="activityImage">
    <div class="activity"></div>
    </div>
    <div class="activityImage bg-white pt-3">
    <div class="activityTitle d-flex justify-content-center mb-3">九月新菜：墨魚香腸</div>
    <div class="d-flex flex-column justify-content-start p-3 mb-3">
      <p> CCY Steak 精選每日早晨現送墨魚與台灣豬肉製作的美味香腸，美味Q彈，帶您品嚐台灣小吃風味。</p>
    </div>
    <div class="d-flex justify-content-center mb-3"><b-button to="/products">立刻訂餐</b-button></div>
    </div>
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-6 mb-3">
    <div class="activityImage">
    <div class="activitysteak"></div>
    </div>
    <div class="activityImage bg-white pt-3">
    <div class="activityTitle d-flex justify-content-center mb-3">振興券優惠套餐</div>
    <div class="d-flex flex-column justify-content-start p-3 mb-3">
      <p>CCY Steak 配合政府政策，今起持實體振興券即可以特價享用美國 Prime 等級牛肋排...等組成的豪華套餐。</p>
    </div>
    <div class="d-flex justify-content-center mb-3"><b-button to="/products">立刻訂餐</b-button></div>
    </div>
  </div>
</div>
<div class="row mb-3">
  <div class="col-12 d-flex justify-content-center">更多活動陸續推出</div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      carts: {}
    }
  }

}
</script>

<template>
<div class="container">
<div class="row bigtopSpacing justify-content-center mb-3">
  <div class="menuTitle col-8 d-flex justify-content-center mb-3">最新活動</div>
  <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-6 mb-3">
    <div class="activityImage">
      <div class="activity"></div>
    </div>
    <div class="activityImage botradius bg-white pt-3">
      <div class="activityTitle d-flex justify-content-center mb-3">九月新菜：墨魚香腸</div>
      <div class="d-flex flex-column justify-content-start p-3 mb-3">
        <p> CCY Steak 精選每日早晨現送墨魚與台灣豬肉製作的美味香腸，美味Q彈，帶您品嚐台灣小吃風味。</p>
      </div>
      <div class="d-flex justify-content-center mb-3">
        <b-button to="/products">立刻訂餐</b-button>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-6 mb-3">
    <div class="activityImage">
      <div class="activitysteak"></div>
    </div>
    <div class="activityImage botradius bg-white pt-3">
      <div class="activityTitle d-flex justify-content-center mb-3">振興券優惠套餐</div>
      <div class="d-flex flex-column justify-content-start p-3 mb-3">
        <p>CCY Steak 配合政府政策，今起持實體振興券即可以特價享用美國 Prime 等級牛肋排...等組成的豪華套餐。</p>
      </div>
      <div class="d-flex justify-content-center mb-3"><b-button to="/products">立刻訂餐</b-button></div>
    </div>
  </div>
</div>
<div class="row">
  <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-6 mb-3">
    <div class="activityImage">
      <div class="activityLemon"></div>
    </div>
    <div class="activityImage botradius bg-white pt-3">
      <div class="activityTitle d-flex justify-content-center mb-3">經典甜品：檸檬塔上市</div>
      <div class="d-flex flex-column justify-content-start p-3 mb-3">
        <p> CCY Steak 主廚從國外帶回經典甜點的秘訣，經由不斷調整的比例與在地材料，打造完美的酸甜比例。</p>
      </div>
      <div class="d-flex justify-content-center mb-3">
        <b-button to="/products">立刻訂餐</b-button>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-6 mb-3">
    <div class="activityImage">
      <div class="activityTsteak"></div>
    </div>
    <div class="activityImage botradius bg-white pt-3">
      <div class="activityTitle d-flex justify-content-center mb-3">嘗試過大份量丁骨了嗎？</div>
      <div class="d-flex flex-column justify-content-start p-3 mb-3">
        <p> CCY Steak 從美國進口的 Prime 23 oz 大丁骨，份量絕對滿足牛排的忠實狂熱者，最新上市。</p>
      </div>
      <div class="d-flex justify-content-center mb-3">
        <b-button to="/products">立刻訂餐</b-button>
      </div>
    </div>
  </div>
</div>
<div class="row bigbotSpacing">
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

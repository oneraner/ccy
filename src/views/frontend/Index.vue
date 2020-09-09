<template>
<div class="container">
<div class="row justify-content-center">
  <div class="col-12 mb-3">
    <div class="banner"></div>
  </div>
  <ul class="d-flex justify-content-between col-11 mb-3">
    <li class="minicard entree col-3 mr-3" @click.prevent="$bvModal.show('entreeModal')"></li>
    <li class="minicard soup col-3 mr-3" @click.prevent="$bvModal.show('soupModal')"></li>
    <li class="minicard salad col-3" @click.prevent="$bvModal.show('saladModal')"></li>
  </ul>
  <div class="d-flex justify-content-center col-11 mb-3">
    <ul class="d-flex justify-content-center align-items-center col-10">
      <li class="bg-cri d-flex justify-content-center align-items-center col-6 mr-3"><p class="minicard dessert col-10"></p></li>
      <li class="bg-cri d-flex justify-content-center align-items-center col-6"><p class="minicard tea col-10"></p></li>
    </ul>
  </div>
</div>
  <div class="row mb-3">
    <ul class="d-flex flex-column justify-content-center align-items-start col-6">
      <li class="mb-5">營業時間 Business Hours</li>
      <li class="mb-5">午餐 Lunch： 11；00~14：00(最後點餐時間為13：00)</li>
      <li class="mb-5">晚餐 Dinner：17：00~22：00(最後點餐時間為21：00)</li>
      <li class="mb-5">餐廳地址：台北市信義區光復南路888號</li>
      <li class="mb-5">Tel：(02)34567890</li>
    </ul>
    <div class="restaurantImage col-6"></div>
  </div>
<b-modal id="entreeModal" size="xl" hide-header hide-footer>
  <div class="d-block entreeBig">
  </div>
    <b-button class="mt-3" block @click.prevent="$bvModal.hide('entreeModal')">Close Me</b-button>
</b-modal>
<b-modal id="soupModal" size="xl" hide-header hide-footer>
  <div class="d-block soupBig">
  </div>
    <b-button class="mt-3" block @click.prevent="$bvModal.hide('soupModal')">Close Me</b-button>
</b-modal>
<b-modal id="saladModal" size="xl" hide-header hide-footer>
  <div class="d-block saladBig">
  </div>
    <b-button class="mt-3" block @click.prevent="$bvModal.hide('saladModal')">Close Me</b-button>
</b-modal>
</div>
</template>
<script>
export default {
}
</script>

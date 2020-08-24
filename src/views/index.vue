<template>
<div class="row justify-content-center">
  <ul class="d-flex justify-content-center col-11 mb-3">
    <li class="minicard entree col-3 mr-3" @click="$bvModal.show('entreeModal')"></li>
    <li class="minicard soup col-3 mr-3" @click="$bvModal.show('soupModal')"></li>
    <li class="minicard salad col-3" @click="$bvModal.show('saladModal')"></li>
  </ul>
  <div class="banner col-11 mb-3"></div>
  <div class="d-flex justify-content-center col-11 mb-3">
    <ul class="d-flex justify-content-center align-items-center col-10">
      <li class="bg-cri d-flex justify-content-center align-items-center col-6 mr-3"><p class="minicard dessert col-10"></p></li>
      <li class="bg-cri d-flex justify-content-center align-items-center col-6"><p class="minicard tea col-10"></p></li>
    </ul>
  </div>
<b-modal id="entreeModal" size="xl" hide-header hide-footer>
  <div class="d-block entreeBig">
  </div>
    <b-button class="mt-3" block @click="$bvModal.hide('entreeModal')">Close Me</b-button>
</b-modal>
<b-modal id="soupModal" size="xl" hide-header hide-footer>
  <div class="d-block soupBig">
  </div>
    <b-button class="mt-3" block @click="$bvModal.hide('soupModal')">Close Me</b-button>
</b-modal>
<b-modal id="saladModal" size="xl" hide-header hide-footer>
  <div class="d-block saladBig">
  </div>
    <b-button class="mt-3" block @click="$bvModal.hide('saladModal')">Close Me</b-button>
</b-modal>
</div>
</template>
<script>
export default {
}
</script>

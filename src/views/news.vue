<template>
<div class="container">
  <div class="posterImage col-12 mb-3"></div>
  <div class="d-flex justify-content-center">
  <b-button pill variant="outline-primary" class="cartButton mb-3" @click="orderMeal">立刻訂餐</b-button>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            carts:{},
        };
    },
    methods:{
        orderMeal(){

        }
    }

}
</script>
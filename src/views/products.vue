<template>
  <div>
    <div  v-for="item in products" :key="item.id">
    <h1>This is a products page</h1>
    <p>{{item.title}}</p>
    <p>{{item.price}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    console.log(process.env.VUE_APP_UUID)
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`).then((res) => {
      console.log(res)
      this.products = res.data.data
    })
  }
}
</script>

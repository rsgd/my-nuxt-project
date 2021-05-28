<template>
  <div class="container">
    <div>
      <Logo />

      <div class="m-6 grid grid-cols-1 2col:grid-cols-2 3col:grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" v-bind:product="product" class="border rounded-lg bg-gray-100 hover:shadow-lg">
          <productWidgetImgIx :product="product"></productWidgetImgIx>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductWidgetImgIx from '~/components/ProductWidgetImgIx.vue'
export default {
  name: "IndexPage",
  components: {
    ProductWidgetImgIx
  },
  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    return { products };
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/productListOne";
import ProductListTwo from "./components/productListTwo";
export default {
  name: 'App',
    components: {ProductListTwo, ProductListOne},
    data() {
      return {

      }
    }
}
</script>

<style>
#app {
  text-align: center;
  font-family: ubuntu;
  color: #555;
}
</style>

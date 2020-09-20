 <template>
  <div id="product-list-two">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(2)">商品降价</button>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        computed:{
            // products() {
            //     return this.$store.state.products
            // },

            // 单个的getters
            // saleProducts() {
            //     return this.$store.getters.saleProducts;
            // },
            // 多个的getters
            ...mapGetters([
                "saleProducts"
            ])
        },//使用...如果报错，执行 cnpm install babel-preset-stage-2
        methods: {
            // reducePrice(amount) {
                // strict:true 时会报错
                // this.$store.state.products.forEach(product =>{
                //     product.price -= 1;
                // })

                // 调用的store mutations的方法
                // this.$store.commit('reducePrice');

                // 执行store actions的方法，异步获取（有调试记录）
                // this.$store.dispatch('reducePrice',amount);
            // },
            ...mapActions([
                "reducePrice"
            ])
        }
    }
</script>

<style scoped>

</style>

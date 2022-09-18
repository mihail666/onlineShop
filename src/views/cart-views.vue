<template>
  <div class="cart-views">
    <ShopCart 
    v-if="CART.length"
    :cart_data="CART" />
  </div>
  <router-link :to="{name:'catalog'}">
      <div class="shop-cart__linc_to-cart cartBtn">back to catalog</div>
    </router-link>
    <p v-if="!CART.length">There are no products in cart...</p>
</template>

<script>

import ShopCart from '../components/cart/shop-cart.vue';
import { mapGetters } from 'vuex';

export default {
  name: "cart-views",
  components: {
    ShopCart
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>


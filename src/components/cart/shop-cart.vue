<template>
  <div class="shop-cart">
    <h1>cart</h1>
    <shopCartItem 
    v-for="(item, index) in cart_data"
      :key="item.article" 
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
      />
    <div class="shop-cart__total">
      <p class="shop-cart__total__name">total:</p>
      <p>{{cartTotalCost}}P</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import shopCartItem from '../cart/shop-cart-item.vue';
export default {
  name: "shop-cart",
  components: {
    shopCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    cartTotalCost() {
      let result = []

      for (let item of this.cart_data) {
        result.push(item.price * item.quantity)
      }
      result = result.reduce(function (sum, el) {
        return sum + el;
      })
      return result;
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
      this.DECREMENT_CART_ITEM(index)
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  },
  watch: {},
}
</script>

<style lang="scss">

</style>
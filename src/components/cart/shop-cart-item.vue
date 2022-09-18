<template>
  <div class="shop-cart-item">
    <img class="shop-cart-item__image" :src=" require('../../assets/images/' + cart_item_data.image) " alt="">
    <div class="shop-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <span class="quantity__tools">
        <span class="quantity__btn btn" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
        <span class="quantity__btn btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="btn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
export default {
  name: "shop-cart-item",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions([
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
       this.$emit('increment')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
  },
  watch: {},
}
</script>

<style>

</style>
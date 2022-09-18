<template>
  <div class="shop-catalog-item">
    <img class="shop-catalog-item__image" :src="require('../../assets/images/' + product_data.image)" alt="img">
    <div>
      <p class="shop-catalog-item__name">{{ product_data.name }}</p>
      <p class="shop-catalog-item__price">Price: {{ product_data.price }} Р.</p>
      <p class="shop-catalog-item__price">{{ product_data.category }}</p>
      <button class="shop-catalog-item__btn btn" @click="addToCart">bay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop-catalog-item",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data)
    }
  },
}
</script>

<style lang="scss">
.shop-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 8*2;
  margin-bottom: 8*2;

  &__image {
    width: 100px;
  }
}
</style>
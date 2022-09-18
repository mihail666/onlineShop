<template>
  <div class="shop-catalog">
    <div class="shop-catalog__header">
      <ul class="shop-catalog__items">
        <li class="shop-catalog__items_item">
          <h2>catalog</h2>
        </li>
        <li class="shop-catalog__items_item filters">
          <shopSelect :select="selected" :options="options" />
        </li>

      </ul>
      <div class="shop-catalog__list">
        <shop-catalog-item v-for="product in PRODUCTS" :key="product.article" :product_data="product"
          @addToCart="addToCart" />
      </div>

    </div>
  </div>
</template>

<script>
import shopCatalogItem from '../catalog/shop-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';
import ShopSelect from '../shop-select.vue';

export default {
  name: "shop-catalog",
  components: {
    shopCatalogItem,
    ShopSelect
  },
  props: {},
  data() {
    return {
      options: [
        { name: 'Все', value: 'ALL' },
        { name: 'anime', value: 'a1' },
        { name: 'anime2', value: 'a2' },
      ],
      selected: '',
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    optionsSelect(option) {
      this.selected = option.name
    },
    sortByCategories(option) {
      this.selected = option.name
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
}
</script>

<style lang="scss">
.shop-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__header {
    width: 100%;
    height: 60px;
    padding-top: 30px;

    &__items {
      max-width: 900px;
      font-size: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &__item  {
        font-size: 50px;
        top:20px;
      }
    }
    &__items_item h2{
      font-size: 40px;
      font-weight: 900;
    }
  }
}
</style>
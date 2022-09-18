<template>
  <div class="shop-header">
    <div class="shop-heaader__container">
      <div class="shop-header__logo"></div>
      <ul class="shop-header__items">
        <li class="shop_header__items_item" v-for="(menu, index) in headerMenuList" :key="index">
          <router-link class="shop_header__link btn" aria-current="page" :to="menu.path">
            {{ menu.name }}
          </router-link>
        </li>
        <li class="shop_header__items_item_end">
          <router-link class="shop_header__link btn " aria-current="page" :to="{name: 'cart'}">
              Cart: {{CART.length}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import { menuList } from '../../const/menuLinks'
import { mapGetters } from 'vuex';
export default {
  data() {
    return { headerMenuList: menuList }
  },
  computed:{
    ...mapGetters([
      'CART'
    ]),
  }
}
</script>

<style lang="scss">
.shop-header {
  width: 100%;
  height: 60px;
  padding-top: 30px;
  background: #000;
  &__items {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    text-decoration: none;
    list-style: none;
    justify-content: space-around;
    text-decoration: none;
    font-size: 20px;
    &__item{
      
    }
    &__item_end {

    }
  }

  &__link {
    text-decoration: none;
  }
}
</style>
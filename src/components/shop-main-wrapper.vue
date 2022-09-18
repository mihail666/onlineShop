<template>
  <div >
    <header>
      <shop-heaeder />
    </header>
    <main class="shop-main-wrapper">
      <router-view />
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
import shopHeaeder from '../components/header/shop-header.vue'
export default {
  name: "shop-main-wrapper",
  components: {
    shopHeaeder
  }
}
</script>

<style>
.shop-main-wrapper {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
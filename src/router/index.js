import { createRouter, createWebHashHistory } from 'vue-router'

import shopCatalog from '../components/catalog/shop-catalog'
import cartViews from '../views/cart-views'
const routes = [
  {
    path: '/catalog',
    name: 'catalog',
    component: shopCatalog,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component:cartViews,
    props: true
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

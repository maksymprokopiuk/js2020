import Vue from 'vue'
import VueRouter from 'vue-router'

import Cart from '@/components/Cart'
import ProductsList from '@/components/ProductList'
import AddProductForm from '@/components/AddProductForm'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'products',
    linkTitle: 'Products',
    isVisible: true,
    component: ProductsList,
  },
  {
    path: '/cart',
    name: 'cart',
    linkTitle: 'Cart',
    isVisible: true,
    component: Cart,
  },
  {
    path: '/product-form/new',
    name: 'add-product-form',
    linkTitle: 'Add new product',
    isVisible: true,
    component: AddProductForm,
  },
  {
    path: '/product-form/:product_id',
    name: 'edit-product-form',
    linkTitle: 'Add new product',
    isVisible: false,
    component: AddProductForm,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router

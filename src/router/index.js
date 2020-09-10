import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/frontend/Layout.vue'),
    children: [
      // 前台
      {
        path: '',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: '/news',
        component: () => import('../views/frontend/News.vue')
      },
      {
        path: '/core',
        name: 'Core',
        component: () => import('../views/frontend/Core.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/frontend/Order.vue')
      }
    ]
  }, // 後台
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/dashboard/Login.vue')
      },
      {
        path: 'products',
        component: () => import('../views/dashboard/Productsd.vue')
      },
      {
        path: 'discount',
        component: () => import('../views/dashboard/Discount.vue')
      },
      {
        path: 'order',
        component: () => import('../views/dashboard/Orderd.vue')
      },
      {
        path: 'image',
        component: () => import('../views/dashboard/Image.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

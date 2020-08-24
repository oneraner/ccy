import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      // 前台
      {
        path: '',
        component: () => import('../views/index.vue')
      },
      {
        path: '/core',
        name: 'Core',
        component: () => import('../views/core.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/products.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/cart.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login.vue')
      },
      // 後台
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/dashboard/dashboard.vue'),
        children: [
          {
            path: 'products',
            component: () => import('../views/dashboard/productsd.vue')
          },
          {
            path: 'discount',
            component: () => import('../views/dashboard/discount.vue')
          },
          {
            path: 'order',
            component: () => import('../views/dashboard/order.vue')
          },
          {
            path: 'image',
            component: () => import('../views/dashboard/image.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

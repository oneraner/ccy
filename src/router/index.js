import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/Layout.vue'),
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
    component: () => import('../views/layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Productsd.vue')
      },
      {
        path: 'order',
        component: () => import('../views/backend/Orderd.vue')
      },
      {
        path: 'image',
        component: () => import('../views/backend/Image.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/backend/Login.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router

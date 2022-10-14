import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SigninView from '../views/SigninView.vue'
import SignupView from '../views/SignupView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      auth: true
    }
  },
  {
    path: '/posts',
    name: 'posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PostsView.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('../views/PostView'),
    meta: {
      auth: true
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next)=>{
  if(to.meta.auth && JSON.parse(localStorage.getItem('logged'))) {
    next()
  } else if (to.meta.auth && !JSON.parse(localStorage.getItem('logged'))) {
    next('/signin')
  } else {
    next()
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import AppPosts from '../components/AppPosts.vue'
import AddPost from '../components/AddPost.vue'
import SinglePost from '../components/SinglePost.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    name: 'Posts',
    component: AppPosts
  },
  {
    path: '/post/:id',
    name: 'Single Post',
    component: SinglePost
  },
  {
    path: '/add',
    name: 'Add Post',
    component: AddPost
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

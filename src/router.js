import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import User from './views/user/User.vue'
import UserPosts from './views/user/UserPosts.vue'
import UserProfile from './views/user/UserProfile.vue'
import UserAddPost from './views/user/UserAddPost.vue'
import Post from './views/Post.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        login: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "/post/:id",
      name: "post",
      component: Post,
      props: true,
    },
    {
      path: '/user',
      component: User,
      meta: {
        login: true,
      },
      children: [
        {
          path: "posts",
          name: "posts",
          component: UserPosts
        },
        {
          path: "addposts",
          name: "add-posts",
          component: UserAddPost
        },
        {
          path: "profile",
          name: "user-profile",
          component: UserProfile
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    console.log(window.localStorage.token);
    if(!window.localStorage.token) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
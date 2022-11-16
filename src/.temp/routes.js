const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/home/ehab/github/www_codescalers_egypt/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/home/ehab/github/www_codescalers_egypt/src/templates/Category.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--cs-academy-vue" */ "/home/ehab/github/www_codescalers_egypt/src/pages/CSAcademy.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--search-vue" */ "/home/ehab/github/www_codescalers_egypt/src/templates/Search.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/ehab/github/www_codescalers_egypt/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/ehab/github/www_codescalers_egypt/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/ehab/github/www_codescalers_egypt/src/pages/Index.vue")

export default [
  {
    path: "/cs-academy/post/introduction_to_generics%20_go/",
    component: c1
  },
  {
    path: "/cs-academy/category/twin/",
    component: c2
  },
  {
    path: "/cs-academy/post/big_datacenter_myth/",
    component: c1
  },
  {
    path: "/cs-academy/post/a_better_understanding_of_wealth/",
    component: c1
  },
  {
    path: "/cs-academy/post/a_different_approach_to_blockchain/",
    component: c1
  },
  {
    path: "/cs-academy/post/actually_you_are_the_product/",
    component: c1
  },
  {
    path: "/cs-academy/post/an_intro_to_the_threefold_grid/",
    component: c1
  },
  {
    path: "/cs-academy/category/farming/",
    component: c2
  },
  {
    path: "/cs-academy/category/foundation/",
    component: c2
  },
  {
    path: "/cs-academy/category/cloud/",
    component: c2
  },
  {
    path: "/cs-academy/category/aci/",
    component: c2
  },
  {
    path: "/cs-academy/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/search/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]

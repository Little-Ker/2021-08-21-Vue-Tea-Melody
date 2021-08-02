import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
            path: '/about',
            name: 'About',
            component: () =>
                import ('../views/About.vue')
        }, {
            path: '/news',
            name: 'News',
            component: () =>
                import ('../views/News.vue')
        }, {
            path: '/shopPoint',
            name: 'ShopPoint',
            component: () =>
                import ('../views/ShopPoint.vue')
        }]
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
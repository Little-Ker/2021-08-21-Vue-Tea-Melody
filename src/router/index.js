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
        path: '/shop',
        name: 'Shop',
        component: () =>
            import ('../views/Shop.vue')
    }, {
        path: '/shopPoint',
        name: 'ShopPoint',
        component: () =>
            import ('../views/ShopPoint.vue')
    }, {
        path: '/order',
        name: 'Order',
        component: () =>
            import ('../views/Order.vue')
    }]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
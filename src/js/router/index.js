import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    path: process.env.API_URL,

    hashbang: false,
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: function(resolve) {
                require(['../../components/index/index.vue'], resolve)
            }
        },
        {
            path: '/map',
            name: 'map',
            component: function(resolve) {
                require(['../../components/map/index.vue'], resolve)
            }
        }
    ]
});

export default router
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/products' },
        { path: '/login', component: Login },
        { path: '/products', component: Dashboard },
    ],
});

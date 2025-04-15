import Vue from 'vue';
import Router from 'vue-router';
import Page from '@/views/Page.vue';
import Login from '@/views/Login.vue';
import Products from '@/views/Products.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(Router);

export default new Router({
    mode: 'history', // Usa o modo de histórico para URLs limpas
    routes: [
        {
            path: "/login",
            component: Login
        },
        {
            path: '/',
            component: Page,
            children: [
                {
                    path: 'products',
                    component: Products, // Renderiza o Products no path /products
                },
                {
                    path: 'dashboard',
                    component: Dashboard, // Renderiza o Products no path /products
                },
            ],
        },
    ],
});

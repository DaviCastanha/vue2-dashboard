import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/variables.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css'; // Estilo do toast

Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({ router, render: h => h(App) }).$mount('#app')

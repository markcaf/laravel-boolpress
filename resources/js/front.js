import Vue from 'vue';
window.Vue = require('vue');

// importiamo il componente App
import App from './views/App';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import router from './router.js';

const app = new Vue({
    el: '#root',
    render: h => h(App), //mostriamo App all'avvio di Vue
    router
});

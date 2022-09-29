import App from './views/App';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        },
        {
            path: '/contacts',
            name: 'ContactsPage',
            component: ContactsPage
        },
    ]
});

export default router
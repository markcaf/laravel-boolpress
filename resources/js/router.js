import Vue from 'vue';
import App from './views/App';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import SinglePost from './pages/SinglePost';
import TagsIndexPage from './pages/TagsIndexPage';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/posts/:id',
            name: 'singlePost',
            component: SinglePost
        },
        {
            path: '/tags',
            name: 'tagsIndexPage',
            component: TagsIndexPage
        }
    ]
});

export default router
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Projects from './pages/Projects.vue';
import Error404 from './pages/Error404.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
    history : createWebHistory(),
    linkActiveClass : 'active',
    routes : [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: Error404
    }
    ]
})

export {router}
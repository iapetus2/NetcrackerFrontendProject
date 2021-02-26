import Vue from 'vue'
import Router from 'vue-router'


import Start from "@/components/Start";
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Room from './views/Room.vue';
import Register from './views/Register.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history', // uris without hashes #, see https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
    routes: [
        {
            path: '/',
            component: Start
        },
        {
            path: '/room',
            name: 'room',
            component: Room
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            // lazy-loaded
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/user',
            name: 'user',
            // lazy-loaded
            component: () => import('./views/BoardUser.vue')
        }

    //     {path:'/protected',component: Protected,
    // meta: {
    //     requiresAuth: true
    // }
    // },

    // otherwise redirect to home

]
})
;

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home', '/room'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;

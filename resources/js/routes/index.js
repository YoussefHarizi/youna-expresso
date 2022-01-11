import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from '../pages/auth/Login.vue';
import Home from '../pages/Home.vue';

const router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            component:Login,
            name:'login'
        },
        {
            path:'/home',
            component:Home,
            name:'home'
        }
    ]
});
export default router;
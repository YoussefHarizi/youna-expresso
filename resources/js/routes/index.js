import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from '../pages/auth/Login.vue'

const router = new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/login',
            component:Login,
            name:'login'
        }
    ]
});
export default router;
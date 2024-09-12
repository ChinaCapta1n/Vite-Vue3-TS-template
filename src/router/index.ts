import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
// import { userStore } from "../store/use";

import HomeView from '../views/HomeView.vue';
// import { userStore } from "../store/use";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     const store = userStore();
//     if(store.token) {
//         next();
//     } else {
//         // ...
//     }
// })

export default router;
import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import Login from "../views/Login.vue"
import beforeEach from "./beforeEach";

const rotas: RouteRecordRaw[] = [{
    path: '/login',
    name: 'login',
    component: Login

}]



const router = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

router.beforeEach(beforeEach)

export default router;
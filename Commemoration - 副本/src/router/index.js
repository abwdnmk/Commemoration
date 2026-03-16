import { createRouter, createWebHistory } from "vue-router"
import LoginView from '../views/login.vue'
import MessageBoard from '../views/messageboard.vue'
import BygoneDays from '../views/BygoneDays.vue'
import LinYa from "../views/PersonalCollection/LinYa.vue"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/message-board',
        name: 'MessageBoard',
        component: MessageBoard
    },
    {
        path: '/bygone-days',
        name: 'BygoneDays',
        component: BygoneDays
    },
    {
        path: '/linya',
        name: 'LinYa',
        component: LinYa
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
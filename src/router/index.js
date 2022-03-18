import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import EditPost from '../views/EditPost.vue'
import Login from '../views/Login.vue'

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/addPost',
        name: 'AddPost',
        component: AddPost
    },
    {
        path: '/editPost/:id',
        name: 'EditPost',
        component: EditPost,
        props: true,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
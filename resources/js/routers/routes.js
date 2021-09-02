const Welcome = () => import('../views/Welcome.vue')
const About = () => import('../views/About.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
]






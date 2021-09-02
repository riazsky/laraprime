import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const About = () => import('./views/About.vue');
const CreateDesignation = () => import('./views/designations/CreateDesignation.vue');
const CreateDepartment = () => import('./views/departments/CreateDepartment.vue');

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/create-designation',
        name: 'CreateDesignation',
        component: CreateDesignation
    },
    {
        path: '/create-dapartment',
        name: 'CreateDepartment',
        component: CreateDepartment
    },

]

export default new VueRouter({ routes });



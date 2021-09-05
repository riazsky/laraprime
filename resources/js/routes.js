import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue')
const About = () => import('./views/About.vue')
const CreateDesignation = () => import('./views/designations/CreateDesignation.vue')
const Table = () => import('./views/table/Table.vue')
const Form = () => import('./views/form/Form.vue')
const Suplier = () => import('./views/suplier_groups/Suplier.vue')
const SupplierForm = () => import('./views/suplier_groups/Form.vue')


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
        path: '/table',
        name: 'table',
        component: Table
    },
    {
        path: '/form',
        name: 'form',
        component: Form
    },
    {
        path: '/suplier',
        name: 'suplier',
        component: Suplier
    },
    {
        path: '/supplier_form',
        name: 'supplier_form',
        component: SupplierForm
    },

]

export default new VueRouter({ routes });



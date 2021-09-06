import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreatePurchase = () => import('./views/purchases/CreatePurchase.vue');
const Supplier = () => import('./views/suppliers/Supplier.vue');



const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/create-purchase',
        name: 'CreatePurchase',
        component: CreatePurchase
    },
    {
        path: '/supplier',
        name: 'Supplier',
        component: Supplier
    },

]

export default new VueRouter({
    // mode: 'history',
    routes
});



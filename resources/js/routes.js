import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateCustomerGroup = () => import('./views/CRM/CustomerGroups/CreateCustomerGroup.vue');
const ListCustomerGroup = () => import('./views/CRM/CustomerGroups/ListCustomerGroup.vue');
const CreateCompany = () => import('./views/CRM/Company/CreateCompany.vue');
const ListCompany = () => import('./views/CRM/Company/ListCompany.vue');
const CreateBranch = () => import('./views/CRM/Branch/CreateBranch.vue');
const ListBranch = () => import('./views/CRM/Branch/ListBranch.vue');



const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/create-customer-group',
        name: 'CreateCustomerGroup',
        component: CreateCustomerGroup
    },
    {
        path: '/list-customer-group',
        name: 'ListCustomerGroup',
        component: ListCustomerGroup
    },
    {
        path: '/create-company',
        name: 'CreateCompany',
        component: CreateCompany
    },
    {
        path: '/list-company',
        name: 'ListCompany',
        component: ListCompany
    },
    {
        path: '/create-branch',
        name: 'CreateBranch',
        component: CreateBranch
    },
    {
        path: '/list-branch',
        name: 'ListBranch',
        component: ListBranch
    }


]

export default new VueRouter({
    // mode: 'history',
    routes
});



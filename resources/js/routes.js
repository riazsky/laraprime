import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateCustomerGroup = () => import('./views/CRM/CustomerGroups/CreateCustomerGroup.vue');
const ListCustomerGroup = () => import('./views/CRM/CustomerGroups/ListCustomerGroup.vue');
const CreateCompany = () => import('./views/CRM/Company/CreateCompany.vue');
const ListCompany = () => import('./views/CRM/Company/ListCompany.vue');
const CreateBranch = () => import('./views/CRM/Branch/CreateBranch.vue');
const ListBranch = () => import('./views/CRM/Branch/ListBranch.vue');
const CreateCategory = () => import('./views/Base/category/CreateCategory.vue');
const ListCategory = () => import('./views/Base/category/ListCategory.vue');
const CreateWarehouse = () => import('./views/Base/warehouse/CreateWarehouse.vue');
const ListWarehouse = () => import('./views/Base/warehouse/ListWarehouse.vue');
const CreatePurchase = () => import('./views/Purchase/CreatePurchase.vue');
const ListPurchase = () => import('./views/Purchase/ListPurchase.vue');
const PurchaseInvoice = () => import('./views/Purchase/PurchaseInvoice.vue');
const InputRepeater = () => import('./views/InputRepeater.vue');



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
    },
    {
        path: '/create-category',
        name: 'CreateCategory',
        component: CreateCategory
    },
    {
        path: '/list-category',
        name: 'ListCategory',
        component: ListCategory
    },
    {
        path: '/create-warehouse',
        name: 'CreateWarehouse',
        component: CreateWarehouse
    },
    {
        path: '/list-warehouse',
        name: 'ListWarehouse',
        component: ListWarehouse
    },
    {
        path: '/create-purchase',
        name: 'CreatePurchase',
        component: CreatePurchase
    },
    {
        path: '/list-purchase',
        name: 'ListPurchase',
        component: ListPurchase
    },
    {
        path: '/purchase-invoice',
        name: 'PurchaseInvoice',
        component: PurchaseInvoice
    },
    {
        path: '/input-repeater',
        name: 'InputRepeater',
        component: InputRepeater
    }


]

export default new VueRouter({
    // mode: 'history',
    routes
});



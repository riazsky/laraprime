import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateContactPerson = () => import('./views/CRM/ContactPerson/CreateContactPerson.vue');
const ContactPersonList = () => import('./views/CRM/ContactPerson/ContactPersonList.vue');
const EditContactPerson = () => import('./views/CRM/ContactPerson/EditContactPerson.vue');
const CreateEmployees = () => import('./views/HRM/Employees/CreateEmployees.vue');
const EmployeeLists = () => import('./views/HRM/Employees/EmployeeLists.vue');
const EditEmployeeLists = () => import('./views/HRM/Employees/EditEmployeeLists.vue');
const CreateSalesReturn = () => import('./views/SalesReturn/CreateSalesReturn.vue');
const ReturnSalesLists = () => import('./views/SalesReturn/ReturnSalesLists.vue');
const ViewSale = () => import('./views/SalesReturn/ViewSale.vue');
const ReturnSaleView = () => import('./views/SalesReturn/ReturnSaleView.vue');
const CreateProducts = () => import('./views/Inventory/Products/CreateProducts.vue');
const ProductLists = () => import('./views/Inventory/Products/ProductLists.vue');
const EditProductLists = () => import('./views/Inventory/Products/EditProductList.vue');

// test perpose
const AddRemove = () => import('./views/Multiple/AddRemove.vue');


const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/CreateContactPerson',
        name: 'CreateContactPerson',
        component: CreateContactPerson
    },
    {
        path: '/ContactPersonList',
        name: 'ContactPersonList',
        component: ContactPersonList
    },
    {
        path: '/EditContactPerson',
        name: 'EditContactPerson',
        component: EditContactPerson
    },
    // Create Employees Routes
    {
        path: '/CreateEmployees',
        name: 'CreateEmployees',
        component: CreateEmployees
    },
    // Employees List Routes
    {
        path: '/EmployeeLists',
        name: 'EmployeeLists',
        component: EmployeeLists
    },
    //Edit Employee Lists Routes
    {
        path: '/EditEmployeeLists',
        name: 'EditEmployeeLists',
        component: EditEmployeeLists
    },
    //Create Sales Return Routes
    {
        path: '/CreateSalesReturn',
        name: 'CreateSalesReturn',
        component: CreateSalesReturn
    },
    // Sales Return lists Routes
    {
        path: '/ReturnSalesLists',
        name: 'ReturnSalesLists',
        component: ReturnSalesLists
    },
    // View Sale Routes
    {
        path: '/ViewSale',
        name: 'ViewSale',
        component: ViewSale
    },
    // Return Sale View Routes
    {
        path: '/ReturnSaleView',
        name: 'ReturnSaleView',
        component: ReturnSaleView
    },
    // Create Products Routes
    {
        path: '/CreateProducts',
        name: 'CreateProducts',
        component: CreateProducts
    },
    // Product Lists Routes
    {
        path: '/ProductLists',
        name: 'ProductLists',
        component: ProductLists
    },
    // Edit Product Lists Routes
    {
        path: '/EditProductLists',
        name: 'EditProductLists',
        component: EditProductLists
    },
    //test perpose
    {
        path: '/AddRemove',
        name: 'AddRemove',
        component: AddRemove
    },
]

export default new VueRouter({
    // mode: 'history',
    routes
});



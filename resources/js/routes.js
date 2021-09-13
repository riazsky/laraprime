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
const CreateVoucher = () => import('./views/Accounts/Voucher/CreateVoucher.vue');
const CreateProductTransfer = () => import('./views/Inventory/ProductTransfer/CreateProductTransfer.vue');
const ProductTransferList = () => import('./views/Inventory/ProductTransfer/ProductTransferList.vue');
const EditProductTransferList = () => import('./views/Inventory/ProductTransfer/EditProductTransferList.vue');

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
    // Create Voucher Routes
    {
        path: '/CreateVoucher',
        name: 'CreateVoucher',
        component: CreateVoucher
    },
    // Create Product Transfer Routes
    {
        path: '/CreateProductTransfer',
        name: 'CreateProductTransfer',
        component: CreateProductTransfer
    },
    // Product Transfer Lists Routes
    {
        path: '/ProductTransferList',
        name: 'ProductTransferList',
        component: ProductTransferList
    },
    // Edit Product Transfer Lists Routes
    {
        path: '/EditProductTransferList',
        name: 'EditProductTransferList',
        component: EditProductTransferList
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



import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateDesignation = () => import('./views/HRM/designations/CreateDesignation.vue');
const DesignationList = () => import('./views/HRM/designations/DesignationList.vue');
const CreateDepartment = () => import('./views/HRM/departments/CreateDepartment.vue');
const DepartmentList = () => import('./views/HRM/departments/DepartmentList.vue');
const CreateContactPerson = () => import('./views/CRM/ContactPerson/CreateContactPerson.vue');
const ContactPersonList = () => import('./views/CRM/ContactPerson/ContactPersonList.vue');
const EditContactPerson = () => import('./views/CRM/ContactPerson/EditContactPerson.vue');
const CreateEmployees = () => import('./views/HRM/Employees/CreateEmployees.vue');
const EmployeeLists = () => import('./views/HRM/Employees/EmployeeLists.vue');
const EditEmployeeLists = () => import('./views/HRM/Employees/EditEmployeeLists.vue');
const CreateSalesReturn = () => import('./views/SalesReturn/CreateSalesReturn.vue');
const ReturnSalesLists = () => import('./views/SalesReturn/ReturnSalesLists.vue');
const ViewSale = () => import('./views/SalesReturn/ViewSale.vue');
const CreateCustomer = () => import('./views/CRM/customers/CreateCustomer.vue');
const CustomerList = () => import('./views/CRM/customers/CustomerList.vue');
const EditCustomer = () => import('./views/CRM/customers/EditCustomer.vue');
const CreateCategory = () => import('./views/Base/category/CreateCategory.vue');
const ListCategory = () => import('./views/Base/category/ListCategory.vue');
const CreateWarehouse = () => import('./views/Base/warehouse/CreateWarehouse.vue');
const ListWarehouse = () => import('./views/Base/warehouse/ListWarehouse.vue');
const CreatePurchase = () => import('./views/Purchase/CreatePurchase.vue');
const ListPurchase = () => import('./views/Purchase/ListPurchase.vue');

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
        path: '/designation-list',
        name: 'designationList',
        component: DesignationList
    },
    {
        path: '/create-designation',
        name: 'CreateDesignation',
        component: CreateDesignation
    },
    {
        path: '/create-department',
        name: 'CreateDepartment',
        component: CreateDepartment
    },
    {
        path: '/CreateCustomer',
        name: 'CreateCustomer',
        component: CreateCustomer
    },
    {
        path: '/EditCustomer',
        name: 'EditCustomer',
        component: EditCustomer
    },
    {
        path: '/CustomerList',
        name: 'CustomerList',
        component: CustomerList
    },
    {
        path: '/department-list',
        name: 'DepartmentList',
        component: DepartmentList
    },
    {
        path: '/CreateEmployees',
        name: 'CreateEmployees',
        component: CreateEmployees
    },
    {
        path: '/EmployeeLists',
        name: 'EmployeeLists',
        component: EmployeeLists
    },
    {
        path: '/EditEmployeeLists',
        name: 'EditEmployeeLists',
        component: EditEmployeeLists
    },
    {
        path: '/CreateSalesReturn',
        name: 'CreateSalesReturn',
        component: CreateSalesReturn
    },
    {
        path: '/ReturnSalesLists',
        name: 'ReturnSalesLists',
        component: ReturnSalesLists
    },
    {
        path: '/ViewSale',
        name: 'ViewSale',
        component: ViewSale
    },
    {
        path: '/create-contact-person',
        name: 'CreateContactPerson',
        component: CreateContactPerson
    },
    {
        path: '/list-contact-person',
        name: 'ContactPersonList',
        component: ContactPersonList
    },
    {
        path: '/edit-contact-person',
        name: 'EditContactPerson',
        component: EditContactPerson
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
        path: '/list-branch',
        name: 'ListBranch',
        component: ListBranch
    }


]

export default new VueRouter({
    // mode: 'history',
    routes
});



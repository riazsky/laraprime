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



const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/create-designation',
        name: 'CreateDesignation',
        component: CreateDesignation
    },
    {
        path: '/designation-list',
        name: 'designationList',
        component: DesignationList
    },
    {
        path: '/create-department',
        name: 'CreateDepartment',
        component: CreateDepartment
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

]

export default new VueRouter({
    // mode: 'history',
    routes
});



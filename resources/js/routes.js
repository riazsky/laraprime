import VueRouter from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "Welcome"*/'./views/Welcome.vue'),
        meta: { title: 'Dashboard - ERP' }
    },

    // customer group route

    {
        path: '/create-customer-group',
        name: 'CreateCustomerGroup',
        component: () => import(/* webpackChunkName: "CreateCustomerGroup"*/'./views/CRM/CustomerGroups/CreateCustomerGroup.vue'),
        meta: { title: 'Create Customer' }
    },
    {
        path: '/list-customer-group',
        name: 'ListCustomerGroup',
        component: () => import(/* webpackChunkName: "ListCustomerGroup"*/'./views/CRM/CustomerGroups/ListCustomerGroup.vue'),
        meta: { title: 'Customer Group List' }
    },
    //department route
    {
        path: '/create-department',
        name: 'CreateDepartment',
        component: () => import(/* webpackChunkName: "CreateDepartment"*/'./views/HRM/departments/CreateDepartment.vue'),
        meta: { title: 'Create Department' }
    },
    {
        path: '/department-list',
        name: 'DepartmentList',
        component: () => import(/* webpackChunkName: "DepartmentList"*/'./views/HRM/departments/DepartmentList.vue'),
        meta: { title: 'Department list' }
    },
    // desigantion route
    {
        path: '/create-designation',
        name: 'CreateDesignation',
        component: () => import(/* webpackChunkName: "CreateDesignation"*/'./views/HRM/designations/CreateDesignation.vue'),
        meta: { title: 'Create Designation' }
    },

    {
        path: '/designation-list',
        name: 'designationList',
        component: () => import(/* webpackChunkName: "DesignationList"*/'./views/HRM/designations/DesignationList.vue'),
        meta: { title: 'Designation list' }
    },

    // customer route
    {
        path: '/CreateCustomer',
        name: 'CreateCustomer',
        component: () => import(/* webpackChunkName: "CreateCustomer"*/'./views/CRM/customers/CreateCustomer.vue'),
        meta: { title: 'Create Customer' }
    },
    {
        path: '/EditCustomer',
        name: 'EditCustomer',
        component: () => import(/* webpackChunkName: "EditCustomer"*/'./views/CRM/customers/EditCustomer.vue'),
        meta: { title: 'Edit Customer' }
    },
    {
        path: '/CustomerList',
        name: 'CustomerList',
        component: () => import(/* webpackChunkName: "CustomerList"*/'./views/CRM/customers/CustomerList.vue'),
        meta: { title: 'Customer list' }
    },

    // employee route

    {
        path: '/CreateEmployees',
        name: 'CreateEmployees',
        component: () => import(/* webpackChunkName: "CreateEmployees"*/'./views/HRM/Employees/CreateEmployees.vue'),
        meta: { title: 'Create Employee' }
    },
    {
        path: '/EmployeeLists',
        name: 'EmployeeLists',
        component: () => import(/* webpackChunkName: "EmployeeLists"*/'./views/HRM/Employees/EmployeeLists.vue'),
        meta: { title: 'Employee list' }
    },
    {
        path: '/EditEmployeeLists',
        name: 'EditEmployeeLists',
        component: () => import(/* webpackChunkName: "EditEmployeeLists"*/'./views/HRM/Employees/EditEmployeeLists.vue'),
        meta: { title: 'Edit Employee List' }
    },

    // sales return route
    {
        path: '/CreateSalesReturn',
        name: 'CreateSalesReturn',
        component: () => import(/* webpackChunkName: "CreateSalesReturn"*/'./views/SalesReturn/CreateSalesReturn.vue'),
        meta: { title: 'Create sales return product' }
    },
    {
        path: '/sales-return-list',
        name: 'SalesReturnList',
        component: () => import(/* webpackChunkName: "SalesReturnList"*/'./views/SalesReturn/SalesReturnList.vue'),
        meta: { title: 'Sales return list' }
    },

    // contact person route
    {
        path: '/create-contact-person',
        name: 'CreateContactPerson',
        component: () => import(/* webpackChunkName: "CreateContactPerson"*/'./views/CRM/ContactPerson/CreateContactPerson.vue'),
        meta: { title: 'Create Contact Person' }
    },
    {
        path: '/list-contact-person',
        name: 'ContactPersonList',
        component: () => import(/* webpackChunkName: "ContactPersonList"*/'./views/CRM/ContactPerson/ContactPersonList.vue'),
        meta: { title: 'Contact Person List' }
    },
    {
        path: '/edit-contact-person',
        name: 'EditContactPerson',
        component: () => import(/* webpackChunkName: "EditContactPerson"*/'./views/CRM/ContactPerson/EditContactPerson.vue'),
        meta: { title: 'Edit Contact Person List' }
    },

    // category route
    {
        path: '/create-category',
        name: 'CreateCategory',
        component: () => import(/* webpackChunkName: "CreateCategory"*/'./views/Base/category/CreateCategory.vue'),
        meta: { title: 'Create Category' }
    },
    {
        path: '/list-category',
        name: 'ListCategory',
        component: () => import(/* webpackChunkName: "ListCategory"*/'./views/Base/category/ListCategory.vue'),
        meta: { title: 'List Category' }
    },

    // warehouse route
    {
        path: '/create-warehouse',
        name: 'CreateWarehouse',
        component: () => import(/* webpackChunkName: "CreateWarehouse"*/'./views/Base/warehouse/CreateWarehouse.vue'),
        meta: { title: 'Create Warehouse' }
    },
    {
        path: '/list-warehouse',
        name: 'ListWarehouse',
        component: () => import(/* webpackChunkName: "ListWarehouse"*/'./views/Base/warehouse/ListWarehouse.vue'),
        meta: { title: 'List Warehouse' }
    },

    // company route
    {
        path: '/create-company',
        name: 'CreateCompany',
        component: () => import(/* webpackChunkName: "CreateCompany"*/'./views/CRM/Company/CreateCompany.vue'),
        meta: { title: 'Create Company' }
    },
    {
        path: '/list-company',
        name: 'ListCompany',
        component: () => import(/* webpackChunkName: "ListCompany"*/'./views/CRM/Company/ListCompany.vue'),
        meta: { title: 'List Company' }
    },

    // branch route
    {
        path: '/create-branch',
        name: 'CreateBranch',
        component: () => import(/* webpackChunkName: "CreateBranch"*/'./views/CRM/Branch/CreateBranch.vue'),
        meta: { title: 'Create Branch' }
    },
    {
        path: '/list-branch',
        name: 'ListBranch',
        component: () => import(/* webpackChunkName: "ListBranch"*/'./views/CRM/Branch/ListBranch.vue'),
        meta: { title: 'List Branch' }
    },

    // purchase route
    {
        path: '/create-purchase',
        name: 'CreatePurchase',
        component: () => import(/* webpackChunkName: "CreatePurchase"*/'./views/Purchase/CreatePurchase.vue'),
        meta: { title: 'Create Purchase' }
    },
    {
        path: '/list-purchase',
        name: 'ListPurchase',
        component: () => import(/* webpackChunkName: "ListPurchase"*/'./views/Purchase/ListPurchase.vue'),
        meta: { title: 'List Purchase' }
    },



]

export default new VueRouter({
    // mode: 'history',
    routes
});



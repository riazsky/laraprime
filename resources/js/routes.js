import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateDesignation = () => import('./views/HRM/designations/CreateDesignation.vue');
const DesignationList = () => import('./views/HRM/designations/DesignationList.vue');
const CreateDepartment = () => import('./views/HRM/departments/CreateDepartment.vue');
const DepartmentList = () => import('./views/HRM/departments/DepartmentList.vue');
const CreateContactPerson = () => import('./views/CRM/ContactPerson/CreateContactPerson.vue');
const ContactPersonList = () => import('./views/CRM/ContactPerson/ContactPersonList.vue');
const EditContactPerson = () => import('./views/CRM/ContactPerson/EditContactPerson.vue');


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
        path: '/department-list',
        name: 'DepartmentList',
        component: DepartmentList
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


]

export default new VueRouter({
    // mode: 'history',
    routes
});



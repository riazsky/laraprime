import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
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
]

export default new VueRouter({
    // mode: 'history',
    routes
});



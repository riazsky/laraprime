<template>
<div>
    <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
    <div class="p-d-flex p-jc-between p-mb-4">
        <h2>Create Branch</h2>
        <button class="btn btn-success"><router-link to="/list-branch" class="text-white">List Branch</router-link></button>
    </div>
    <Card>
        <template #content>
            <div class="p-d-flex p-jc-center">
                <div class="p-col-8">
                    <div class="p-fluid">
                        <div class="p-field p-grid">
                            <label for="title" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Title</label>
                            <div class="p-col-12 p-md-10">
                                <InputText id="title" type="text" autofocus />
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="location" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Location</label>
                            <div class="p-col-12 p-md-10">
                                <InputText id="location" type="text" />
                            </div>
                        </div>
                        <div class="p-field p-grid p-ai-start">
                            <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Description</label>
                            <div class="p-col-12 p-md-10 ">
                                <Textarea v-model="description" :autoResize="true" rows="5"  cols="30"/>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="status" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Status</label>
                            <div class="p-mt-2 p-ml-2">
                                <Checkbox v-model="status"  :binary="true" />
                                <span v-if="status" class="p-ml-2">Active</span>
                                <span v-else class="p-ml-2">Inactive </span>
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <button class="form-control btn btn-success">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</div>
</template>

<script>
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

export default {
    name: 'CreateBranch',
    components: {
        Checkbox,
        Textarea
    },
    data() {
        return{
            description: '',
            status: true,
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'CRM'},
                {label: 'Customer Group'},
                {label: 'List Branch', to:"/list-branch"},
                {label: 'Create Branch'}
            ]
        }
    }

}
</script>
<template>
<div>
    <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
    <div class="p-d-flex p-jc-between p-mb-4">
        <h2>Create Company</h2>
        <button class="btn btn-success"><router-link to="/list-company" class="text-white">List Company</router-link></button>
    </div>
    <Card>
    <template #content>
        <div class="p-fluid p-col-6 p-m-auto">
          <div class="p-field p-col-12 p-mb-4">
            <span class="p-float-label">
              <InputText id="title" type="text" />
              <label for="title">Title</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-mb-4">
            <span class="p-float-label">
              <Textarea v-model="description" :autoResize="true" rows="5" />
              <label for="lastname">Description</label>
            </span>
          </div>
          <div class="p-field p-grid p-ai-center p-col-12">
            <div class="p-d-flex p-col-12 p-ai-start">
                <label for="status" class="p-mr-4">Status</label>
                <Checkbox v-model="status" :binary="true" />
                <span v-if="status" class="p-ml-2">Active</span>
                <span v-else class="p-ml-2">Inactive </span>
            </div>
          </div>
          <div class="p-field p-col-12 p-md-12">
            <button label="Submit" class="form-control btn btn-success">
              Create
            </button>
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
    name: 'CreateCompany',
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
                {label: 'List Company', to:"/list-company"},
                {label: 'Create Company'}
            ]
        }
    }
}
</script>

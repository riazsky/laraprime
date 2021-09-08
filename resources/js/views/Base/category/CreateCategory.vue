<template>
<div>
    <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
    <div class="p-d-flex p-jc-between p-mb-4">
        <h2>Create Category</h2>
        <Button><router-link to="/list-category" class="text-white">List Category</router-link></Button>
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
                            <label for="select_parent_category" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Parent Category</label>
                            <div class="p-col-12 p-md-10">
                                <Dropdown v-model="parentCategory" :options="parent_category" optionLabel="name" placeholder="Select a Parent Category" />
                            </div>
                        </div>
                        <div class="p-field p-grid">
                            <label for="logo" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Logo</label>
                            <div class="p-col-12 p-md-10 ">
                                <input type="file" name="" id="choose_file" class="form-control" formenctype="multipart/form-data" style="height: 44px; border: 1px solid #a6a6a6">
                                
                            </div>
                        </div>
                        <div class="p-field p-grid p-ai-start">
                            <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Description</label>
                            <div class="p-col-12 p-md-10 ">
                                <Textarea v-model="description" :autoResize="true" rows="5" cols="83" style="border: 1px solid #a6a6a6"/>
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
                            <Button label="Submit" />
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
import Dropdown from 'primevue/dropdown';

export default {
    name: 'CreateBranch',
    components: {
        Checkbox,
        Dropdown,

    },
    data() {
        return{
            status: true,
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Base'},
                {label: 'Category'},
                {label: 'List Category', to:"/list-category"},
                {label: 'Create Category'}
            ],
            description: '',
            parentCategory: {},
		    parent_category: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ]
        }
    }

}
</script>
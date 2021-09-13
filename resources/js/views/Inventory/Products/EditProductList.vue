<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-5">
            <div class="p-mr-2"><h3>Edit Product Lists</h3></div>
            <div><router-link to="/ProductLists" style="color: #fff;text-decoration:none;"><button class="btn btn-secondary">Product Lists</button></router-link></div>
        </div>
        <card class="p-mt-3">
            <template #content>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <Dropdown v-model="ProductType" :options="Products" optionLabel="name"/>
                            <label for="firstname">Product Type</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                    <span class="p-float-label">
                        <InputText id="firstname" type="text" />
                        <label for="firstname"> Product name</label>
                    </span>
                    </div>
                    <div class="p-field p-col-12 p-mt-3">
                    <span class="p-float-label">
                        <Textarea id="address" v-model="Description" class="form-control" rows="2" />
                        <label for="address">Description</label>
                        
                    </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                    <span class="p-float-label">
                            <InputText id="firstname" type="text" />
                            <label for="firstname">Meta Title</label>
                    </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                    <span class="p-float-label">
                        <InputText id="firstname" type="text" />
                        <label for="firstname">Meta Keywords</label>
                    </span>
                    </div>
                    <div class="p-field p-col-12 p-mt-3">
                    <span class="p-float-label">
                            <Textarea id="address" v-model="MetaDescription" class="form-control" rows="2" />
                            <label for="address">Meta Description</label>
                    </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                    <span class="p-float-label">
                        <Chips v-model="ProductTags" />
                        <label for="firstname">Product Tags</label>
                    </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                    <span class="p-float-label">
                        <Dropdown v-model="model" :options="models" optionLabel="name" />
                        <label for="firstname">Model</label>
                    </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                    <span class="p-float-label">
                        <InputText id="firstname" type="text" />
                        <label for="firstname">Product code</label>
                    </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <Dropdown v-model="Brand" :options="Brands" optionLabel="name"/>
                            <label for="firstname">Brand</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <MultiSelect v-model="Category" :options="Categories" optionLabel="name" />
                            <label for="firstname">Category</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                                <Dropdown v-model="Orgin" :options="Orgins" optionLabel="name"/>
                                <label for="firstname">Orgin</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
                            <label for="lastname">Price</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputText id="firstname" type="text" />
                            <label for="lastname">Product Link</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputText id="firstname" type="text" />
                            <label for="lastname">Status</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <input type="file" class="form-control-file" style="padding:6px; border: 1px solid gray;"/>Product image
                        </span>
                    </div>
                </div>
                <Button label="Submit" />
            </template>
        </card>
    </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Chips from 'primevue/chips';
import Textarea from 'primevue/textarea';

export default {
    name: 'EditProductLists',
    components:{
        Dropdown,
        Button,
        Calendar,
        Chips,
        Textarea

    },

    data() {
        return {
            ProductTags: null,
            value2: null,
            date: null,
            department: null,
            Description: null,
            MetaDescription: null,

            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Inventory'},
                {label: 'Products'},
                {label: 'Products List',to:'/ProductLists'},
                {label: 'Create Products',to:'/CreateProducts'},
                {label: 'Edit Product Lists'},
            ],

            ProductType: null,
            Products: [
                {name: 'CEO', code: 'CEO'},
                {name: 'Manager', code: 'MG'},
                {name: 'Ass. Manager', code: 'AM'},
                {name: 'Employe', code: 'E'},
            ],
            model: null,
            models: [
                {name: 'CEO', code: 'CEO'},
                {name: 'Manager', code: 'MG'},
                {name: 'Ass. Manager', code: 'AM'},
                {name: 'Employe', code: 'E'},
            ],
            Brand: null,
            Brands: [
                {name: 'CEO', code: 'CEO'},
                {name: 'Manager', code: 'MG'},
                {name: 'Ass. Manager', code: 'AM'},
                {name: 'Employe', code: 'E'},
            ],
            Orgin: null,
            Orgins: [
                {name: 'CEO', code: 'CEO'},
                {name: 'Manager', code: 'MG'},
                {name: 'Ass. Manager', code: 'AM'},
                {name: 'Employe', code: 'E'},
            ],
            Category: null,
            Categories: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],


        }
    },
    methods: {
    
    onRowEditInit(event) {
        this.originalRows[event.index] = {...this.products3[event.index]};
    },
    onRowEditCancel(event) {
        Vue.set(this.products3, event.index, this.originalRows[event.index]);
    },
}


}
</script>
<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <!-- Create Filter Option Start -->
            <Card class="p-mt-3">
                <template #content>
                    <div><h4><strong>Filters Option</strong></h4></div>
                    <div class="p-fluid p-formgrid p-grid">
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="ProductType" :options="ProductTypes" optionLabel="name" />
                                <label for="lastname">Product Type</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="Brand" :options="Brands" optionLabel="name" />
                                <label for="lastname">Brand</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="Category" :options="Categories" optionLabel="name" />
                                <label for="lastname">Category</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="Orgin" :options="Orgins" optionLabel="name" />
                                <label for="lastname">Orgin</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-1">
                            <button class="btn btn-primary">Fillter</button>
                        </div>
                    </div>
                </template>
            </Card>
        <!-- Create Filter Option End -->
        <div class="p-d-flex p-jc-between p-mt-5 p-mb-3">
            <div class="p-mr-2"><h3>Product Lists</h3></div>
            <div><router-link to="/CreateProducts" style="color: #fff;text-decoration:none;"><button class="btn btn-secondary">Create Products</button></router-link></div>
        </div>
        <DataTable :value="TableData" :scrollable="true" :paginator="true" :rows="7"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" :filters="filters" :selection.sync="selectedProducts3"
            editMode="row" dataKey="id" :editingRows.sync="editingRows"
            @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel"
        >
            <template #header>
                <div class="table-header p-d-flex  p-jc-between">
                    <div><h2><i class="pi pi-book" /></h2></div>
                    <div>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global']" placeholder="Global Search" />
                        </span>
                    </div>
        
                </div>
            </template>
            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
            <Column field="ProductType" headerStyle="width: 200px" header="Product Type" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="ProductName" headerStyle="width: 200px" header=" Product Name" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Description" headerStyle="width: 200px" header="Description" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="MetaTagTitle" headerStyle="width: 200px" header="Meta Title" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="MetaTagDescription" headerStyle="width: 240px" header="Meta Description" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="MetaTagKeywords" headerStyle="width: 220px" header="Meta Keywords" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="ProductTags" headerStyle="width: 200px" header="Product Tags" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Model" headerStyle="width: 180px" header="Model" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="ProductCode" headerStyle="width: 200px" header="Product Code" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Brand" headerStyle="width: 180px" header="Brand" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Category" headerStyle="width: 180px" header="Category" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Orgin" headerStyle="width: 180px" header="Orgin" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Price" headerStyle="width: 180px" header="Price" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>

            <Column field="ProductImage" headerStyle="width: 180px" header="Product Image">
                <template #body="slotProps">
                <img :src="slotProps.data.ProductImage" alt="Not found" width="48" height="48" />
                </template>
            </Column>
            <Column field="ProductLink" headerStyle="width: 200px" header="Product Linke" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Status" headerStyle="width: 200px" header="Status" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column :rowEditor="true" :colspan="4"  field="Action" headerStyle="width: 150px" header="Action">
                <template #body>
                    <button class="btn btn-danger">Delete</button>
                </template>
            </Column>
            <Column field="ActionD" headerStyle="width: 150px" >

            </Column>
            

            <template #footer>
                <!-- In total there are {{products ? products.length : 0 }} products. -->
            </template>
        </DataTable>
    </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';

export default {

    name:"ProductLists",
    components:{
        Dropdown
    },
    onRowEditInit: null,
    onRowEditCancel: null,
    value2: null,
    data(){
        return{
            filters: {},
            editingRows: [],
            selectedProducts3: null,
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Inventory'},
                {label: 'Products'},
                {label: 'Create Products',to:'/CreateProducts'},
                {label: 'Edit Product List',to:'/EditProductLists'},
                {label: 'Products List'},
            ],
            ProductType: null,
            ProductTypes: [
                {name: 'Mobie', code: 'N'},
                {name: 'Laptop', code: 'Sr'},
                {name: 'Mohakhali', code: 'Mi'},
                {name: 'Munshiganj', code: 'Mj'},
            ],
            Category: null,
            Categories: [
                {name: 'Nikunjo', code: 'N'},
                {name: 'Savar', code: 'Sr'},
                {name: 'Mohakhali', code: 'Mi'},
                {name: 'Munshiganj', code: 'Mj'},
            ],
            Shift: null,
            Shifts: [
                {name: 'Day', code: 'N'},
                {name: 'Night', code: 'Sr'},
            ],
            Orgin: null,
            Orgins: [
                {name: 'Nikunjo', code: 'N'},
                {name: 'Savar', code: 'Sr'},
                {name: 'Mohakhali', code: 'Mi'},
                {name: 'Munshiganj', code: 'Mj'},
            ],
      TableData: [ 

        {
          id: "1",
          ProductType: "Shirt",
          ProductName: "M Korim",
          Description: "sdfasdfdsfasdf",
          MetaTagTitle: "dsfasdf",
          MetaTagDescription: "asdfasdf",    
          MetaTagKeywords: "dsfasdf",
          ProductTags: "dsfasdfdsf",
          Model: "dsfasdfasdfasdf",
          ProductCode: "10/asdfasdf4/19",
          Brand: "asdfasdf",
          Category: "dsafasdf",
          Orgin: "Monthly",
          Price: "54521",
          ProductImage: "images/index.jpg",
          ProductLink: "asdfasdf.com",
          Status: "Active",
          Action: "Delete",
        },
        {
          id: "2",
          ProductType: "Shirt",
          ProductName: "M Korim",
          Description: "sdfasdfdsfasdf",
          MetaTagTitle: "dsfasdf",
          MetaTagDescription: "asdfasdf",    
          MetaTagKeywords: "dsfasdf",
          ProductTags: "dsfasdfdsf",
          Model: "dsfasdfasdfasdf",
          ProductCode: "10/asdfasdf4/19",
          Brand: "asdfasdf",
          Category: "dsafasdf",
          Orgin: "Monthly",
          Price: "54521",
          ProductImage: "images/index.jpg",
          ProductLink: "asdfasdf.com",
          Status: "Active",
          Action: "Delete",
        },
        {
          id: "3",
          ProductType: "Shirt",
          ProductName: "M Korim",
          Description: "sdfasdfdsfasdf",
          MetaTagTitle: "dsfasdf",
          MetaTagDescription: "asdfasdf",    
          MetaTagKeywords: "dsfasdf",
          ProductTags: "dsfasdfdsf",
          Model: "dsfasdfasdfasdf",
          ProductCode: "10/asdfasdf4/19",
          Brand: "asdfasdf",
          Category: "dsafasdf",
          Orgin: "Monthly",
          Price: "54521",
          ProductImage: "images/index.jpg",
          ProductLink: "asdfasdf.com",
          Status: "Active",
          Action: "Delete",
        },
      ]
        }
    },
    methods: {
        
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.TableData[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.TableData, event.index, this.originalRows[event.index]);
        },
    }

}
</script>
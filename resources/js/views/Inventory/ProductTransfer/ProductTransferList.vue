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
                                <Dropdown v-model="FromWarehouse" :options="FromWarehouses" optionLabel="name" />
                                <label for="lastname">From Warehouse</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="ToWarehouse" :options="ToWarehouses" optionLabel="name" />
                                <label for="lastname">To Warehouse</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Calendar id="icon" v-model="date" :showIcon="true" />
                                <label for="lastname">From date</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Calendar id="icon" v-model="date" :showIcon="true" />
                                <label for="lastname">To date</label>
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
            <div class="p-mr-2"><h3>Product Transfer Lists</h3></div>
            <div><router-link to="/CreateProductTransfer" style="color: #fff;text-decoration:none;"><button class="btn btn-secondary">Create Product Transfer</button></router-link></div>
        </div>
        <DataTable :value="TableData" :scrollable="true" :paginator="true" :rows="7"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" :filters="filters" :selection.sync="selectedProducts3"

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
            <Column field="TransferDate" headerStyle="width: 200px" header="Transfer Date" sortable></Column> 
            <Column field="FromWarehouse" headerStyle="width: 200px" header="From Warehouse" sortable></Column>
            <Column field="ToWarehouse" headerStyle="width: 200px" header="To Warehouse" sortable></Column>
            <Column field="FromRequisitionDate" headerStyle="width: 250px" header="From Requisition Date" sortable></Column>
            <Column field="ToRequisitionDate" headerStyle="width: 240px" header="To Requisition Date" sortable></Column>
            <Column field="ResponsibleEmployee" headerStyle="width: 250px" header="Responsible Employee" sortable></Column>
            <Column field="Status" headerStyle="width: 200px" header="Status" sortable></Column>
            <Column field="Action" headerStyle="width: 150px" header="Action">
                <template #body>
                    <button class="btn btn-danger">Delete</button>
                </template>
            </Column>

            <template #footer>
                <!-- In total there are {{products ? products.length : 0 }} products. -->
            </template>
        </DataTable>
    </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';
import Calendar from "primevue/calendar";

export default {
    components:{
        Dropdown,
        Calendar
    },
    name:"ProductTransferList",
    onRowEditInit: null,
    onRowEditCancel: null,
    value2: null,
    date: null,
    data(){
        return{
            filters: {},
            editingRows: [],
            selectedProducts3: null,
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                { label: "Inventory" },
                { label: "Product Transfer" },
                { label: "Create Product Transfer", to: "/CreateProductTransfer" },
                { label: "Edit Product Transfer List", to: "/EditProductTransferList" },
                { label: "Product Transfer List" },
            ],
            FromWarehouse: null,
            FromWarehouses: [
                {name: 'Nikunjo', code: 'N'},
                {name: 'Savar', code: 'Sr'},
                {name: 'Mohakhali', code: 'Mi'},
                {name: 'Munshiganj', code: 'Mj'},
            ],
            ToWarehouse: null,
            ToWarehouses: [
                {name: 'Nikunjo', code: 'N'},
                {name: 'Savar', code: 'Sr'},
                {name: 'Mohakhali', code: 'Mi'},
                {name: 'Munshiganj', code: 'Mj'},
            ],

        TableData: [    

            {
            id: "1",
            TransferDate: "5/8/21",
            FromWarehouse: "M Korim",
            ToWarehouse: "sdfasdfdsfasdf",
            FromRequisitionDate: "5/5/51", 
            ToRequisitionDate: "4/5/22",    
            ResponsibleEmployee: "dsfasdf",
            Status: "Active",
            Action: "Delete",
            },
            {
            id: "2",
            TransferDate: "5/8/21",
            FromWarehouse: "M Korim",
            ToWarehouse: "sdfasdfdsfasdf",
            FromRequisitionDate: "5/5/51", 
            ToRequisitionDate: "4/5/22",    
            ResponsibleEmployee: "dsfasdf",
            Status: "Active",
            Action: "Delete",
            },
            {
            id: "3",
            TransferDate: "5/8/21",
            FromWarehouse: "M Korim",
            ToWarehouse: "sdfasdfdsfasdf",
            FromRequisitionDate: "5/5/51", 
            ToRequisitionDate: "4/5/22",    
            ResponsibleEmployee: "dsfasdf",
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
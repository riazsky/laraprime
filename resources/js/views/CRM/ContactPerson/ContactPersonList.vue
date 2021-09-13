<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <!-- Create Filter Option Start -->
            <Card class="p-mt-3">
                <template #content>
                    <div><h4><strong>Filters Option</strong></h4></div>
                    <div class="p-fluid p-formgrid p-grid">
                        <div class="p-field p-col-12 p-md-5 p-py-0 p-px-1 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="CompanyName" :options="company" optionLabel="name" />
                                <label for="lastname">Company Name</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-5 p-py-0 p-px-1 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="BranchName" :options="branch" optionLabel="name" />
                                <label for="lastname">Current Branch Name</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-2 p-py-0 p-px-1 p-mt-3 text-center">
                            <button class="btn btn-primary">Fillter</button>
                        </div>
                    </div>
                </template>
            </Card>
        <!-- Create Filter Option End -->
        <div class="p-d-flex p-jc-between p-mt-5 p-mb-3">
            <div class="p-mr-2"><h3>Contact Person Lists</h3></div>
            <div><button class="btn btn-secondary"><router-link to="/CreateContactPerson" style="color: #fff;text-decoration:none;">Create Contact Persons</router-link></button></div>
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
            <Column field="PersonName" headerStyle="width: 150px" header="Name" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="CompanyName" headerStyle="width: 150px" header="Company" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Email" headerStyle="width: 150px" header="Email" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="MobileNumber" headerStyle="width: 150px" header="Mobile" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="AltMobileNumber" headerStyle="width: 150px" header="Alt Mobile" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="DepartmentName" headerStyle="width: 170px" header="Department" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Designation" headerStyle="width: 170px" header="Designation" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="CurrentBranchName" headerStyle="width: 150px" header="Branch" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Discount" headerStyle="width: 150px" header="Discount" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column :rowEditor="true" :colspan="4"  field="Action" headerStyle="width: 150px" header="Action">

            </Column>
            <Column field="Actions" headerStyle="width: 150px" >
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

export default {

    name:"ContactPersonList",
    components:{
        Dropdown
    },
    data(){
        return{
            value2: null,
            filters: {},
            editingRows: [],
            selectedProducts3: null,
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'CRM'},
                {label: 'Contact Persons'},
                {label: 'Create Contact Persons',to:'/CreateContactPerson'},
                {label: 'Contact Person Lists'},
            ],
		CompanyName: null,
		company: [
			{name: 'Nikunjo', code: 'N'},
			{name: 'Savar', code: 'Sr'},
			{name: 'Mohakhali', code: 'Mi'},
			{name: 'Munshiganj', code: 'Mj'},
		],
		BranchName: null,
		branch: [
			{name: 'Nikunjo', code: 'N'},
			{name: 'Savar', code: 'Sr'},
			{name: 'Mohakhali', code: 'Mi'},
			{name: 'Munshiganj', code: 'Mj'},
		],
            TableData :[
                {"id":"1","PersonName": "Volkswagen", "CompanyName": 2012, "Email": "Orange", "MobileNumber": "151521324651", "AltMobileNumber": "546515651", "DepartmentName": "CRM", "Designation": "CEO", "CurrentBranchName": "Dhaka", "Discount": "50%", "Actions": "Delete"},
                {"id":"2","PersonName": "Volkswagen2", "CompanyName": 2012, "Email": "Orange", "MobileNumber": "151156465124651", "AltMobileNumber": "546515651", "DepartmentName": "CRM", "Designation": "CEO", "CurrentBranchName": "Dhaka", "Discount": "50%", "Actions": "Delete"},
                {"id":"3","PersonName": "Volkswagen3", "CompanyName": 2012, "Email": "Orange", "MobileNumber": "15124651", "AltMobileNumber": "546554615651", "DepartmentName": "CRM", "Designation": "CEO", "CurrentBranchName": "Dhaka", "Discount": "50%","Actions": "Delete"},
                
            ]
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
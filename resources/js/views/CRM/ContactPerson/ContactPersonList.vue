<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-5 p-mb-5">
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
            <Column field="DepartmentName" headerStyle="width: 160px" header="Department" sortable>
                <template #editor="slotProps">
                    <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" autofocus />
                </template>
            </Column>
            <Column field="Designation" headerStyle="width: 160px" header="Designation" sortable>
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
            <Column field="Action" headerStyle="width: 150px" >
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


export default {

    name:"ContactPersonList",
    data(){
        return{
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
            TableData :[
                {"id":"1","PersonName": "Volkswagen", "CompanyName": 2012, "Email": "Orange", "MobileNumber": "151521324651", "AltMobileNumber": "546515651", "DepartmentName": "CRM", "Designation": "CEO", "CurrentBranchName": "Dhaka", "Discount": "50%", "Action": "Delete"},
                {"id":"2","PersonName": "Volkswagen2", "CompanyName": 2012, "Email": "Orange", "MobileNumber": "151156465124651", "AltMobileNumber": "546515651", "DepartmentName": "CRM", "Designation": "CEO", "CurrentBranchName": "Dhaka", "Discount": "50%", "Action": "Delete"},
                {"id":"3","PersonName": "Volkswagen3", "CompanyName": 2012, "Email": "Orange", "MobileNumber": "15124651", "AltMobileNumber": "546554615651", "DepartmentName": "CRM", "Designation": "CEO", "CurrentBranchName": "Dhaka", "Discount": "50%","Action": "Delete"},
                
            ]
        }
    },
    method: {
        
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.products3[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.products3, event.index, this.originalRows[event.index]);
        },
    }

}
</script>
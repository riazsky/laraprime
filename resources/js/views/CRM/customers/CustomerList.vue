<template>
    <div >
        <Breadcrumb :home="home" :model="items" />
         <div class="p-d-flex p-jc-between p-mt-4 p-mb-2">
      <div><h2 class="title">List of Customers</h2></div>
       <div><button class="btn btn-success"><router-link to="/CreateCustomer" style=" text-decoration:none; color: #fff">Add Customer</router-link></button></div>
      
    </div>
        <DataTable :value="cutomers"  :selection.sync="selectedCustomers" :paginator="true" :rows="10"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[5,10,20]"  :filters="filters" :scrollable="true"
    editMode="row" dataKey="id" :editingRows.sync="editingRows"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
    
    <template #header>
      
        <div class="table-header p-d-flex p-jc-between" >
        <div class="p-mr-2"></div>
          <div class="p-mr-2">  <span class="p-input-icon-left">
                <i class="pi pi-search"/>
                     
                <InputText v-model="filters['global']" placeholder="Search" />
            </span>
            </div>
        </div>
    </template>
        <template #empty>
        No customers found.
    </template>
            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
            <Column field="name" header="Name" headerStyle="width: 200px" sortable >
             <template #editor="slotProps">
                <InputText  style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="email" header="Email" headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText  style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="companyName" header="Company Name"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="mobileNumber" header="Mobile Number"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="clientCategory" header="Client Category"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="parentClient" header="Parent Client"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column field="discount" header="Discount"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
             
            <Column field="branch" header="Branch"  headerStyle="width: 200px" sortable>
             <template #editor="slotProps">
                <InputText style="width: 100%" v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column :rowEditor="true" field="Action" header="Action"  headerStyle="width: 200px" >
            </Column>
    

        </DataTable>
    </div>
</template>
<script>
export default {
    name:"CustomerList",
       data() {
        return {
            selectedCustomers:[],
             filters: {},
             editingRows: [],
            "cutomers": [
        {"id":"1","name": "Volksw", "email": 2012, "companyName": "Orange",
        "mobileNumber": "dsad2f31ff", "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff", "discount": "dsad231ff", 
        "branch": "dsad231ff"},
          {"id":"2","name": "Volksdfbwagen", "email": 2012, "companyName": "Orange",
        "mobileNumber": "dsad231ff", "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff", "discount": "dsad231ff", 
        "branch": "dsad231ff"},
          {"id":"3","name": "Volkswagen", "email": 2012, "companyName": "Orange",
        "mobileNumber": "dsaabdsfd231ff", "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff", "discount": "dsad231ff", 
        "branch": "dsad231ff"},
          {"id":"4","name": "Volkswagen", "email": 2012, "companyName": "Orange",
        "mobileNumber": "ddfnbsad231ff", "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff", "discount": "dsad231ff", 
        "branch": "dsad231ff"},
          {"id":"5","name": "Volkswagen", "email": 2012, "companyName": "Orange",
        "mobileNumber": "dsad231ff", "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff", "discount": "dsad231ff", 
        "branch": "dsad231ff"},
          {"id":"6","name": "Volkswagen", "email": 2012, "companyName": "Orange",
        "mobileNumber": "dsad231ff", "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff", "discount": "dsad231ff", 
        "branch": "dsad231ff"}
      
    ],
    home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'CRM'},
                {label: 'Customers'},
                {label: 'Create Customer', to: '/CreateCustomer'},
                {label: 'Customer List', to: '/CustomerList'}
            ]
        }
    },
}
</script>
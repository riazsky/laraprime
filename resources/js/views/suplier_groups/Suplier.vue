<template>
    <card>
        <template #header>
            <h1>Suplier List</h1>
  
        </template>
        <template #content>
            <DataTable   :value="suplier" :paginator="true" :rows="2" :filters="filters" 
 paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
 :rowsPerPageOptions="[2,3,5,7]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
 :selection.sync="selectedsuppliers"  dataKey="id" editMode="cell" class="editable-cells-table"

            >
                <template #header>
                    <div style="text-align: right">
                        <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" size="20" />
                    </div>
                </template>
                <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                <Column field="id" header="ID" sortable></Column>
                <Column field="name" header="Full Name" sortable>
            
                </Column>
                <Column field="email" header="Email Address">

                </Column>
                <Column field="phone" header="Phone">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.column.field]" />
                    </template>
                </Column>

                <Column field="status" header="Status"></Column>
            </DataTable>
        </template>
    </card>
</template>
<script>
export default {
    name:'suplier',
     data() {
        return {
            suplier: [
                {"id": "1000","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1001","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1002","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1004","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
                {"id": "1003","name": "f230fh0g3","email": "watch@live.com","phone": "564165","status": "Null"},
            ],
            
            filters: {},
            selectedsuppliers:{}
        }
    },
   
}
</script>

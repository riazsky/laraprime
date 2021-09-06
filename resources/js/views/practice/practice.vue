<template>
    <div>
   <DataTable :value="products" :filters="filters" :selection.sync="selectedSupply"  dataKey="code" :paginator="true" :rows="5"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[5,10,20,50]"
  editMode="row" 
 >
   >
  
      <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable>

    <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
            </template>
    
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
        <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
                <Column field="quantity" header="Quantity"></Column>
</DataTable>
    </div>
</template>
<script>
export default {
    name:'practice',
    data() {
        return {
            products:[
                {code:'C',name:'Proggramming',category:'A',quantity:'1'},
                {code:'r',name:'Proggramming',category:'A',quantity:'1'},
                {code:'t',name:'Proggramming',category:'A',quantity:'1'},
                {code:'7',name:'Proggramming',category:'A',quantity:'1'},
                {code:'9',name:'Proggramming',category:'A',quantity:'1'},
                {code:'0',name:'Proggramming',category:'A',quantity:'1'},
                {code:'h',name:'Proggramming',category:'A',quantity:'1'},

            ],
            filters:{},
            selectedSupply:null,

        }
    }
}
</script>
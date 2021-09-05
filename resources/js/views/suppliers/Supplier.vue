<template>
  <div>
      <DataTable :value="suppliers" :filters="filters" :paginator="true" :rows="5" :rowsPerPageOptions="[5,10,20,50]"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                 paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                 :selection.sync="selectedSuppliers"  dataKey="vin" editMode="row"
                 :editingRows.sync="editingRows"
                 @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel"
      >

        <template #header>
            <div style="text-align: right">
                <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
                <InputText v-model="filters['global']" placeholder="Global Search" class="" />
            </div>
        </template>

        <Column selectionMode="multiple" headerStyle="width: 3em"></Column>

        <Column field="vin" header="Vin" sortable></Column>
        <Column field="brand" header="Full Name" sortable>

            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>

        </Column>
        <Column field="year" header="Year" sortable>
            <template #editor="slotProps">
                    <InputText v-model="slotProps.data[slotProps.column.field]" />
                </template>
            </Column>
        <Column field="color" header="Color" sortable></Column>
        <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"></Column>
      </DataTable>
      {{ selectedSuppliers }}
  </div>
</template>

<script>

export default {
    name: 'Supplier',
    data() {
        return {
            suppliers:[
                {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
                {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
                {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
                {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
                {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
                {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
                {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
                {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
                {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
                {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
            ],
            filters: {},
            selectedSuppliers:[],
            editingRows: [],
            originalRows: null,
        }
    },
    methods: {
         onRowEditInit(event) {
            this.originalRows[event.index] = {...this.suppliers[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.products3, event.index, this.originalRows[event.index]);
        },
    },
};
</script>

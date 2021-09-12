<template>
<div>
  <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
    <div class="p-d-flex p-jc-between p-mb-4">
        <h2>List Warehouse</h2>
        <button class="btn btn-success"><router-link to="/create-warehouse" class="text-white">Create Warehouse</router-link></button>
    </div>
  <Card>
    <template #content>
      <DataTable
        :value="ListWarehouse" :paginator="true" :rows="10"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10,20,50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        :filters="filters"
        dataKey="id"
        :selection.sync="selectedTitle" 
        :editingRows.sync="editingRows"
        editMode="row" @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel">

        <template #header>
            <div class="table-header p-d-flex p-jc-end">
                <span class="p-input-icon-left ">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global']" placeholder="Global Search"/>
                </span>
            </div>
        </template>

        <Column selectionMode="multiple" headerStyle="width: 3em"></Column>

        <Column field="title" header="Title" :sortable="true">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
            </template>
        </Column>
        <Column field="location" header="Location">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="desp" header="Description" :sortable="true">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="status" header="Status" :sortable="true">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"></Column>
      </DataTable>
    </template>
  </Card>
</div>
</template>

<script>
export default {
  name: "ListWarehouse",
  data() {
    return {
      ListWarehouse: [
          {'id':'1', 'title':'kjsdhflsdhf', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'2', 'title':'ghjghjghj', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'3', 'title':'hjfghjhjjhkhj', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'4', 'title':'hjfghjghjuk', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'5', 'title':'uuikmhjd', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'6', 'title':'uyikyuye', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'7', 'title':'yjyuioyukryu', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
      ],
      filters: {},
      selectedTitle: null,
      editingRows: [],
      home: {icon: 'pi pi-home', to: '/'},
      items: [
          {label: 'Base'},
          {label: 'Warehouse'},
          {label: 'Create Warehouse', to:"/create-warehouse"},
          {label: 'List Warehouse'}
      ]
    };
  },
  methods: {
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.ListWarehouse[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.ListWarehouse, event.index, this.originalRows[event.index]);
        },
  }
};
</script>
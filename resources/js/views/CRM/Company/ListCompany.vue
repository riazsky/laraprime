<template>
<div>
  <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
  <div class="p-d-flex p-jc-between p-mb-4">
      <h2>List Company</h2>
      <Button><router-link to="/create-company" class="text-white">Create Company</router-link></Button>
  </div>

    <DataTable
    :value="ListCompany" :paginator="true" :rows="10"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[10,20,50]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    :filters="filters"
    dataKey="id"
    :selection.sync="selectedTitle"
    class="p-mt-2 animate__animated animate__fadeIn p-datatable-sm"
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

</div>
</template>

<script>
export default {
  name: "ListCompany",
  data() {
    return {
      ListCompany: [
          {'id':'1', 'title':'kjsdhflsdhf', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'2', 'title':'ghjghjghj', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'3', 'title':'hjfghjhjjhkhj', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'4', 'title':'hjfghjghjuk', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'5', 'title':'uuikmhjd', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'6', 'title':'uyikyuye', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'7', 'title':'yjyuioyukryu', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
      ],
      filters: {},
      selectedTitle: null,
      editingRows: [],
      home: {icon: 'pi pi-home', to: '/'},
      items: [
          {label: 'CRM'},
          {label: 'Customer Group'},
          {label: 'Create Company', to:"/create-company"},
          {label: 'List Company'}
      ]
    };
  },
  methods: {
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.ListCompany[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.ListCompany, event.index, this.originalRows[event.index]);
        },
  }
};
</script>

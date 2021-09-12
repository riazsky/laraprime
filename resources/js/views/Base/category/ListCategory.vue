<template>
<div>
  <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
    <div class="p-d-flex p-jc-between p-mb-4">
        <h2>List Category</h2>
        <button class="btn btn-success"><router-link to="/create-category" class="text-white">Create Category</router-link></button>
    </div>
  <Card>
    <template #content>
      <DataTable
        :value="ListCategory" :paginator="true" :rows="10"
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

        <Column field="title" header="Title" :sortable="true" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
            </template>
        </Column>
        <Column field="parent_categoty" header="Parent Category" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="logo" header="Logo" headerStyle="width: 250px">
            <template #body="slotProps">
                <img :src="slotProps.data[slotProps.column.field]" width="50"/>
            </template>
        </Column>
        <Column field="desp" header="Description" :sortable="true" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="status" header="Status" :sortable="true" headerStyle="width: 250px">
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
  name: "ListCategory",
  data() {
    return {
      ListCategory: [
          {'id':'1', 'title':'kjsdhflsdhf', 'parent_categoty':'hjkghjk', 'logo':'images/logo.jpg', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'2', 'title':'ghjghjghj', 'parent_categoty':'uyuujkhjkl', 'logo':'images/logo.jpg', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'3', 'title':'hjfghjhjjhkhj', 'parent_categoty':'uyuujkhjkl', 'logo':'images/logo.jpg', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'4', 'title':'hjfghjghjuk', 'parent_categoty':'uyuujkhjkl', 'logo':'images/logo.jpg', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'5', 'title':'uuikmhjd', 'parent_categoty':'uyuujkhjkl', 'logo':'images/logo.jpg', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'6', 'title':'uyikyuye', 'parent_categoty':'uyuujkhjkl', 'logo':'images/logo.jpg', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
          {'id':'7', 'title':'yjyuioyukryu', 'parent_categoty':'uyuujkhjkl', 'logo':'images/logo.jpg', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
      ],
      filters: {},
      selectedTitle: null,
      editingRows: [],
      home: {icon: 'pi pi-home', to: '/'},
      items: [
          {label: 'Base'},
          {label: 'Category'},
          {label: 'Create Category', to:"/create-category"},
          {label: 'List Category'}
      ]
    };
  },
  methods: {
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.ListCategory[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.ListCategory, event.index, this.originalRows[event.index]);
        },
  }
};
</script>

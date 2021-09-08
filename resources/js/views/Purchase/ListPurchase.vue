<template>
<div>
  <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
    <div class="p-d-flex p-jc-between p-mb-4">
        <h2>List Purchase</h2>
        <button class="btn btn-danger"><router-link to="/create-purchase" class="text-white">Create Purchase</router-link></button>
    </div>
  <Card>
    <template #content>
      <DataTable
        :value="ListPurchase" :scrollable="true" :paginator="true" :rows="10"
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
        <Column field="invoice_no" header="Invoice No" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="purchase_date" header="Purchase Date" :sortable="true" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="suplier_name" header="Suplier Name" :sortable="true" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="warehouse" header="Warehouse" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="reference_no" header="Reference No" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="purchase_status" header="Purchase Status" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="payment_status" header="Payment Status" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="purchased_by" header="Purchaseed by" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="total_price" header="Total Price" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="subtotal_price" header="Subtotal Price" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="total_quantity" header="Total Quantity" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
        <Column field="total_product" header="Total Product" headerStyle="width: 250px">
            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</div>
</template>

<script>
export default {
  name: "ListPurchase",
  data() {
    return {
      ListPurchase: [
          {'purchase_date':'hghghjghj', 'suplier_name':'ghjfhjfghjgh', 'warehouse':'ghjfghjghj', 'reference_no':'hgjghj', 'invoice_no':'fghjfghjgh', 'purchase_status':'ghjfhgjgfhj', 'payment_status':'hkkhjkhk', 'purchased_by':'dfyrteyrtyert', 'total_price':'hjkghjkhjk', 'subtotal_price':'hjkghjkghjk', 'total_quantity':'hjkghjkghk', 'total_product':'hgjkhjkghjkh'},
          {'purchase_date':'hghghjghj', 'suplier_name':'ghjfhjfghjgh', 'warehouse':'ghjfghjghj', 'reference_no':'hgjghj', 'invoice_no':'fghjfghjgh', 'purchase_status':'ghjfhgjgfhj', 'payment_status':'hkkhjkhk', 'purchased_by':'dfyrteyrtyert', 'total_price':'hjkghjkhjk', 'subtotal_price':'hjkghjkghjk', 'total_quantity':'hjkghjkghk', 'total_product':'hgjkhjkghjkh'},
          {'purchase_date':'hghghjghj', 'suplier_name':'ghjfhjfghjgh', 'warehouse':'ghjfghjghj', 'reference_no':'hgjghj', 'invoice_no':'fghjfghjgh', 'purchase_status':'ghjfhgjgfhj', 'payment_status':'hkkhjkhk', 'purchased_by':'dfyrteyrtyert', 'total_price':'hjkghjkhjk', 'subtotal_price':'hjkghjkghjk', 'total_quantity':'hjkghjkghk', 'total_product':'hgjkhjkghjkh'},
          {'purchase_date':'hghghjghj', 'suplier_name':'ghjfhjfghjgh', 'warehouse':'ghjfghjghj', 'reference_no':'hgjghj', 'invoice_no':'fghjfghjgh', 'purchase_status':'ghjfhgjgfhj', 'payment_status':'hkkhjkhk', 'purchased_by':'dfyrteyrtyert', 'total_price':'hjkghjkhjk', 'subtotal_price':'hjkghjkghjk', 'total_quantity':'hjkghjkghk', 'total_product':'hgjkhjkghjkh'},
      ],
      filters: {},
      selectedTitle: null,
      home: {icon: 'pi pi-home', to: '/'},
      items: [
          {label: 'Purchase'},
          {label: 'Create Purchase', to:"/create-purchase"},
          {label: 'List Purchase'}
      ]
    };
  },
  methods: {
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.ListPurchase[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.ListPurchase, event.index, this.originalRows[event.index]);
        }
  }
};
</script>
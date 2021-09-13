<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
        <!-- Create Filter Option Start -->
            <Card class="p-mt-3">
                <template #content>
                    <div><h4><strong>Filters Option</strong></h4></div>
                    <div class="p-fluid p-formgrid p-grid">
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="CustomerName" :options="CustomerNames" optionLabel="name" />
                                <label for="lastname">CustomerName</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Dropdown v-model="Warehouse" :options="ToWarehouses" optionLabel="name" />
                                <label for="lastname">Warehouse</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Calendar id="icon" v-model="date" :showIcon="true" />
                                <label for="lastname">From date</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-6 p-mt-3">
                            <span class="p-float-label">
                                <Calendar id="icon" v-model="date" :showIcon="true" />
                                <label for="lastname">To date</label>
                            </span>
                        </div>
                        <div class="p-field p-col-12 p-md-1">
                            <button class="btn btn-primary">Fillter</button>
                        </div>
                    </div>
                </template>
            </Card>
        <!-- Create Filter Option End -->
    <div class="p-d-flex p-jc-between p-mt-5 p-mb-3">
      <div class="p-mr-2"><h3>Return Sales Lists</h3></div>
      <div>
        <button class="btn btn-secondary">
          <router-link
            to="/CreateSalesReturn"
            style="color: #fff; text-decoration: none"
            >Create Sales Return</router-link
          >
        </button>
      </div>
    </div>
    <DataTable
      :value="TableData"
      :scrollable="true"
      :paginator="true"
      :rows="7"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 20, 50]"
      :filters="filters"
      :selection.sync="selectedProducts3"
      editMode="row"
      dataKey="id"
      :editingRows.sync="editingRows"
      @row-edit-init="onRowEditInit"
      @row-edit-cancel="onRowEditCancel"
    >
      <template #header>
        <div class="table-header p-d-flex p-jc-between">
          <div>
            <h2><i class="pi pi-book" /></h2>
          </div>
          <div>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global']"
                placeholder="Global Search"
              />
            </span>
          </div>
        </div>
      </template>
      <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
      <Column field="InvoiceNo" headerStyle="width: 170px" header="Invoice No" sortable></Column>
      <Column field="SaleDate" headerStyle="width: 170px" header="Sale Date" sortable></Column>
      <Column field="CustomerName" headerStyle="width: 200px" header="Customer Name" sortable></Column>
      <Column field="Warehouse" headerStyle="width: 170px" header="Warehouse" sortable></Column>
      <Column field="ReferenceNo" headerStyle="width: 190px" header="Reference No" sortable></Column>
      <Column field="SalesStatus" headerStyle="width: 170px" header="Sales Status" sortable></Column>
      <Column field="SalesBy" headerStyle="width: 170px" header="Sales By" sortable></Column>
      <Column field="PaymentStatus" headerStyle="width: 200px" header="Payment Status" sortable> </Column>
      <Column field="TotalProducts" headerStyle="width: 190px" header="Total Products" sortable></Column>
      <Column field="TotalQty" headerStyle="width: 170px" header="Total Qty" sortable></Column>
      <Column field="SubTotalPrice" headerStyle="width: 190px" header="Sub Total Price" sortable></Column>
      <Column field="TotalPrice" headerStyle="width: 170px" header="Total Price" sortable></Column>
         

      <Column field="Action" headerStyle="width: 150px" header="Action">
        <template #body>
            <div class="p-d-flex">
                <a class="btn btn-info mr-2"><router-link to="/ViewSale"  style="color: #fff; text-decoration: none;">View</router-link></a>
                <a class="btn btn-danger">Delete</a>
            </div>
 
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
import Calendar from "primevue/calendar";
export default {
  name: "ReturnSalesLists",
    components:{
        Dropdown,
        Calendar
    },
  data() {
    return {
      filters: {},
      editingRows: [],
      selectedProducts3: null,
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Sales Return" },
        { label: "Create Sales Return", to: "/CreateSalesReturn" },
        { label: "Return Sales Lists" },
      ],
      CustomerName: null,
      CustomerNames: [
          {name: 'Nikunjo', code: 'N'},
          {name: 'Savar', code: 'Sr'},
          {name: 'Mohakhali', code: 'Mi'},
          {name: 'Munshiganj', code: 'Mj'},
      ],
      Warehouse: null,
      Warehouses: [
          {name: 'Nikunjo', code: 'N'},
          {name: 'Savar', code: 'Sr'},
          {name: 'Mohakhali', code: 'Mi'},
          {name: 'Munshiganj', code: 'Mj'},
      ],
      TableData: [
        {       
          id: 1,
          InvoiceNo: "21651",
          SaleDate: "1/05/21",
          CustomerName: "MR",
          EmployName: "M Korim",
          Warehouse: "asdf",
          ReferenceNo: "151521324651",
          SalesStatus: "Ordered",
          SalesBy: "Mr l",
          PaymentStatus: "Paid",
          TotalProducts: "56516432",
          TotalQty: "100",
          SalaryType: "Monthly",
          SubTotalPrice: "55615",
          TotalPrice: "5464",

        },
        {       
          id: 2,
          InvoiceNo: "21651",
          SaleDate: "1/05/21",
          CustomerName: "MR",
          EmployName: "M Korim",
          Warehouse: "asdf",
          ReferenceNo: "151521324651",
          SalesStatus: "Ordered",
          SalesBy: "Mr l",
          PaymentStatus: "Paid",
          TotalProducts: "56516432",
          TotalQty: "100",
          SalaryType: "Monthly",
          SubTotalPrice: "55615",
          TotalPrice: "5464",

        },
        {       
          id: 3,
          InvoiceNo: "21651",
          SaleDate: "1/05/21",
          CustomerName: "MR",
          EmployName: "M Korim",
          Warehouse: "asdf",
          ReferenceNo: "151521324651",
          SalesStatus: "Ordered",
          SalesBy: "Mr l",
          PaymentStatus: "Paid",
          TotalProducts: "56516432",
          TotalQty: "100",
          SalaryType: "Monthly",
          SubTotalPrice: "55615",
          TotalPrice: "5464",

        },


        

      ],
    };
  },
  methods: {
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.products3[event.index] };
    },
    onRowEditCancel(event) {
      Vue.set(this.products3, event.index, this.originalRows[event.index]);
    },
  },
};
</script>
<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-5 p-mb-3">
      <div class="p-mr-2"><h3>Employee Lists</h3></div>
      <div>
        <button class="btn btn-secondary">
          <router-link
            to="/CreateEmployees"
            style="color: #fff; text-decoration: none"
            >Create Employees</router-link
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
      <Column
        field="EmployId"
        headerStyle="width: 170px"
        header="Employe Id"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        field="EmployName"
        headerStyle="width: 150px"
        header="Name"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column field="Email" headerStyle="width: 150px" header="Email" sortable>
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column field="Phone" headerStyle="width: 150px" header="Phone" sortable>
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        field="Department"
        headerStyle="width: 170px"
        header="Department"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        field="Designation"
        headerStyle="width: 170px"
        header="Designation"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column field="Shift" headerStyle="width: 150px" header="Shift" sortable>
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        field="PresentAddress"
        headerStyle="width: 200px"
        header="Present Address"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        field="JoinDate"
        headerStyle="width: 200px"
        header="Join Date"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        field="DutyType"
        headerStyle="width: 200px"
        header="Duty Type"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        field="Salary"
        headerStyle="width: 200px"
        header="Salary"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        field="SalaryType"
        headerStyle="width: 200px"
        header="Salary Type"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column field="Photo" headerStyle="width: 80px" header="Photo">
        <template #body="slotProps">
          <img
            :src="slotProps.data.Photo"
            alt="Not found"
            width="48"
            height="48"
          />
        </template>
      </Column>
      <Column
        field="Status"
        headerStyle="width: 200px"
        header="Status"
        sortable
      >
        <template #editor="slotProps">
          <InputText
            style="width: 100%"
            v-model="slotProps.data[slotProps.column.field]"
            autofocus
          />
        </template>
      </Column>
      <Column
        :rowEditor="true"
        :colspan="4"
        field="Action"
        headerStyle="width: 150px"
        header="Action"
      >
      </Column>
      <Column field="Actions" headerStyle="width: 150px">
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
  name: "EmployeeLists",
  data() {
    return {
      filters: {},
      editingRows: [],
      selectedProducts3: null,
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM" },
        { label: "Employees" },
        { label: "Create Employees", to: "/CreateEmployees" },
        { label: "Edit Employee Lists", to: "/EditEmployeeLists" },
        { label: "Employee Lists" },
      ],
      TableData: [
        {

          id: "1",
          EmployId: "100",
          EmployName: "M Korim",
          Email: "asdk@dsa.com",
          Phone: "151521324651",
          Department: "CRM",
          Designation: "CEO",
          Shift: "2nd",
          PresentAddress: "Dhaka",
          JoinDate: "10/4/19",
          DutyType: "Full-Time",
          Salary: "100",
          SalaryType: "Monthly",
          Photo: "images/index.jpg",
          Status: "Active",
          Actions: "Delete",
        },
        {

          id: "2",
          EmployId: "100",
          EmployName: "M Korim",
          Email: "asdk@dsa.com",
          Phone: "151521324651",
          Department: "CRM",
          Designation: "CEO",
          Shift: "2nd",
          PresentAddress: "Dhaka",
          JoinDate: "10/4/19",
          DutyType: "Full-Time",
          SalaryType: "Monthly",
          Photo: "images/index.jpg",
          Status: "Active",
          Actions: "Delete",
        },
        {

          id: "3",
          EmployId: "100",
          EmployName: "M Korim",
          Email: "asdk@dsa.com",
          Phone: "151521324651",
          Department: "CRM",
          Designation: "CEO",
          Shift: "2nd",
          PresentAddress: "Dhaka",
          JoinDate: "10/4/19",
          DutyType: "Full-Time",
          SalaryType: "Monthly",
          Photo: "images/index.jpg",
          Status: "Active",
          Actions: "Delete",
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
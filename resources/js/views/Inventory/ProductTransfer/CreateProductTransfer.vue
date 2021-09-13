<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-5">
      <div class="p-mr-2"><h3>Create Product Transfer</h3></div>
      <div>
          <router-link to="/ProductTransferList" style="color: #fff; text-decoration: none"><button class="btn btn-secondary">Product Transfer Lists</button></router-link >
      </div>
    </div>
    <card class="p-mt-3">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <InputText id="firstname" type="text" />
                  <label for="firstname">Reference No</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
            <span class="p-float-label">
              <Calendar id="icon" v-model="date" :showIcon="true" />
              <label for="lastname">From Requisition date</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
            <span class="p-float-label">
              <Calendar id="icon" v-model="date" :showIcon="true" />
              <label for="lastname">To Requisition date</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
            <span class="p-float-label">
              <Calendar id="icon" v-model="date" :showIcon="true" />
              <label for="lastname">Transfer date</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <Dropdown v-model="FromWarehouse" :options="FromWarehouses" optionLabel="name" />
                  <label for="lastname">From Warehouse</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <Dropdown v-model="ToWarehouse" :options="ToWarehouses" optionLabel="name" />
                <label for="lastname">To Warehouse</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <Dropdown v-model="ResponsibleEmployee" :options="ResponsibleEmployees" optionLabel="name" />
                <label for="lastname">Responsible Employees</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <Dropdown v-model="Status" :options="Statuss" optionLabel="name" />
                <label for="lastname">Status</label>
              </span>
          </div>
        </div>

          <!-- Multiple add Start -->
            <div class="p-fluid p-formgrid p-grid" v-for="(item,index) in products" :key="index">
                <div class="p-field p-col-12 p-md-4 p-py-0 p-mt-3 p-px-2">
                    <span class="p-float-label">
                        <InputText id="firstname" type="text" v-model="item.name" />
                        <label for="firstname">Product Name</label>
                    </span>
                </div>
                <div class="p-field p-col-12 p-md-4 p-py-0 p-mt-3 p-px-2">
                    <span class="p-float-label">
                        <InputNumber id="withoutgrouping2" v-model="item.Aquty" mode="decimal" :useGrouping="false"/>
                        <label for="number">Available Quty</label>
                    </span>
                </div>
                <div class="p-field p-col-12 p-md-3 p-py-0 p-mt-3 p-px-2">
                    <span class="p-float-label">
                        <InputNumber id="withoutgrouping1" v-model="item.qty" mode="decimal" :useGrouping="false"/>
                        <label for="number">Quantity</label>
                    </span>
                </div>

                <!-- Delete Button start -->
                <div  class="p-field p-col-12 p-md-1">
                    <button class="btn btn-danger p-mt-3" v-show="index!=0" @click="remove(index)">-</button>
                </div>
                 <!-- Delete Button end -->
            </div>
            <button class="btn btn-primary" @click="add">+</button><br>
          <!-- Multiple add End -->
        <Button label="Submit" class="p-mt-5" />
      </template>
    </card>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import RadioButton from "primevue/radiobutton";

export default {
  name: "CreateProductTransfer",
  components: {
    Dropdown,
    Button,
    Calendar,
    RadioButton,
  },

  data() {
    return {
      date: null,
      phone: null,
      salary: null,
      city: null,
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Inventory" },
        { label: "Product Transfer" },
        { label: "Product Transfer List", to: "/ProductTransferList" },
        { label: "Edit Product Transfer List", to: "/EditProductTransferList" },
        { label: "Create Product Transfer" },
      ],
      FromWarehouse: null,
      FromWarehouses: [
        { name: "Marketing", code: "Mk" },
        { name: "Finance", code: "F" },
        { name: "Designing", code: "D" },
        { name: "Programming", code: "IST" },
      ],
      ToWarehouse: null,
      ToWarehouses: [
        { name: "CEO", code: "CEO" },
        { name: "Manager", code: "MG" },
        { name: "Ass. Manager", code: "AM" },
        { name: "Employe", code: "E" },
      ],
      BranchName: null,
      branch: [
        { name: "Nikunjo", code: "N" },
        { name: "Savar", code: "Sr" },
        { name: "Mohakhali", code: "Mi" },
        { name: "Munshiganj", code: "Mj" },
      ],
      ResponsibleEmployee: null,
      ResponsibleEmployees: [
        { name: "Nikunjo", code: "N" },
        { name: "Savar", code: "Sr" },
        { name: "Mohakhali", code: "Mi" },
        { name: "Munshiganj", code: "Mj" },
      ],
      Status: null,
      Statuss: [
        { name: "Active", code: "ONE" },
        { name: "Deactive", code: "TWO" },
      ],
      products:[
        {name:null,Aquty: null,qty: null}
      ],

    };
  },
  methods: {
    add(){
      this.products.push({name:'',qty:null,price:null,TPrice:null})
    },
    remove(index){
      this.products.splice(index,1)

    }
    
  }
};
</script>
<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-5">
      <div class="p-mr-2"><h3>Create Sales Return</h3></div>
      <div>
        <button class="btn btn-secondary">
          <router-link
            to="/ReturnSalesLists"
            style="color: #fff; text-decoration: none"
            >Return Sales Lists</router-link
          >
        </button>
      </div>
    </div>
    <card class="p-mt-5">
      <template #content>


        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <label for="lastname">Sale Date</label>
            <Calendar id="icon" v-model="date" :showIcon="true" />
          </div>
          <div class="p-field p-col">
            <label for="firstname">Customer Name</label>
            <InputText id="firstname" type="text" />
          </div>
          <div class="p-field p-col">
            <label for="lastname">Warehouse</label>
            <InputText id="lastname" type="text" />
          </div>
        </div>
         <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <label for="number">Reference No</label>
            <InputNumber id="withoutgrouping" v-model="salary" mode="decimal" :useGrouping="false"/>
          </div>
          <div class="p-field p-col">
            <label for="number">Invoice No</label>
            <InputNumber id="withoutgrouping" v-model="salary" mode="decimal" :useGrouping="false"/>
          </div>
          <div class="p-field p-col">
            <label for="lastname">Sales Status</label>
            <Dropdown :options="Sales" optionLabel="name" v-model="SaleOrder" placeholder="Select a Sales Status" />
          </div>
         </div>
          <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <label for="lastname">Sales By</label>
            <Dropdown :options="Salesby" optionLabel="name" v-model="SaleBY" placeholder="Select a Salary Type" />
          </div>

          <div class="p-field p-col">
            <label for="lastname">Paymet Status</label>
            <Dropdown :options="Paymets" optionLabel="name" v-model="PaymentStatus" placeholder="Select a Salary Type" />
          </div>
            <div class="p-field p-col">
              <label for="firstname">Note</label>
              <InputText id="firstname" type="text" />
            </div>
        </div>
        <div class="p-fluid p-formgrid p-grid" v-for="(item,index) in products" :key="index">
            <div class="p-field p-col">
              <label for="firstname">Product Name</label>
              <InputText id="firstname" type="text" v-model="item.name" />
            </div>
            <div class="p-field p-col">
              <label for="number">Qty</label>
              <InputNumber id="withoutgrouping1" v-model="item.qty" mode="decimal" :useGrouping="false"/>
            </div>
            <div class="p-field p-col">
              <label for="number">Per Price</label>
              <InputNumber id="withoutgrouping2" v-model="item.price" mode="decimal" :useGrouping="false"/>
            </div>
            <div class="p-field p-col">
              <label for="number">Total Price</label>
              <InputNumber id="withoutgrouping3" v-model="item.TPrice" mode="decimal" :useGrouping="false"/>
            </div>
            
          
            <div  class="p-field p-col-12 p-md-1" style="margin-top: 30px">
            <button class="btn btn-danger" v-show="index!=0" @click="remove(index)">-</button>
            </div>
        </div>
          <button class="btn btn-primary" @click="add">+</button>

      
          <div class="p-field p-col-12 p-md-12">
            <label for="lastname">Note</label>
            <Textarea id="mote" class="form-control" rows="2"  placeholder="Leave reason"/>
          </div>
          <div class="p-grid">
            <div class="col-5 p-offset-7">
              <div class="p-d-flex p-jc-between">
                  <label for=""><strong>Sale Discount:</strong></label>
                  <InputNumber  placeholder="Enter Sale Discount" class=""/>
              </div>
            </div>
             <div class="col-5 p-offset-7 ">
              <div class="p-d-flex p-jc-between p-mt-2">
                  <label for=""><strong>Sale Total:</strong></label>
                  <InputNumber placeholder="Enter Sale Discount" class=""/>
              </div>
            </div>
             <div class="col-5 p-offset-7 ">
              <div class="p-d-flex p-jc-between p-mt-2">
                  <label for=""><strong>Total Tax:</strong></label>
                  <InputNumber placeholder="Enter Total Tax" class=""/>
              </div>
            </div>
             <div class="col-5 p-offset-7 ">
              <div class="p-d-flex p-jc-between p-mt-2">
                  <label for=""><strong>Shipping Cost:</strong></label>
                  <InputNumber placeholder="Enter Shipping Cost" class=""/>
              </div>
            </div>
             <div class="col-5 p-offset-7 ">
              <div class="p-d-flex p-jc-between p-mt-2">
                  <label for=""><strong>Grand Total:</strong></label>
                  <InputNumber placeholder="Enter Grand Total" class=""/>
              </div>
            </div>
             <div class="col-5 p-offset-7 ">
              <div class="p-d-flex p-jc-between p-mt-2">
                  <label for=""><strong>Previous:</strong></label>
                  <InputNumber placeholder="Previous" class=""/>
              </div>
            </div>
             <div class="col-5 p-offset-7 ">
              <div class="p-d-flex p-jc-between p-mt-2">
                  <label for=""><strong>Net Total:</strong></label>
                  <InputNumber placeholder="Enter Net Total" class=""/>
              </div>
            </div>
             <div class="col-5 p-offset-7 ">
              <div class="p-d-flex p-jc-between p-mt-2">
                  <label for=""><strong>Paid Amount:</strong></label>
                  <InputNumber placeholder="Enter Paid Amount" class=""/>
              </div>
            </div>
             <div class="col-5 p-offset-7 ">
              <div class="p-d-flex p-jc-between p-mt-2">
                  <label for=""><strong>Due:</strong></label>
                  <InputNumber placeholder="Enter Due" class=""/>
              </div>
            </div>
          </div>
          <div>
          <button class="btn btn-outline-info">Save Purchase</button>
         

        </div> 
      </template>
    </card>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Calendar from "primevue/calendar";


export default {
  name: "CreateSalesReturn",
  components: {
    Dropdown,
    Button,
    Calendar,

  },

  data() {
    return {
      products:[
        {name:'',qty:'',price:'',TPrice:''}
      ],
      date: null,
      phone: null,
      salary: null,
      city: null,
      value: null,
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Sales Return" },
        { label: "Return Sales Lists", to: "/ReturnSalesLists" },
        { label: "Create Sales Return" },
      ],
      SaleOrder: null,
      Sales: [
        { name: "Order", code: "SM" },
        { name: "Pending", code: "SY" },
      ],

      SaleBY: null,
      Salesby: [
        { name: "M", code: "SM" },
        { name: "Y", code: "SY" },
        { name: "Z", code: "SY" },
      ],

      PaymentStatus: null,
      Paymets: [
        { name: "Paid", code: "SM" },
        { name: "Unpaid", code: "SY" },
      ],
    };
  },
  methods: {
    add(){
      this.products.push({name:'',qty:'',price:'',TPrice:''})
    },
    remove(index){
      this.products.splice(index,1)

    }
    
  }
};
</script>
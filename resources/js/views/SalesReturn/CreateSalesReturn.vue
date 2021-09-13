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
    <card class="p-mt-3">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                <Calendar id="icon" v-model="date" :showIcon="true" />
                <label for="lastname">Sale Date</label>
              </span>
          </div>
          <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                <InputText id="firstname" type="text" v-model="CustomerN" />
                <label for="firstname">Customer Name</label>
              </span>
          </div>
          <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                <InputText id="lastname" type="text" v-model="Warehouse" />
                <label for="lastname">Warehouse</label>
              </span>
          </div>
        </div>
         <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                <InputNumber id="withoutgrouping" v-model="Reference" mode="decimal" :useGrouping="false"/>
                <label for="number">Reference No</label>
              </span>
          </div>
          <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                  <InputNumber id="withoutgrouping" v-model="Invoice" mode="decimal" :useGrouping="false"/>
                  <label for="number">Invoice No</label>
              </span>
          </div>
          <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                <Dropdown :options="Sales" optionLabel="name" v-model="SaleOrder" />
                <label for="lastname">Sales Status</label>
              </span>
          </div>
         </div>
          <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                <Dropdown :options="Salesby" optionLabel="name" v-model="SaleBY" />
                <label for="lastname">Sales By</label>
              </span>
            
          </div>

          <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                <Dropdown :options="Paymets" optionLabel="name" v-model="PaymentStatus" />
                <label for="lastname">Paymet Status</label>
              </span>
          </div>
            <div class="p-field p-col p-mt-3">
              <span class="p-float-label">
                <InputText id="firstname" type="text"  v-model="Note"/>
                <label for="firstname">Note</label>
              </span>
            </div>
        </div>

        <!-- Second part start -->
        <div style="background-color: #f8fafc">
          <table class="table">
            <tr>
              <th>Product Name</th>
              <th>Qty</th>
              <th>Per Price</th>
              <th>Total Price</th>
              <th></th>
            </tr>
            <tr v-for="(purchase, index) in purchases" :key="index">
              <td style="width:30%;">
                <select v-model="purchase.name" id="product_name" class="form-control">
                  <option selected disabled hidden>-- Select a Product --</option>
                  <option>Shirt</option>
                  <option>pant</option>
                </select>
              </td>

              <td style="width:20%;">
                <input v-model="purchase.qty" type="number"  class="form-control" />
              </td>

              <td style="width:20%;">
                <input v-model="purchase.per_price" type="number" class="form-control" />
              </td>
              <td style="width:25%;">
                <input v-model="purchase.total_price" type="number" class="form-control" />
              </td>
              <td>
                <input @click="remove(index)" type="button" value="-" v-if="index != 0" class="btn btn-danger" />
                <input @click="add" type="button" v-if="index == 0" value="+" class="btn btn-success"/>
              </td>
            </tr>
          </table>
        </div>
        <!-- Second part end -->

        <!-- last part Start-->
        <div class="row">
          <div class="col-7">
            <label for="note"><b>Note</b></label>
            <textarea id="note" rows="5" class="form-control"></textarea>

            <label for="note" class="p-mt-3"><b>Terms And Condition</b></label>
            <textarea id="note" rows="5" class="form-control"></textarea>
            <button class="btn btn-success p-mt-3">Save Invoice</button>
          </div>
           <div class="col-5">
              <table class="table">
                  <tr>
                      <th>Sale Discount:</th>
                      <td><InputNumber v-model="sale_discount" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Sale Total:</th>
                      <td><InputNumber v-model="sale_total" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Total Tax:</th>
                      <td><InputNumber v-model="sale_tax" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Shipping cost:</th>
                      <td><InputNumber v-model="shipping_cost" class="p-inputtext-sm" /></td>
                  </tr>
                  <tr>
                      <th>Grand Total:</th>
                      <td><InputNumber v-model="grand_total" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Previous:</th>
                      <td><InputNumber v-model="Previous" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Net Total:</th>
                      <td><InputNumber v-model="net_total" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Paid Amount:</th>
                      <td><InputNumber v-model="paid_amount" class="p-inputtext-sm"/></td>
                  </tr>
                  <tr>
                      <th>Due:</th>
                      <td><InputNumber v-model="due" class="p-inputtext-sm"/></td>
                  </tr>
              </table>
          </div>
        </div>
      </template>
    </card>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Textarea from 'primevue/textarea';


export default {
  name: "CreateSalesReturn",
  components: {
    Dropdown,
    Button,
    Calendar,
    Textarea,

  },

  data() {
    return {
    mote:null,
      purchases:[
        {name:'',qty: null,per_price:null,total_price:null}
      ],
      date: null,
      CustomerN: null,
      Warehouse: null,
      phone: null,
      Reference: null,
      Note: null,
      Invoice: null,
      city: null,  
      value: null,

      sale_discount: null,
      sale_total: null,
      sale_tax: null,
      shipping_cost: null,
      grand_total: null,
      net_total: null,
      Previous: null,
      paid_amount: null,
      due: null,
      
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
      this.purchases.push({name:'',qty:null,per_price:null,total_price:null})
    },
    remove(index){
      this.purchases.splice(index,1)

    }
    
  }
};
</script>
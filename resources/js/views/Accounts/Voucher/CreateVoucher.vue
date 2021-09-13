<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-5">
      <div class="p-mr-2"><h3>Create Voucher</h3></div>
      <div>
        <button class="btn btn-secondary">
          <router-link
            to=""
            style="color: #fff; text-decoration: none"
            >Voucher</router-link
          >
        </button>
      </div>
    </div>
    <card class="p-mt-3">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-4 p-py-0 p-px-2">
            <span class="p-float-label">
              <Calendar id="icon" v-model="date" :showIcon="true" />
              <label for="lastname">Transaction Date</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-py-0 p-px-2">
              <span class="p-float-label">
                  <Dropdown v-model="Branch" :options="Branchs" optionLabel="name" />
                  <label for="lastname">Branch</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-py-0 p-px-2">
              <span class="p-float-label">
                <Dropdown v-model="Voucher" :options="Types" optionLabel="name" />
                <label for="lastname">Voucher Type</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <Dropdown v-model="Form" :options="Ftypes" optionLabel="name" />
                <label for="lastname">Form Types</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <Dropdown v-model="FromAccountHead" :options="FromAccountHeads" optionLabel="name" />
                <label for="lastname">From Account Head</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <InputText id="firstname" type="text" />
                  <label for="firstname">Voucher Ref No</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <InputNumber id="number" v-model="Balance" mode="decimal" :useGrouping="false"/>
                <label for="number">Balance</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <Dropdown v-model="To" :options="Ttypes" optionLabel="name"/>
                  <label for="lastname">To Type</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <Dropdown v-model="ToAccountHead" :options="ToAccountHeads" optionLabel="name"/>
                  <label for="lastname">To Account Head</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-mt-3">
              <span class="p-float-label">
                <Textarea id="address" v-model="address" class="form-control" rows="2" />
                <label for="address">Description</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
            <span class="p-float-label">
              <InputNumber id="withoutgrouping" v-model="Amount" mode="decimal" :useGrouping="false" />
              <label for="number">Amount</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <InputText id="lastname" v-model="InWord" type="text" />
                  <label for="lastname">In Word</label>
              </span>
          </div>
        </div>
        <Button label="Submit" />
      </template>
    </card>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import RadioButton from "primevue/radiobutton";
import Textarea from 'primevue/textarea';

export default {
  name: "CreateVoucher",
  components: {
    Dropdown,
    Button,
    Calendar,
    RadioButton,
    Textarea,
  },

  data() {
    return {
      date: null,
      Balance: null,
      Amount: null,
      address: null,
      InWord: null,
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Accounts" },
        { label: "Voucher" },
        { label: "Create Voucher" },
        // { label: "Employee Lists", to: "/EmployeeLists" },
      ],
      Branch: null,
      Branchs: [
        { name: "Marketing", code: "Mk" },
        { name: "Finance", code: "F" },
        { name: "Designing", code: "D" },
        { name: "Programming", code: "IST" },
      ],
      Voucher: null,
      Types: [
        { name: "CEO", code: "CEO" },
        { name: "Manager", code: "MG" },
        { name: "Ass. Manager", code: "AM" },
        { name: "Employe", code: "E" },
      ],
      Form: null,
      Ftypes: [
        { name: "1st", code: "ONE" },
        { name: "2nd", code: "TWO" },
      ],
      FromAccountHead: null,
      FromAccountHeads: [
        { name: "Full-Time", code: "ONE" },
        { name: "Part-Time", code: "TWO" },
      ],
      To: null,
      Ttypes: [
        { name: "Monthly", code: "SM" },
        { name: "Yearly", code: "SY" },
      ],
      ToAccountHead: null,
      ToAccountHeads: [
        { name: "Monthly", code: "SM" },
        { name: "Yearly", code: "SY" },
      ],
    };
  },
};
</script>
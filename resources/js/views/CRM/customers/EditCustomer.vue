<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
     <div class="p-d-flex p-jc-between p-mt-4 p-mb-2 ">
      <div><h2 class="title">Edit Customer</h2></div>
      <div><button class="btn btn-success"><router-link to="/CustomerList" style=" text-decoration:none; color: #fff">Customer List</router-link></button></div>
    </div>
    <Card >
      <template #content>
      <form action="">
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-6">
            <label for="name"> <strong> Name</strong></label> <br />
            <InputText type="text" v-model="value" placeholder="Enter Name" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="email"><strong>Email</strong></label> <br />
            <InputText type="email" v-model="value" placeholder="Enter Email" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="companyName"><strong>Company Name</strong></label> <br />
            <Dropdown
              v-model="selectedCompany"
              :options="companies"
              optionLabel="name"
              placeholder="Select Company Name"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="designation"><strong>Designation</strong></label> <br />
            <Dropdown
              v-model="selectedDesignation"
              :options="designations"
              optionLabel="designation"
              placeholder="Select Designation"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="regDate"><strong>Registration date</strong></label> <br />
          <Calendar v-model="value"  placeholder="Enter Registation Date" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="number"><strong>Phone Number</strong></label> <br />
            <InputText
              type="number"
              v-model="value"
              placeholder="Enter Phone Number"
            />
          </div>
         
          <div class="p-field p-col-12 p-md-6">
            <label for="contactPerson"><strong>Contact Person</strong></label> <br />
            <MultiSelect
              v-model="selectedPerson"
              :options="persons"
              optionLabel="persons"
              placeholder="Select Contact Persons"
            />
            <br>
            <label for="refPerson"><strong>Reference Person</strong></label> <br />
            <InputText
              type="text"
              v-model="value"
              placeholder="Enter Reference Person"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="address"><strong>Address</strong></label> <br />
            <Textarea
              v-model="value"
              rows="5"
              cols="60"
              placeholder="Enter Address"
            />
          </div>
          <!-- <div class="p-field p-col-12 p-md-6">
            <label for="refPerson">Reference Person</label> <br />
            <InputText
              type="text"
              v-model="value"
              placeholder="Enter Reference Person"
            />
          </div> -->
          <div class="p-field p-col-12 p-md-6">
            <label for="birthDate"><strong>Date of Birth</strong></label> <br />
           <Calendar v-model="value"   placeholder="Enter Birth Date" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="clientCategory"><strong>Client Category</strong></label> <br />
            <Dropdown
              v-model="selectedCategory"
              :options="clientCategories"
              optionLabel="category"
              placeholder="Select Client Category"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="parentClient"><strong>Parent Client</strong></label> <br />
            <Dropdown
              v-model="selectedParent"
              :options="parentClients"
              optionLabel="parentClients"
              placeholder="Select Parent Client"
            />
          </div>
         
          <div class="p-field p-col-12 p-md-6">
            <label for="number"><strong>Discount</strong></label> <br />
            <InputNumber v-model="value" placeholder="Enter Discount Amount" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="credit"><strong>Credit Tx</strong></label> <br />
            <InputNumber v-model="value" placeholder="Enter Credit Tx" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="return"><strong>Return No</strong></label> <br />
            <InputNumber v-model="value" placeholder="Enter Return No." />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="tin"><strong>TIN No</strong></label> <br />
            <InputNumber v-model="value" placeholder="Enter TIN No." />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="bin"><strong>BIN No</strong></label> <br />
            <InputNumber v-model="value" placeholder="Enter BIN No." />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="creditLimit"><strong>Credit Limit</strong></label> <br />
            <InputNumber v-model="value" placeholder="Enter Credit Limit" :useGrouping="false" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="parentClient"><strong>Branch</strong></label> <br />
            <Dropdown
              v-model="selectedBranch"
              :options="branches"
              optionLabel="branches"
              placeholder="Select Branch"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="password"><strong>Password</strong></label> <br />
            <InputText
              type="password"
              v-model="value"
              placeholder="Enter Password"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="password"><strong>Confirm Password</strong></label> <br />
            <InputText
              type="password"
              v-model="value"
              placeholder="Re-type Password"
            />
          </div>
        </div>
        <div>
          <Button type="submit" class="btn btn-success">Edit</Button>
        </div>
      </form>
      </template>
    </Card>
  </div>
</template>

<script>
import Textarea from "primevue/textarea";
import MultiSelect from "primevue/multiselect";
import Password from "primevue/password";
import InputNumber from "primevue/inputnumber";
import Calendar from 'primevue/calendar';
export default {
  name: "EditCustomer",
  components: {
    Textarea,
    MultiSelect,
    Password,
    InputNumber,
    Calendar,
  },

  data() {
    return {
      selectedCompany: null,
       value: null,
      companies: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      selectedDesignation: null,
      designations: [
        { designation: "New York", code: "NY" },
        { designation: "Rome", code: "RM" },
        { designation: "London", code: "LDN" },
        { designation: "Istanbul", code: "IST" },
        { designation: "Paris", code: "PRS" },
      ],
      selectedCategory: null,
      clientCategories: [
        { category: "New York", code: "NY" },
        { category: "Rome", code: "RM" },
        { category: "London", code: "LDN" },
        { category: "Istanbul", code: "IST" },
        { category: "Paris", code: "PRS" },
      ],
      selectedParent: null,
      parentClients: [
        { parentClients: "New York", code: "NY" },
        { parentClients: "Rome", code: "RM" },
        { parentClients: "London", code: "LDN" },
        { parentClients: "Istanbul", code: "IST" },
        { parentClients: "Paris", code: "PRS" },
      ],
      selectedPerson: null,
      persons: [
        { persons: "New York", code: "NY" },
        { persons: "Rome", code: "RM" },
        { persons: "London", code: "LDN" },
        { persons: "Istanbul", code: "IST" },
        { persons: "Paris", code: "PRS" },
      ],
      selectedBranch: null,
      branches: [
        { branches: "New York", code: "NY" },
        { branches: "Rome", code: "RM" },
        { branches: "London", code: "LDN" },
        { branches: "Istanbul", code: "IST" },
        { branches: "Paris", code: "PRS" },
      ],
       home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'CRM'},
                {label: 'Customers'},
                {label: 'Customer List', to: '/CustomerList'},
                {label: 'Edit Customer' , to: '/EditCustomer'}
            ]
    };
  },
};
</script>

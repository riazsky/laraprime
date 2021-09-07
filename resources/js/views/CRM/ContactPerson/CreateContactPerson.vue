<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-5">
      <div class="p-mr-2">
        <h3>Create Contact Persons</h3>
      </div>
      <div>
        <button class="btn btn-secondary">
          <router-link
            to="/ContactPersonList"
            style="color: #fff;text-decoration:none;"
          >Contact Person Lists</router-link>
        </button>
      </div>
    </div>
    <card class="p-mt-5">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-6">
            <label for="firstname">Person Name</label>
            <InputText id="firstname" type="text" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Email Address</label>
            <InputText id="lastname" type="email" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="mobile_number">Mobile Number</label>
            <InputNumber id="mobile_number" mode="decimal" :useGrouping="false" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="alt_mobile_number">Alt Mobile Number</label>
            <InputNumber id="alt_mobile_number" mode="decimal" :useGrouping="false" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="department">Department</label>
            <Dropdown :options="departments" optionLabel="name" placeholder="Select a Department" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="designation">Designation</label>
            <Dropdown
              :options="designations"
              optionLabel="name"
              placeholder="Select a Designation"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="company">Company Name</label>
            <Dropdown :options="companies" optionLabel="name" placeholder="Select a Company" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="branch">Current Branch Name</label>
            <Dropdown :options="branchs" optionLabel="name" placeholder="Select a Branch" />
          </div>
          <div class="p-field p-col-12">
            <label for="address">Address</label>
            <Textarea id="address" class="form-control" rows="4" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="credit_limit">Credit Limit</label>
            <InputNumber id="credit_limit" mode="currency" currency="USD" locale="en-US" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="discount">Discount</label>
            <InputNumber id="discount" suffix="%" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="reference">Reference</label>
            <InputText id="reference" type="text" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="reference_date">Reference Date</label>
            <Calendar id="reference_date" :showIcon="true" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="nid">NID</label>
            <InputNumber id="nid" mode="decimal" :useGrouping="false" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="remarks">Remarks</label>
            <InputText id="remarks" type="text" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="password">Password</label>
            <InputText id="password" type="password" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="confirm_password">Confirm Password</label>
            <InputText id="confirm_password" type="password" />
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

export default {
  name: "EditContactPerson",
  components: {
    Dropdown,
    Button,
    Calendar
  },

  data() {
    return {
      date: null,
      department: null,
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "CRM" },
        { label: "Contact Persons" },
        { label: "Contact Person List", to: "ContactPersonList" },
        { label: "Create Contact Persons" }
      ],
      departments: [
        { name: "Marketing", code: "Mk" },
        { name: "Finance", code: "F" },
        { name: "Designing", code: "D" },
        { name: "Programming", code: "IST" }
      ],
      designation: null,
      designations: [
        { name: "CEO", code: "CEO" },
        { name: "Manager", code: "MG" },
        { name: "Ass. Manager", code: "AM" },
        { name: "Employe", code: "E" }
      ],
      BranchName: null,
      branchs: [
        { name: "Nikunjo", code: "N" },
        { name: "Savar", code: "Sr" },
        { name: "Mohakhali", code: "Mi" },
        { name: "Munshiganj", code: "Mj" }
      ],
      CompanyName: null,
      companies: [
        { name: "Nikunjo", code: "N" },
        { name: "Savar", code: "Sr" },
        { name: "Mohakhali", code: "Mi" },
        { name: "Munshiganj", code: "Mj" }
      ]
    };
  }
};
</script>

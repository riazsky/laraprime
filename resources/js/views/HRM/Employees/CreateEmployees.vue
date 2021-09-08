<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
    <div class="p-d-flex p-jc-between p-mt-5">
      <div class="p-mr-2"><h3>Create Employees</h3></div>
      <div>
        <button class="btn btn-secondary">
          <router-link
            to="/EmployeeLists"
            style="color: #fff; text-decoration: none"
            >Employee Lists</router-link
          >
        </button>
      </div>
    </div>
    <card class="p-mt-5">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-6">
            <label for="firstname">Name</label>
            <InputText id="firstname" type="text" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Email</label>
            <InputText id="lastname" type="email" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="number">Phone</label>
            <InputNumber
              id="number"
              v-model="phone"
              mode="decimal"
              :useGrouping="false"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Department</label>
            <Dropdown
              v-model="department"
              :options="group"
              optionLabel="name"
              placeholder="Select a Department"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Designation</label>
            <Dropdown
              v-model="designation"
              :options="desig"
              optionLabel="name"
              placeholder="Select a Designation"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Shift</label>
            <Dropdown
              v-model="Shift"
              :options="Shifts"
              optionLabel="name"
              placeholder="Select a Shift"
            />
          </div>
          <div class="p-field p-col-12">
            <label for="address">Present Address</label>
            <Textarea id="address" class="form-control" rows="4" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Join Date</label>
            <Calendar id="icon" v-model="date" :showIcon="true" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Duty Type</label>
            <Dropdown
              v-model="Duty"
              :options="Type"
              optionLabel="name"
              placeholder="Select a Duty Type"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="number">Salary</label>
            <InputNumber
              id="withoutgrouping"
              v-model="salary"
              mode="decimal"
              :useGrouping="false"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Salary Type</label>
            <Dropdown
              :options="SalaryType"
              optionLabel="name"
              v-model="salaryvalue"
              placeholder="Select a Salary Type"
            />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="firstname">Employee Id</label>
            <InputText id="firstname" type="text" />
          </div>
          <div class="p-field p-col-12 p-md-6">
            <label for="lastname">Photo</label>
            <input type="file" class="form-control-file" />
          </div>
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-12">
              <h4>Status</h4>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <div class="p-field-radiobutton">
                <RadioButton name="Active" value="Active" v-model="city" />
                <label>Active</label>
              </div>
            </div>
            <div class="p-field p-col-12 p-md-6">
              <div class="p-field-radiobutton">
                <RadioButton name="Deactive" value="Deactive" v-model="city" />
                <label>Deactive</label>
              </div>
            </div>
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

export default {
  name: "CreateEmployees",
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
        { label: "HRM" },
        { label: "Employees" },
        { label: "Employee Lists", to: "/EmployeeLists" },
        { label: "Create Employees" },
      ],
      department: null,
      group: [
        { name: "Marketing", code: "Mk" },
        { name: "Finance", code: "F" },
        { name: "Designing", code: "D" },
        { name: "Programming", code: "IST" },
      ],
      designation: null,
      desig: [
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
      Shift: null,
      Shifts: [
        { name: "1st", code: "ONE" },
        { name: "2nd", code: "TWO" },
      ],
      Duty: null,
      Type: [
        { name: "Full-Time", code: "ONE" },
        { name: "Part-Time", code: "TWO" },
      ],
      salaryvalue: null,
      SalaryType: [
        { name: "Monthly", code: "SM" },
        { name: "Yearly", code: "SY" },
      ],
    };
  },
};
</script>
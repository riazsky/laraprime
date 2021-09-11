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
    <card class="p-mt-3">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <InputText id="firstname" type="text" />
                  <label for="firstname">Name</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <InputText id="lastname" type="email" />
                  <label for="lastname">Email</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <InputNumber id="number" v-model="phone" mode="decimal" :useGrouping="false"/>
                <label for="number">Phone</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <Dropdown v-model="department" :options="group" optionLabel="name" />
                  <label for="lastname">Department</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <Dropdown v-model="designation" :options="desig" optionLabel="name" />
                <label for="lastname">Designation</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <Dropdown v-model="Shift" :options="Shifts" optionLabel="name" />
                <label for="lastname">Shift</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-mt-3">
              <span class="p-float-label">
                <Textarea id="address" class="form-control" rows="3" />
                <label for="address">Present Address</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
            <span class="p-float-label">
              <Calendar id="icon" v-model="date" :showIcon="true" />
              <label for="lastname">Join Date</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                <Dropdown v-model="Duty" :options="Type" optionLabel="name" />
                <label for="lastname">Duty Type</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
            <span class="p-float-label">
              <InputNumber id="withoutgrouping" v-model="salary" mode="decimal" :useGrouping="false" />
              <label for="number">Salary</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
              <span class="p-float-label">
                  <Dropdown :options="SalaryType" optionLabel="name" v-model="salaryvalue"/>
                  <label for="lastname">Salary Type</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
            <span class="p-float-label">
              <InputText id="firstname" type="text" />
              <label for="firstname">Employee Id</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mt-3">
                <input type="file" class="form-control-file" style="padding: 6px;border: 1px solid gray;"/>
                <label for="lastname">Photo</label>
          </div>
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12 p-md-12 p-mt-3">
              <h4>Status</h4>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-3">
              <div class="p-field-radiobutton">
                <RadioButton name="Active" value="Active" v-model="city" />
                <label>Active</label>
              </div>
            </div>
            <div class="p-field p-col-12 p-md-6 p-mt-3">
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
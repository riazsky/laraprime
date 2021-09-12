<template>
  <div>
    <Breadcrumb :home="home" :model="items" class="p-mt-0"/>
    <div class="p-d-flex p-jc-between p-mt-3">
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
    <Card class="p-mt-3">
      <template #content>
        <div class="p-fluid p-grid">
          <div class="p-field p-col-12 p-md-4 p-my-0 p-pb-3 p-pt-0 p-px-2">
              <span class="p-float-label">
                <InputText id="name" type="text" />
                <label for="name">Name</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-my-0 p-pb-3 p-pt-0 p-px-2">
              <span class="p-float-label">
                <InputText id="email" type="email"  />
                <label for="email">Email</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-my-0 p-pb-3 p-pt-0 p-px-2">
              <span class="p-float-label">
                <InputNumber
                id="phone"
                v-model="phone"
                mode="decimal"
                :useGrouping="false"

                />
                <label for="phone">Phone</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
                <Dropdown
                v-model="department"
                :options="group"
                optionLabel="name"
                id="department"

                />
                <label for="department">Department</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
                <Dropdown
                v-model="designation"
                :options="desig"
                optionLabel="name"
                id="Designation"

                />
                <label for="designation">Designation</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
                <Dropdown
                v-model="Shift"
                :options="Shifts"
                optionLabel="name"
                id="shift"
                class="p-inputtext-sm"
                />
                <label for="shift">Shift</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
                <Textarea id="address" class="form-control" rows="4" />
                <label for="address">Present Address</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
                <Calendar id="join_date" v-model="date" :showIcon="true" class="p-calendar-sm"/>
                <label for="join_date">Join Date</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
                <Calendar id="icon" :showIcon="true" class="p-calendar-sm"/>
                <label for="date_of_birth">Date Of Birth</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
            <InputText id="national_id" type="text"  />
            <label for="national_id">National Id</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
                <Dropdown
                :options="dutyType"
                optionLabel="name"
                v-model="dutyValue"

                id="duty_type"
                />
                <label for="duty_type">Duty Type</label>
              </span>
          </div>

           <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
               <span class="p-float-label">
                <Dropdown
                :options="SalaryType"
                optionLabel="name"
                v-model="salaryvalue"
                id="salary_type"
                />
                <label for="salary_type">Salary Type</label>
               </span>
          </div>

          <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
            <InputNumber
              id="salary"
              v-model="salary"
              mode="decimal"
              :useGrouping="false"

            />
            <label for="salary">Salary</label>
              </span>
          </div>

          <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
                <InputText id="employee_id" type="text" />
                <label for="employee_id">Employee Id</label>
              </span>
          </div>
          <div class="p-field p-col-12 p-md-4 p-my-0 p-py-3 p-px-2">
              <span class="p-float-label">
            <input type="file" id="photo" class="form-control-file" />
            <label for="photo">Photo</label>
            </span>
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
    </Card>
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
      dutyValue: null,
      dutyType: [
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

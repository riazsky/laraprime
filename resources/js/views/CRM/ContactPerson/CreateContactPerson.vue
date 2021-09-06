<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-5">
            <div class="p-mr-2"><h3>Create Contact Persons</h3></div>
            <div><button class="btn btn-secondary"><router-link to="/ContactPersonList" style="color: #fff;text-decoration:none;">Contact Person Lists</router-link></button></div>
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
                        <label for="number">Mobile Number</label>
                        <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Alt Mobile Number</label>
                        <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Department</label>
                        <Dropdown v-model="department" :options="group" optionLabel="name" placeholder="Select a Department" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Designation</label>
                        <Dropdown v-model="designation" :options="desig" optionLabel="name" placeholder="Select a Designation" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Company Name</label>
                    <Dropdown v-model="CompanyName" :options="company" optionLabel="name" placeholder="Select a Company" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Current Branch Name</label>
                    <Dropdown v-model="BranchName" :options="branch" optionLabel="name" placeholder="Select a Branch" />
                    </div>
                    <div class="p-field p-col-12">
                        <label for="address">Address</label>
                        <Textarea id="address" class="form-control" rows="4" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Credit Limit</label>
                        <InputNumber id="currency-us" v-model="value9" mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Discount</label>
                        <InputNumber id="percent" v-model="value14" suffix="%" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Reference</label>
                        <InputText id="lastname" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Reference Date</label>
                        <Calendar id="icon" v-model="date" :showIcon="true" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">NID</label>
                        <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Remarks</label>
                        <InputText id="lastname" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Password</label>
                        <InputText id="lastname" type="password" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname">Confirm Password</label>
                        <InputText id="lastname" type="password" />
                    </div>
                </div>
                <Button label="Submit" />
            </template>
        </card>
    </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';

export default {
    name: 'EditContactPerson',
    components:{
        Dropdown,
        Button,
        Calendar

    },

data() {
	return {
        date: null,
		department: null,
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'CRM'},
                {label: 'Contact Persons'},
                {label: 'Contact Person List',to:'ContactPersonList'},
                {label: 'Create Contact Persons'},
            ],
		group: [
			{name: 'Marketing', code: 'Mk'},
			{name: 'Finance', code: 'F'},
			{name: 'Designing', code: 'D'},
			{name: 'Programming', code: 'IST'},
		],
		designation: null,
		desig: [
			{name: 'CEO', code: 'CEO'},
			{name: 'Manager', code: 'MG'},
			{name: 'Ass. Manager', code: 'AM'},
			{name: 'Employe', code: 'E'},
		],
		BranchName: null,
		branch: [
			{name: 'Nikunjo', code: 'N'},
			{name: 'Savar', code: 'Sr'},
			{name: 'Mohakhali', code: 'Mi'},
			{name: 'Munshiganj', code: 'Mj'},
		],
		CompanyName: null,
		company: [
			{name: 'Nikunjo', code: 'N'},
			{name: 'Savar', code: 'Sr'},
			{name: 'Mohakhali', code: 'Mi'},
			{name: 'Munshiganj', code: 'Mj'},
		],

	}
}

}
</script>
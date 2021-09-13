
<template>
    <div>
        <Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-5 p-mb-3">
            <div class="p-mr-2"><h3>Edit Contact Persons</h3></div>
            <div><button class="btn btn-secondary"><router-link to="/ContactPersonList" style="color: #fff;text-decoration:none;">Contact Person Lists</router-link></button></div>
        </div>
        <card>
            <template #content>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputText id="firstname" type="text" v-model="name" />
                            <label for="firstname">Person Name</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputText id="lastname" type="email"  v-model="email" />
                            <label for="lastname">Email Address</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputNumber id="withoutgrouping" v-model="value" mode="decimal" :useGrouping="false" />
                            <label for="number">Mobile Number</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
                            <label for="lastname">Alt Mobile Number</label>
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
                            <Dropdown v-model="CompanyName" :options="company" optionLabel="name" />
                            <label for="lastname">Company Name</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <Dropdown v-model="BranchName" :options="branch" optionLabel="name" />
                            <label for="lastname">Current Branch Name</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-mt-3">
                        <span class="p-float-label">
                            <Textarea id="address" v-model="address" class="form-control" rows="3" />
                            <label for="address">Address</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputNumber id="currency-us" v-model="value9" mode="currency" currency="USD" locale="en-US" />
                            <label for="lastname">Credit Limit</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputNumber id="percent" v-model="value14" suffix="%" />
                            <label for="lastname">Discount</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputText id="lastname" type="text" v-model="Reference" />
                            <label for="lastname">Reference</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <Calendar id="icon" v-model="date" :showIcon="true" />
                            <label for="lastname">Reference Date</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputNumber id="withoutgrouping" v-model="value2" mode="decimal" :useGrouping="false" />
                            <label for="lastname">NID</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputText id="lastname" type="text" v-model="Remarks" />
                            <label for="lastname">Remarks</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputText id="lastname" type="password" v-model="Password"  />
                            <label for="lastname">Password</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-6 p-mt-3">
                        <span class="p-float-label">
                            <InputText id="lastname" type="password"  v-model="CPassword" />
                            <label for="lastname">Confirm Password</label>
                        </span>
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
import Textarea from 'primevue/textarea';

export default {
    name: 'CreateContactPerson',
    components:{
        Dropdown,
        Button,
        Calendar,
        Textarea

    },

data() {
	return {
        date: null,
        name: null,
        email: null,
        value: null,
        value2: null,
        value14: null,
        value9: null,
        address: null,
        Reference: null,
        Remarks: null,
		department: null,
		Password: null,
		CPassword: null,
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'CRM'},
                {label: 'Contact Persons'},
                {label: 'Create Contact Persons',to:'/CreateContactPerson'},
                {label: 'Contact Person Lists',to:'/ContactPersonList'},
                {label: 'Edit Contact Persons'},
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


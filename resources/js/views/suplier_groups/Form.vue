<template>

<card #content>
    <h1>Supplier Form</h1>

    <div class="p-fluid">
        <div class="p-field p-grid">
            <label for="firstname" class="p-col-12 p-md-2 p-mb-md-0">Id</label>
            <div class="p-col-12 p-md-10">
                <InputText id="id" type="number" />
            </div>
        </div>
        <div class="p-field p-grid">
            <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Full Name</label>
            <div class="p-col-12 p-md-10">
                <InputText id="full_name" type="text" />
            </div>
        </div>
        <div class="p-field p-grid">
            <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Email_address</label>
            <div class="p-col-12 p-md-10">
                <InputText id="email" type="text" />
            </div>
        </div>
        <div class="p-field p-grid">
            <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Phone</label>
            <div class="p-col-12 p-md-10">
                <InputText id="phone" type="number" />
            </div>
        </div>
        <div class="p-field p-grid">
            <label for="lastname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Status</label>
            <div class="p-col-12 p-md-10">
                <InputText id="status" type="text" />
            </div>
        </div>
    </div>
    <div>
        <label class="p-col-12 p-md-2"></label>
        <div class="p-col-12 p-md-10">
            <Button label="Submit" class="p-field p-grid"/>
            </div>        
    </div>
    
</card>
</template>
<script>
export default {
    name: 'supplier_form'
}
</script>
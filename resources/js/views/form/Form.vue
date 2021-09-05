<template>
    <card #content>
        <h1>User Form</h1>
        <div class="p-formgroup-inline">
            <div class="p-field">
                <label for="firstname" class="p-sr-only">Firstname</label>
                <InputText id="firstname" type="text" placeholder="Firstname" />
            </div>
            <div class="p-field">
                <label for="lastname" class="p-sr-only">Lastname</label>
                <InputText id="lastname" type="text" placeholder="Lastname" />
            </div>
            <Button type="button" label="Submit" />
        </div>
    </card>
</template>
<script>
export default {
    name:'form'
}
</script>
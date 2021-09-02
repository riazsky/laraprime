<template>
    <div>
        <Card>
            <template #content>
            <InputText v-model="value"></InputText>
            {{value}}
            </template>

        </Card>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                value: ''
            }
        },

    }
</script>

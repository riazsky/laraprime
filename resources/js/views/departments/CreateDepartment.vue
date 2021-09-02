<template>
    <div>
        <Card>
            <template #content>
                {{ title }}
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    name: 'CreateDepartment',
    data() {
        return {
          title: 'hello',
        }
    },

}
</script>

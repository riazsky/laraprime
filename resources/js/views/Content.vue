<template>
    <div>
        <Breadcrumb :home="home" :model="items" class="p-mb-2"/>
        <DataTable :value="cars" :paginator="true" :rows="5"
        sortMode="multiple" :filters="filters" :rowHover="true"
        :selection.sync="selectedCars"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5,10,25,50]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        dataKey="vin"
         editMode="cell" class="editable-cells-table">

             <template #header>
                 <div class="p-d-flex p-jc-between">
                    <div class="">
                        <h2>Tables</h2>
                    </div>
                    <div class="">
                        <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
                    </div>
                 </div>
            </template>

            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>

            <Column field="vin" header="Vin" :sortable="true" filterMatchMode="startsWith">
            <template #filter>
                <InputText type="text" v-model="filters['vin']" class="p-column-filter" />
            </template>

            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>

            </Column>
            <Column field="year" header="Year" :sortable="true" filterMatchMode="contains">
            <template #filter>
                <InputText type="text" v-model="filters['year']" class="p-column-filter" />
            </template>

            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>

            </Column>
            <Column field="brand" header="Brand" :sortable="true"></Column>
            <Column field="color" header="Color" :sortable="true" filterMatchMode="in">
            <template #filter>
                <MultiSelect v-model="filters['color']" :options="colors" optionLabel="name" optionValue="value" placeholder="Select a Color" />
            </template>

            <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
    export default {
        name: 'Content',
        data() {
            return {
                cars: [
                    {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
                    {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
                    {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
                    {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
                    {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
                    {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
                    {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
                    {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
                    {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
                    {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
                ],
                filters: {},
                colors: [
                        {name: 'Orange', value: 'Orange'},
                        {name: 'Black', value:'Black'},
                        {name: 'Gray', value: 'Gray'},
                        {name: 'Blue', value: 'Blue'},
                        {name: 'Yellow', value: 'Yellow'},
                        {name: 'Red', value: 'Red'}
                ],
                selectedCars: null,
                home: {icon: 'pi pi-home', to: '/'},
                items: [
                    {label: 'Computer'},
                    {label: 'Notebook'},
                    {label: 'Accessories'},
                    {label: 'Backpacks'},
                    {label: 'Item'}
                ],
            }
        },

    }
</script>

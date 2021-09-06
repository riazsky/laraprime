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

        <Card #content>
      <h2 class="title">Add Designation</h2>
      <Toast position="bottom-right" />

      <form v-on:submit.prevent="saveDesignation()">
        <div class="form-group p-mt-3">
          <span class="p-float-label">
            <InputText id="name" type="text" v-model="designation.name" class="form-control"/>
            <label for="name">Name</label>
          </span>
        </div>

        <div class="form-group">
          <span class="p-float-label">
            <InputText id="description" type="text" v-model="designation.description" class="form-control"/>
            <label for="description">Description</label>
          </span>
        </div>

        <Button type="submit">
          <span v-if="loading">
            <ProgressSpinner
              style="width:20px;height:20px;margin-right:5px;"
              strokeWidth="8"
              fill="#f0f0f0"
              animationDuration=".5s"
            />
          </span>
          <span v-if="!loading">Save</span>
          <span v-if="loading">Saving..</span>
        </Button>
      </form>
    </Card>
    </div>
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';
    export default {
        name: 'Content',
        components:{
            ProgressSpinner
        },
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
                designation:{
                    name: '',
                    description: ''
               },
               loading: false,
            }
        },

        methods: {
            saveDesignation(){
               var self = this;
               self.loading = true;
               var data = self.designation;
               axios.post('/add-designation',data).then(function(response){
                   console.log(response.status);
                   if(response.data == 'success'){
                       self.loading = false;
                       self.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
                       self.designation = {
                           name: '',
                           description: ''
                       }
                       self.$router.push({name:"About"})
                   }else{
                       self.$toast.add({severity:'error', summary: 'Server Error', detail:'Something went to wrong!', life: 3000});
                       self.loading = false;
                   }
               }).catch(function(error){
                   if(error.response.status == 404)
                   {
                        self.$toast.add({severity:'error', summary: 'Not Found', detail:'Your Request Url or Page Not found!', life: 5000});
                        self.loading = false;
                   }
                   if(error.response.status == 401)
                   {
                        self.$toast.add({severity:'error', summary: 'Unauthenticated', detail:'Your are Not an Authenticated Person!', life: 5000});
                        self.loading = false;
                   }
                   if(error.response.status == 403)
                   {
                        self.$toast.add({severity:'error', summary: 'Forbidden', detail:'Access denid!', life: 5000});
                        self.loading = false;
                   }
                   if(error.response.status == 405)
                   {
                        self.$toast.add({severity:'error', summary: 'Method Not Allowed', detail:'Your Request Method does allow between http url', life: 5000});
                        self.loading = false;
                   }
                   if(error.response.status == 500){
                        self.$toast.add({severity:'error', summary: 'Internal Server Problem', detail:'Database Server connection or query Problem!', life: 5000});
                        self.loading = false;
                   }

                    // console.log(error.response.data);
                    // console.log(error.response.statusText);
                    // console.log(error.response.headers);
                    // console.log(error.response)
            });
           }
        },

    }
</script>

<template>
  <div>
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
    name: 'CreateDesignation',
    components:{
        ProgressSpinner
    },
    data() {
        return {
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
};
</script>

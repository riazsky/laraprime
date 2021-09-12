<template>
  <div>
    <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
    <div class="p-d-flex p-jc-between p-mb-4">
      <h2>Create Warehouse</h2>
      <button class="btn btn-success">
        <router-link to="/list-warehouse" class="text-white"
          >List Warehouse</router-link
        >
      </button>
    </div>
    <Card>
      <template #content>
        <div class="p-fluid p-col-6 p-m-auto">
          <div class="p-field p-col-12 p-mb-4">
            <span class="p-float-label">
              <InputText id="title" type="text" />
              <label for="title">Title</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-mb-5">
            <span class="p-float-label">
              <Dropdown id="dropdown" v-model="warehouse" :options="warehouses" optionLabel="warehouseName" />
              <label for="select_parent_warehouse">Parent warehouse</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-mb-4">
            <span class="p-float-label">
              <Textarea v-model="description" :autoResize="true" rows="5" />
              <label for="lastname">Description</label>
            </span>
           
          </div>
          <div class="p-field p-grid p-col-12">
            <div class="p-d-flex p-col-12 p-ai-start">
                <label for="status" class="p-mr-4">Status</label>
                <Checkbox v-model="status" :binary="true" />
                <span v-if="status" class="p-ml-2">Active</span>
                <span v-else class="p-ml-2">Inactive </span>
            </div>
          </div>
          <div class="p-field p-grid p-col-12">
            <div class="p-d-flex p-col-12">
                <label for="logo" class="p-mr-4">Choose a logo</label>
                <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="./upload.php"
                    accept="image/*"
                    :maxFileSize="1000000"
                    @upload="onUpload"
                />
            </div>
          </div>
          <div class="p-field p-col-12 p-md-12">
            <button label="Submit" class="form-control btn btn-success">
              Create
            </button>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
 
<script>
  import Checkbox from "primevue/checkbox";
  import Dropdown from "primevue/dropdown";
  import FileUpload from "primevue/fileupload";
  import Textarea from "primevue/textarea";

  export default {
    name: "Createwarehouse",
    components: {
      Checkbox,
      Dropdown,
      FileUpload,
      Textarea,
    },
    data() {
      return {
        status: true,

        home: { icon: "pi pi-home", to: "/" },
        items: [
          { label: "Base" },
          { label: "Warehouse" },
          { label: "List Warehouse", to: "/list-warehouse" },
          { label: "Create Warehouse" },
        ],
        description: null,
        warehouse: null,
        warehouses: [
          {warehouseName: 'gggg', code: 'NY'},
          {warehouseName: 'Rome', code: 'RM'},
          {warehouseName: 'London', code: 'LDN'},
          {warehouseName: 'Istanbul', code: 'IST'},
          {warehouseName: 'Paris', code: 'PRS'}
        ],
      };
    },
    methods: {
      onUpload() {
        this.$toast.add({
          severity: "info",
          summary: "Success",
          detail: "File Uploaded",
          life: 3000,
        });
      },
    },
  };
</script>
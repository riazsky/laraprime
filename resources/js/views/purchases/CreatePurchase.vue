<template>
  <div>
      <Breadcrumb :home="home" :model="items" />

            <div class="p-d-flex p-jc-between p-mt-3">

                <h2 class="title">Add Purchase</h2>

                <Button><router-link to="/purchase-list" class="text-white">Purchase List</router-link></Button>
            </div>

    <Card class="p-mt-3">

        <template #content>
            <Toast position="bottom-right" />

            <div v-for="(product,index) in products" :key="index">
                    <label for="name">Name</label>
                    <InputText id="name" type="text" v-model="product.name" />

                    <label for="quantity">Quantity</label>
                    <InputText id="quantity" type="text" v-model="product.quantity" />

                    <label for="price">Price</label>
                    <InputText id="price" type="text" v-model="product.price" />
                    <Button @click="minusProduct(index)" class="p-button-danger"><i class="pi pi-minus"></i></Button>
            </div>

            <Button @click="addProduct">
                <i class="pi pi-plus"></i>
            </Button>
        </template>

    </Card>

  </div>
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';
export default {
    name: 'CreatePurchase',
    components:{
        ProgressSpinner
    },
    data() {
        return {
            products: [
                {name:'', quantity:'',price:''},
            ],
            home:{icon:'pi pi-home', to:'/'},
            items: [
                {label: 'Computer',to:'/supplier'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    },
    methods: {
        addProduct(){
            this.products.push({name:'',quantity:'',price:''})
        },
        minusProduct(key){
            this.products.splice(key, 1);
            if(key===0)
            this.addProduct()
        }

    },
};
</script>

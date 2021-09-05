<template>
  <div>
    <Card #content>
      <h2 class="title">Add Purchase</h2>
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

        <div class="card">
            <div class="card-header">
                <div class="card-title"></div>
            </div>
            <div class="card-body">

            </div>
            <div class="card-footer"></div>
        </div>

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

<template>
    <div>
        <Card>
            <template #content>
                <div class="p-d-flex p-jc-center">
                    <div class="p-col-10">
                        <div v-for="(product,index) in products" :key="index">
                            Name: <input type="text" v-model="product.name" class="p-mb-2 p-mr-3">
                            Category: <input type="text" v-model="product.category" class="p-mb-2 p-mr-3">
                            Price: <input type="number" v-model="product.price" class="p-mb-2 p-mr-4">
                            <button @click="remove(index)">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="p-mt-4"><button @click="add" class="p-m-auto">Add</button></div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    name: 'InputRepeater',
    data() {
        return {
            products: [
                {
                    name: '',
                    category: '',
                    price: '',
                }
            ]
        }
    },
    methods: {
        add() {
            this.products.push(
                {
                    name: '',
                    category: '',
                    price: '',
                }
            );
        },
        remove(index) {
            this.products.splice(index, 1);
        }
    }
}
</script>
<template>
    <div>
        <card>
            <template #content>
                <div v-for="(item,index) in items" :key="index">
                    <input type="text" v-model="item.name" >
                    <input type="number" v-model="item.quantity">
                    <input type="number" v-model="item.price">
                    <button @click="remove(index)">-</button>
                </div>
                <button @click="add">+</button>
            </template>
        </card>
    </div>
</template>
<script>
export default {
    name:'AddRemove',
    data(){
        return{
            items:[
                {name:'',quantity:'',price:''}
            ]
        }
    },
    methods:{
        add(){
            this.items.push({name:'',quantity:'',price:''})
        },
        remove(index){
            this.items.splice(index,1)
        }
    }
}
</script>





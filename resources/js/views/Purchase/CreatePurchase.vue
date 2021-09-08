<template>
    <div>
        <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
        <div class="p-d-flex p-jc-between p-mb-4">
            <h2>Create Purchase</h2>
            <button class="btn btn-danger"><router-link to="/list-purchase" class="text-white">List Purchase</router-link></button>
        </div>
        <Card>
            <template #content>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-4 p-p-1">
                        <label for="purchase_date">Purchase Date</label>
                        <Calendar id="purchase_date" v-model="icon" :showIcon="true" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="buyer_name">Suplier Name</label>
                        <Dropdown v-model="selectedSuplier" :options="suplier" optionLabel="name" placeholder="Select a suplier name" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="warehouse">Warehouse</label>
                        <Dropdown v-model="selectedWarehouse" :options="warehouse" optionLabel="name" placeholder="Select a Warehouse" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="reference_no">Reference No</label>
                        <InputText id="reference_no" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="invoice_no">Invoice No</label>
                        <InputText id="invoice_no" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="purchase_satus">Purchase Status</label>
                        <InputText id="purchase_satus" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="payment_status">Payment Status</label>
                        <InputText id="payment_status" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="purchase_by">Purchase By</label>
                        <InputText id="purchase_by" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="total_price">Total Price</label>
                        <InputText id="total_price" type="number" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="subtotal_price">Suporter Price</label>
                        <InputText id="subtotal_price" type="number" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="total_quantity">Total Quantity</label>
                        <InputText id="total_quantity" type="number" />
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <label for="total_product">Total Product</label>
                        <InputText id="total_product" type="number" />
                    </div>
                </div>
                
                <div style="background-color: #e4ebea">
                    <div v-for="(purchase, index) in purchases" :key="index" class="p-d-flex p-ai-end p-p-2">
                        <div class="p-col-3">
                            <label for="product_name">Product Name</label>
                            <select v-model="purchase.name" id="product_name" class="form-control" >
                                <option value="">-- Select a Name --</option>
                            </select>
                        </div>
                        <div class="p-col-2">
                            <label for="qty">Qty</label>
                            <input v-model="purchase.qty" type="tel" name="" id="qty" class="form-control">
                        </div>
                        <div class="p-col-2">
                            <label for="per_price">Per Price</label>
                            <input v-model="purchase.per_price" type="tel" name="" id="per_price" class="form-control">
                        </div>
                        <div class="p-col-3">
                            <label for="total_price">Total Price</label>
                            <input v-model="purchase.total_price" type="tel" name="" id="total_price" class="form-control">
                        </div>
                        <div class="p-col-1">
                            <input @click="remove(index)" type="button" value="-" class="form-control btn btn-danger">
                        </div>
                    </div>
                    <div class="p-d-flex p-ai-end p-p-2">
                        <div class="p-col-2">
                            <input @click="add" type="button" value="+" class="btn btn-success">
                        </div>
                    </div>
                </div>

                <div class="p-fluid p-formgrid p-grid mt-3">
                    <div class="p-field p-col-12">
                        <label for="note">Note</label>
                        <Textarea id="note" rows="4" />
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <div class="p-col-4">
                        <div class="p-grid">
                            <div class="p-col-6">
                                <label for="sale_discount"><h4>Sale Discount:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="sale_discount" type="number" />
                            </div>
                            <div class="p-col-6">
                                <label for="total_discount"><h4>Total Discount:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="total_discount" type="number" />
                            </div>
                            <div class="p-col-6">
                                <label for="total_tax"><h4>Total Tax:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="total_tax" type="number" />
                            </div>
                            <div class="p-col-6">
                                <label for="shipping_cost"><h4>Shipping Cost:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="shipping_cost" type="number" />
                            </div>
                            <div class="p-col-6">
                                <label for="grand_total"><h4>Grand Total:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="grand_total" type="number" />
                            </div>
                            <div class="p-col-6">
                                <label for="privious"><h4>Previous:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="privious" type="number" />
                            </div>
                            <div class="p-col-6">
                                <label for="net_total"><h4>Net Total:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="net_total" type="number" />
                            </div>
                            <div class="p-col-6">
                                <label for="paid_amount"><h4>Paid Amount:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="paid_amount" type="number" />
                            </div>
                            <div class="p-col-6">
                                <label for="due"><h4>Due:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputText id="due" type="number" />
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <button type="submit" class="btn btn-danger">Save Purchase</button>
                </div>

            </template>
        </Card>
    </div>
</template>

<script>
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';

export default {
    name: 'CreatePurchase',
    components: {
        Textarea,
        Calendar,
        Dropdown
    },
    data() {
        return {
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Base'},
                {label: 'List Purchase', to:"/list-purchase"},
                {label: 'Create Purchase'}
            ],
            purchases: [{
                name: '',
                qty: '',
                per_price: '',
                total_price: '',
            }],
            icon: null,
            selectedSuplier: null,
            suplier: [
                {name: 'Kawsar Ahmed', code: 'NY'},
                {name: 'Rafiqul Islam', code: 'RM'},
            ],
            selectedWarehouse: null,
            warehouse: [
                {name: 'Dhaka Division', code: 'NY'},
                {name: 'Khulna Division', code: 'RM'},

            ],
        }
    },
    methods: {
        add() {
            this.purchases.push({
                name: '',
                qty: '',
                per_price: '',
                total_price: '',
            });
        },
        remove(index) {
            this.purchases.splice(index, 1);
            if(index === 0){
                this.add();
            }
        }
    }

}
</script>

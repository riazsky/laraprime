<template>
    <div>
        <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
        <div class="p-d-flex p-jc-between p-mb-4">
            <h2>Purchase Invoice</h2>
            <button class="btn btn-danger"><router-link to="/create-purchase" class="text-white">Create Purchase</router-link></button>
        </div>
        <Card>
            <template #header>
                <div class="p-text-right p-p-4">
                    <h3>INVOICE-12345678</h3>
                    9th September 2021
                </div>
                <Divider />
                <div class="p-grid p-jc-between p-px-4">
                    <div class="p-col-3">
                        <h4>From: Dynofy</h4>
                        <p>
                            350 Rhode Island Street, Suit 240 San fransisco, California 94103 <br>
                            Phone: 415-767-3600<br>
                            Email: contact@dynofy.com
                        </p>
                    </div>
                    <div class="p-col-3">
                        <h4>To: John Doe</h4>
                        <p>
                            425 Market Street, Suit 2200 San fransisco, California 94104 <br>
                            Phone: 415-767-3600<br>
                            Email: john@doe.com
                        </p>
                    </div>
                    <div class="p-col-5 p-text-right">
                        <h4>Pament Details</h4>
                        Date: DK888-777<br>
                        Vat: $1019<br>
                        Total Amount: 9th September 2021<br>
                        Account Name: Flater<br>
                    </div>
                </div>
            </template>
            <template #content>
                <DataTable :value="PurchaseInvoice">
                    <Column field="sl" header="#" headerStyle="width: 50px"></Column>
                    <Column field="item" header="Item"></Column>
                    <Column field="quantity" header="Quantity" headerStyle="width: 150px"></Column>
                    <Column field="unit_price" header="Unit Price" headerStyle="width: 150px"></Column>
                    <Column field="total_price" header="Total Price" headerStyle="width: 150px"></Column>
                </DataTable>
            </template>
            <template #footer>
                <div class="p-grid p-jc-between">
                    <div class="p-col-6">
                        <h3 class="p-mb-4">Thank you</h3>
                        <button class="btn btn-success"><i class="pi pi-print" style="fontSize: 1rem"></i> Print Invoice</button>
                        <button class="btn btn-danger"><i class="pi pi-envelope" style="fontSize: 1rem"></i> Mail Invoice</button>
                    </div>
                    <div class="p-col-6">
                    <div class="p-grid p-jc-end">
                            <table>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>:</td>
                                    <td class="p-text-right">$1019</td>
                                </tr>
                                <tr>
                                    <td>Discount(10%)</td>
                                    <td>:</td>
                                    <td class="p-text-right">$101</td>
                                </tr>
                                <tr>
                                    <td>VAT(8%)</td>
                                    <td>:</td>
                                    <td class="p-text-right">$73</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>:</td>
                                    <td class="p-text-right">$991</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import Divider from 'primevue/divider';

export default {
    name: 'PurchaseInvoice',
    components: {
        Divider
    },
    data() {
        return {
        PurchaseInvoice: [
            {'sl':'1', 'item':'Flatter Theme', 'quantity':'10', 'unit_price':'$18', 'total_price':'$180'},
            {'sl':'2', 'item':'Flat Icon', 'quantity':'6', 'unit_price':'$59', 'total_price':'$254'},
            {'sl':'3', 'item':'Wordpress Version', 'quantity':'4', 'unit_price':'$95', 'total_price':'$285'},
            {'sl':'4', 'item':'Server Development', 'quantity':'1', 'unit_price':'$300', 'total_price':'$300'}
        ],
        home: {icon: 'pi pi-home', to: '/'},
        items: [
          {label: 'Purchase'},
        //   {label: 'Create Purchase', to:"/create-purchase"},
          {label: 'Purchase Invoice'}
      ]
        }
    }
}
</script>

<style>
td{
    padding: 5px;
    font-weight: bold;
}
</style>
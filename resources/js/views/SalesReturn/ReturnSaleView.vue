<template>
<div>
 <Breadcrumb :home="home" :model="items" />
    <Card class="p-mt-3">
        <template #content>
            <!-- Part one start -->
            <div class="p-d-flex p-jc-between">
                <div><i class="pi pi-send text-primary"  style="font-size: 40px;"></i></div>
                <div class="text-right">
                    <h4>INVOICE-51655241</h4>
                    <h6>14 April 2121</h6>
                </div>
            </div>
             <!-- Part one end -->
<hr>
    <div>
         <!-- Part two start -->
            <div class="p-grid p-jc-start p-mt-5">
                <div class="p-col-6 p-md-4">
                    <div class="box">
                        <h4>From: Dynofi</h4>
                            <address>
                                Visit us at:<br>
                                Example.com<br>
                                Box 564, Disneyland<br>
                                USA<br>
                                Phone: 21621951<br>
                                Email: asdf@asldf.com
                            </address> 
                    </div>
                </div>
                <div class="p-col-6 p-md-4">
                    <div class="box">
                        <h4>To: Jone Due</h4>
                            <address>
                                Visit us at:<br>
                                Example.com<br>
                                Box 564, Disneyland<br>
                                USA<br>
                                Phone: 21621951<br>
                                Email: asdf@asldf.com
                            </address>                        
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="box">
                        <h4>Payment details</h4>
                            <p>
                                Date: 14 April<br>
                                Vat: DK4541-6546<br>
                                Box 564, Disneyland<br>
                                Total Amount: 451$<br>
                                Account Name: Jonh Due
                            </p>                        
                    </div>
                </div>
            </div>
             <!-- Part two end -->
        </div>
        <!-- Part Three start -->
        <div>
            <table class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" style="width: 50%;">Item</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td style='text-align: center;'>45</td>
                            <td style='text-align: center;'>$45</td>
                            <td style='text-align: center;'>$32</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td style='text-align: center;'>45</td>
                            <td style='text-align: center;'>$45</td>
                            <td style='text-align: center;'>$32</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td style='text-align: center;'>45</td>
                            <td style='text-align: center;'>$45</td>
                            <td style='text-align: center;'>$32</td>
                        </tr>
                    </tbody>
                </table>
            </table>
        </div>
        <!-- Part Three end -->
    	<!-- Part Four start -->

            <div class="p-d-flex p-col-12">
                <div class="p-col-6">
                <h4>Thank You!</h4>
                <Button type="button" label="Print Invoice" icon="pi pi-print" class="p-button-primary p-mb-1" badgeClass="p-badge-info" />
                <Button type="button" label="Mail Invoice" icon="pi pi-envelope" class="p-button-danger p-mb-1" badgeClass="p-badge-info" />
                </div>

                <div class="p-col-6">
                    <div class="box" style='margin-left:20%;'>
                        <table style="width:100%">
                            <tr>
                                <th>Subtotal:</th>
                                <td >$50</td>
                            </tr>
                            <tr>
                                <th>Discount(10%):</th>
                                <td>$10</td>
                            </tr>
                            <tr>
                                <th>Vat(8%):</th>
                                <td>$8</td>
                            </tr>
                            <tr>
                                <th>Total:</th>
                                <td>$845</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </template>
    </Card>
             <!-- Part four end -->
    </div>

</template>
<script>
// All Import Start
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
// All Import End
export default {
    name: 'ReturnSaleView',
    components: {
        Button,
        Breadcrumb

    },
    data (){
        return{
            home: { icon: "pi pi-home", to: "/" },
            items: [
                { label: "Sales Return" },
                { label: "Return Sales Lists", to: "/ReturnSalesLists" },
                { label: "Create Sales Return",to: "/CreateSalesReturn"  },
                { label: "Sales Return View" },
            ],

        }
    }


}
</script>
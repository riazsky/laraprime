<template>
  <div class="flex-center position-ref full-height">
        <div class="p-grid">
            <div class="p-md-6">
                <Card #content>
                    <Chart type="bar" :data="basicData" :options="basicOptions" />
                </Card>
            </div>

            <div class="p-md-6">
                <Card #content>
                    <Chart type="pie" :data="basicData" :options="basicOptions" />
                </Card>
            </div>
        </div>

        <div class="p-grid">
            <div class="p-md-6">
                <Card #content>
                    <Chart type="doughnut" :data="basicData" :options="basicOptions" />
                </Card>
            </div>

            <div class="p-md-6">
                <Card #content>
                    <Chart type="line" :data="basicData" :options="basicOptions" />
                </Card>
            </div>
        </div>

        <div class="p-grid">
            <div class="p-md-6">
                <Card #content>
                    <Chart type="polarArea" :data="basicData" :options="basicOptions" />
                </Card>
            </div>

            <div class="p-md-6">
                <Card #content>
                    <Chart type="radar" :data="basicData" :options="basicOptions" />
                </Card>
            </div>
        </div>

  </div>
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';

const Chart = require('primevue/chart/chart.common')


   export default {
       name: 'Welcome',
       components:{
           ProgressSpinner,
           Chart
       },
       data() {
           return {
               basicData:{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            backgroundColor: '#42A5F5',
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                        {
                            label: 'My Second dataset',
                            backgroundColor: '#FFA726',
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }
                    ]
                },
                basicOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#495057'
                        },
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            },
           }
       },

   }
</script>


<template>
    <div>
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'ProductChart',
        components: {
            apexchart: VueApexCharts,
        },
        data() {
            return {
            series: [{
                data: [5, 8, 11, 4, 3, 2]
            }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'bar',
                    },
                    colors: ['#1A936F', '#6564DB', '#B4E1FF', '#FCBFB7', '#4B2142'],
                    plotOptions: {
                        bar: {
                            columnWidth: '45%',
                            distributed: true,
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    legend: {
                        show: false
                    },
                    xaxis: {
                        categories: [
                            'Whey',
                            'Pre',
                            'Creatine',
                            'Venom',
                            'Dumbell',
                            'Shaker',
                        ],
                        labels: {
                            style: {
                                colors: this.colors,
                                fontSize: '12px'
                            }
                        }
                    }
                }
            }
        },
    }
</script>
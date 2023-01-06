<template>
    <div>
        <apexchart type="area" height="350" width="800" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'UserChart',
        components: {
            apexchart: VueApexCharts,
        },
        data() {
            return {
                series: [],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'area',
                        zoom: {
                            enabled: false
                        },
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'string',
                        categories: ["Q1 / 2022", "Q2 / 2022", "Q3 / 2022", "Q4 / 2022", "Q1 / 2023", "Q2 / 2023", "Q3 / 2023", "Q4 / 2023"]
                    },
                    tooltip: {
                        theme: 'dark',
                        shared: true,
                    },
                    toolbar: {
                        show: false
                    },
                    theme: {
                        mode: 'light',
                        palette: 'palette1',
                        monochrome: {
                            enabled: false,
                            color: '#255aee',
                            shadeTo: 'light',
                            shadeIntensity: 0.65
                        },
                    }
                }
            }
        },
        mounted() {
            axios
                .get('https://localhost:44349/account/GetActiveUsers')
                .then(response => {
                    this.series = [{
                        name: 'actief',
                        data: [4, response.data[0]]
                    },
                        {
                            name: 'non-actief',
                            data: [2, response.data[1]]
                        }]
                    console.log(this.series)
                })
        }
    }
</script>

<style scoped>
</style>
<template>
    <div>
        <apexchart type="area" height="350" width="800" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'UserChart',
        components: {
            apexchart: VueApexCharts,
        },
        data() {
            return {
                series: [{
                    name: 'non-actief',
                    data: [0, 3, 1, 7, 9, 10, 3, 4]
                }, {
                    name: 'actief',
                    data: [11, 32, 45, 32, 54, 48, 51, 52]
                }],
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
        }
    }
</script>

<style scoped>
</style>
<template>
    <div>
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: 'GraphView',
        components: {
            apexchart: VueApexCharts,
        },
        data() {
            return {
                series: [{
                    data: [85, 83, 84, 81, 82, 78],
                }],
                chartOptions: {
                    chart: {
                        height: 250,
                        type: 'line',
                        id: 'graph'
                    },
                    colors: ['#6564DB'],
                    annotations: {
                        yaxis: [{
                            y: 75,
                            borderColor: '#e30000',
                            label: {
                                borderColor: '#e30000',
                                style: {
                                    color: '#fff',
                                    background: '#e30000',
                                },
                                text: 'Goal',
                            }
                        }]
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    grid: {
                        padding: {
                            right: 30,
                            left: 20
                        }
                    },
                    title: {
                        text: 'Progressie',
                        align: 'left'
                    },
                    labels: ["april" ,"mei", "juni", "juli", "augustus", "september"],
                    xaxis: {
                        type: 'string',
                    },
                    yaxis: {
                        forceNiceScale: true,
                        min: 70
                    }
                },
            }
        }
    }
</script>
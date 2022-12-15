<template>
    <div class="body">
        <h1 style="margin-top: 3vh; color: black">Welkom Admin</h1>
        <br />
        <b-container class="min-height content-wrapper container-fluid">
            <b-row>
                <b-col sm>
                    <b-card>
                        <h4>Gebruikers</h4>
                        <h2 class="text-right">271</h2>
                    </b-card>
                </b-col>
                <b-col sm>
                    <b-card>
                        <h4>Trainers</h4>
                        <h2 class="text-right">8</h2>
                    </b-card>
                </b-col>
                <b-col sm>
                    <b-card>
                        <h4>Producten</h4>
                        <h2 class="text-right">31</h2>
                    </b-card>
                </b-col>
                <b-col sm>
                    <b-card>
                        <h4>Omzet</h4>
                        <h2 class="text-right">$ 203</h2>
                    </b-card>
                </b-col>
            </b-row>

            <b-row class="second">
                <b-col cols="7">
                    <b-row class="top-3">
                        <h2>Top 3 producten</h2>
                        <b-col>
                            <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
                        </b-col>
                        <b-col class="stats-top">
                            <b-row style="margin-bottom: 25%;">
                                <h3>Omzet:</h3>
                                <h5>$ 120</h5>
                            </b-row>
                            <b-row>
                                <h3>Totaal verkocht:</h3>
                                <h5>24 st.</h5>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col cols="5">
                    <ProductChart class="chart"/>
                </b-col>
            </b-row>
        
            <b-row class="update">
                <h2 style="margin-bottom: 3vh">Update data</h2>
                <b-col sm class="animate">
                    <b-link to="admin/users">
                        <h4 class="link">Gebruikers</h4>
                    </b-link>
                </b-col>
                <b-col sm class="animate">
                    <b-link to="admin/trainers">
                        <h4  class="link">Trainers</h4>
                    </b-link>
                </b-col>
                <b-col sm class="animate">
                    <b-link to="admin/products">
                        <h4  class="link">Producten</h4>
                    </b-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import ProductChart from './ProductChart.vue'

    export default {
        name: 'AdminView',
        components: {
            apexchart: VueApexCharts,
            ProductChart,
        },
        data() {
            return {
                series: [5, 8, 11],
                chartOptions: {
                    chart: {
                        type: 'donut',
                    },
                    colors: ['#1A936F', '#6564DB', '#B4E1FF'],
                    labels: ["whey", "pre", "creatine"],
                    dataLabels: {
                        enabled: false
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 300
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
            }
        },
    }
</script>

<style scoped>
    .min-height{
        min-height: calc(100vh - 130px)
    }

    .content-wrapper{
        padding: 25px 30px;
    }

    .container-fluid {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        background-color: #2600c412;
    }

    .text-right{
        text-align: right;
        margin-right: 15%;
    }

    .second {
        align-content: start;
        text-align: left;
        margin-top: 5vh;
    }

    .top-3 {
        background-color: white;
        padding: 25px 30px;
        border-radius: 10px;
    }

    .stats-top{
        max-width: 35%;
    }

    .chart {
        background-color: white;
        padding: 11px 20px;
        border-radius: 10px;
    }

    .update {
        color: black;
        padding: 11px 20px;
        margin-top: 5vh;
        text-align: left;
    }

    .animate {
        --g: 5px; /* the gap */
        --b: 6px; /* border thickness*/
        --c: #808080; /* the color */
        padding: calc(var(--g) + var(--b));
        --_c: #0000 0 25%, var(--c) 0 50%;
        --_g1: repeating-linear-gradient(90deg,var(--_c)) repeat-x;
        --_g2: repeating-linear-gradient(180deg,var(--_c)) repeat-y;
        background: var(--_g1) var(--_p, 25%) 0,var(--_g2) 0 var(--_p,125%), var(--_g1) var(--_p,125%) 100%,var(--_g2) 100% var(--_p, 25%);
        background-size: 200% var(--b),var(--b) 200%;
        cursor: pointer;
        filter: grayscale(50%);
        transition: .3s;
        text-align: center;
        text-decoration: none;
        height: 10vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 30% !important;
        margin-right: 3.33%;
        background-color: white;
        border-radius: 10px;
        border-radius: 10px;
    }

    .animate:hover {
        --_p: 75%;
        filter: grayscale(0%);
    }

    .body{
        background-color: white;
    }

    .link{
        color: black;
        text-decoration-color: black !important;
    }
        
</style>
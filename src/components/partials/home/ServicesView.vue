<template>
    <div>
        <b-row class="services">
            <div class="split left">
                <img src="./Quote.jpg" border="0" class="image"/>
            </div>

            <div class="split right">
                <h1 class="header">Beschikbare diensten</h1>
                <br />
                <b-container fluid class="text list">
                    <b-row class="space">
                        <b-col sm="1">
                            <p class="colon">~</p>
                        </b-col>
                        <b-col cols="8">
                            <h2 class="smaller">Inleidend consult</h2>
                            <h3 class="smaller">Geweldige ondersteuning</h3>
                        </b-col>
                    </b-row>
                    <b-row class="space">
                        <b-col  sm="1">
                            <p class="colon">~</p>
                        </b-col>
                        <b-col cols="8">
                            <h2 class="smaller">Branding & positionering analyse</h2>
                            <h3 class="smaller">Toegewijd aan u</h3>
                        </b-col>
                    </b-row>
                    <b-row class="space">
                        <b-col  sm="1">
                            <p class="colon">~</p>
                        </b-col>
                        <b-col cols="8">
                            <h2 class="smaller">Milon Cirkel Premium</h2>
                            <h3 class="smaller">Meer resultaten in minder tijd</h3>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </b-row>
    </div>
</template>

<script>
    export default {
    name: 'ServicesView',

    components: {
    },
  }</script>

<style scoped>

    .image {
        max-height: 520px;
        width: 101.3%;
    }
    .services{
        width:100.65% !important;
        height: 520px;

    }

    .split {
        width: 50% !important;
    }

    .left{
        align-content:center;
    }

    .right {
        background-color: #602577;
        text-align: center;
    }

    .header{
        color:white;
        text-align:center;
        margin-top: 30px;
        font-size: 42px;
        
    }
    .text{
        color:white;
        text-align:left;
    }

    .list{
        margin-top: 10px;
        margin-left: 10%;
    }

    .colon{
        font-size: 40px;
    }

    .space{
        margin-top: 30px;
    }

    @media only screen and (max-width: 600px) {
        .colon {
            visibility: hidden;
        }
        .space{
            margin-top: -50px;
            font-size: 10% !important;
        }

        .header{
            font-size: 26px;
            margin-bottom: -20px;
        }
        .smaller{
            font-size: 18px;
            margin-left: -20px;
            width: 170%;
        }

        .services{
            height: 450px !important;
        }
    }
</style>

<template>
    <div class="background">
        <h1 style="margin-bottom: 50px;">
            Lopende actie(s)
        </h1>
        <b-container>
            <b-row>
                <b-col class="card">
                    <div>
                    </div>
                </b-col>
                <b-col class="card">
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col class="bottom">
                    <div>
                        <h2>
                            7 dagen gratis
                        </h2>
                        <h5>Altijd bij Body Movement</h5>
                        <b-button variant="dark">Details</b-button>
                    </div>
                </b-col>
                <b-col class="bottom">
                    <h2 class="pretty">
                        'MORE'vember
                    </h2>
                    <h5 class="pretty">za 1 okt tot ma 31 okt</h5>
                    <b-button variant="dark">Details</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'SaleView',

        data() {

        },
    }
</script>

<style>
    .background{
        background-color: #181818;
        color: white;
        height: 800px;
    }

    .card {
        height: 500px !important;
        max-width: 400px !important;
        background-color: rebeccapurple !important;
        color: black;
        border-radius: 0px;
        margin: 50px;
        align-content: center;
        margin-left: 10%;
    }

    .bottom {
        height: 200px;
        max-width: 400px !important;
        width: 400px !important;
        background-color: white;
        align-content: center;
        margin-left: 10% !important;
        margin-top: -55px !important;
        margin: 50px;
        position: relative;
        color: black
    }

    .pretty{
        margin-top: 20px !important;
    }

    .bottom:hover {
        height: 700px !important;
        top: -500px;
    }

</style>
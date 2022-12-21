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
                        <p class="style">Get the <a href="#" data-replace="details"><span>details</span></a></p>
                    </div>
                </b-col>
                <b-col class="bottom">
                    <h2 class="pretty">
                        'MORE'vember
                    </h2>
                    <h5 class="pretty">za 1 okt tot ma 31 okt</h5>
                    <p class="style">Get the <a href="#" data-replace="details"><span>details</span></a></p>
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

<style scoped>
    a {
        overflow: hidden;
        position: relative;
        display: inline-block;
        color: rebeccapurple;
        text-decoration: none;
        font-weight: 700;
        vertical-align: top;
    }

    .style {
        place-items: center;
    }

        a::before,
        a::after {
            content: '';
            position: absolute;
            width: 100%;
            left: 0;
        }

        a::before {
            background-color: mediumpurple;
            height: 2px;
            bottom: 0;
            transform-origin: 100% 50%;
            transform: scaleX(0);
            transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
        }

        a::after {
            content: attr(data-replace);
            height: 100%;
            top: 0;
            transform-origin: 100% 50%;
            transform: translate3d(200%, 0, 0);
            transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
            color: mediumpurple;
        }

        a:hover::before {
            transform-origin: 0% 50%;
            transform: scaleX(1);
        }

        a:hover::after {
            transform: translate3d(0, 0, 0);
        }

        a span {
            display: inline-block;
            transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
        }

        a:hover span {
            transform: translate3d(-200%, 0, 0);
        }



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

    @media only screen and (max-width: 600px) {
        .bottom {
            max-width: 190px !important;
            margin-left: 3.5% !important;
            margin-right: 3.3% !important;
        }
            .bottom:hover {
                height: 660px !important;
                top: -460px;
            }

        .card{
            margin: 15px;
        }

    }

</style>
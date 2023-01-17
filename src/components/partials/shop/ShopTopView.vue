<template>
    <div>
        <b-row class="top-btn">
            <b-col>
                <b-button class="cat-btn">Voeding</b-button>
            </b-col>
            <b-col>
                <b-button class="cat-btn">Kleding</b-button>
            </b-col>
            <b-col>
                <b-button class="cat-btn">Uitrusting</b-button>
            </b-col>
            <b-col>
                <b-button class="cat-btn">Snacks</b-button>
            </b-col>
        </b-row>

        <div>
            <img src="./actie.png" border="0" class="image" />
        </div>

        <div class="parallax">
            <BestSellers />
        </div> <br />

        <Clothes/>
    </div>
</template>

<script>
    import BestSellers from './BestSellers.vue'
    import Clothes from './Clothes.vue'

    export default {
        name: 'ShopTopView',
        components: {
            BestSellers,
            Clothes,
        },
    }
</script>

<style scoped>
    .top-btn {
        max-width: 70%;
        justify-content: center;
        text-align: center;
        margin: auto;
        margin-top: 10vh;
    }

    .cat-btn {
        background-color: #808080;
        padding: 5px;
        width: 70%;
        text-transform: uppercase !important;
        font-weight: bold;
    }

    .image{
       max-width: 50%;
       margin: 5vh;
    }

    .parallax {
        background-image: url("anne.jpg");
        min-height: 500px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
    }
</style>
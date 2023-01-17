<template>
    <div>
        <br /><br />
        <h1>Bestsellers</h1>

        <div class="parent">
            <div class="item">
                <b-row><img src="./whey.png" class="item-image" /></b-row>
                <b-row><h5 class="details" style="font-weight: bold;">Whey protein</h5></b-row>
                <b-row><h6 class="details" style="font-weight: bold;">$ 39,95</h6></b-row>
                <b-row><h6 class="details" style="font-weight: lighter;">1 smaak</h6></b-row>
            </div>

            <div class="item">
                <b-row><img src="./venom.png" class="item-image" /></b-row>
                <b-row><h5 class="details" style="font-weight: bold;">XXL Venom Pre Powder</h5></b-row>
                <b-row><h6 class="details" style="font-weight: bold;">$ 24,95</h6></b-row>
                <b-row><h6 class="details" style="font-weight: lighter;">1 smaak</h6></b-row>
            </div>

            <div class="item">
                <b-row><img src="./pro.png" class="item-image" /></b-row>
                <b-row><h5 class="details" style="font-weight: bold;">XXL Pro 85</h5></b-row>
                <b-row><h6 class="details" style="font-weight: bold;">$ 34,95</h6></b-row>
                <b-row><h6 class="details" style="font-weight: lighter;">2 smaken</h6></b-row>
            </div>

            <div class="item">
                <b-row><img src="./mega.png" class="item-image" /></b-row>
                <b-row><h5 class="details" style="font-weight: bold;">Mega Grow</h5></b-row>
                <b-row><h6 class="details" style="font-weight: bold;">$ 14,95</h6></b-row>
                <b-row><h6 class="details" style="font-weight: lighter;">1 smaak</h6></b-row>
            </div>

            <div class="item">
                <b-row><img src="./creatine.png" class="item-image" /></b-row>
                <b-row><h5 class="details" style="font-weight: bold;">Creatine MAX</h5></b-row>
                <b-row><h6 class="details" style="font-weight: bold;">$ 19,95</h6></b-row>
                <b-row><h6 class="details" style="font-weight: lighter;">1 smaak</h6></b-row>
            </div>

            <div class="item">
                <b-row><img src="./creatine.png" class="item-image" /></b-row>
                <b-row><h5 class="details" style="font-weight: bold;">Creatine MAX</h5></b-row>
                <b-row><h6 class="details" style="font-weight: bold;">$ 19,95</h6></b-row>
                <b-row><h6 class="details" style="font-weight: lighter;">1 smaak</h6></b-row>
            </div>

            <div class="item">
                <b-row><img src="./creatine.png" class="item-image" /></b-row>
                <b-row><h5 class="details" style="font-weight: bold;">Creatine MAX</h5></b-row>
                <b-row><h6 class="details" style="font-weight: bold;">$ 19,95</h6></b-row>
                <b-row><h6 class="details" style="font-weight: lighter;">1 smaak</h6></b-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BestSellers',
    }
</script>

<style>
    .parent{
        display: flex;
        flex-wrap: wrap;
        max-width: 85%;
        margin: auto;
        margin-top: 5vh;
    }

    .item{
        flex: 1 0 21%;
        margin: 30px;
        height: 500px;
        max-width: 33%;
    }

    .item-image {
        height: 400px;
        background-color: lightgray;
    }

    .details{
        text-align: left;
    }
</style>
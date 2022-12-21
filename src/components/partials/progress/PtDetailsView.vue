<template>
    <div class="white">
        <b-row>
            <b-col sm>
                <img src="./Jenson.jpg" class="avatar" />
            </b-col>

            <b-col cols="9">
                <h5>Contact gegevens:</h5>
                <div style="margin-left: 35px;">
                    <p>Naam: Jenson van Geel</p>
                    <p>Mail: jenson@bodymovement.nl</p>
                    <p>Telefoonnummer: 06-26567820</p>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'PtDetailsView',
    }
</script>

<style scoped>
    .white {
        color: white;
    }

    .avatar{
        max-height: 150px;
    }
</style>
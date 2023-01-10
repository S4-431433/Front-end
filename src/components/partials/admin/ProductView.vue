<template>
    <div class="title">
        <h1>Producten overzicht</h1>
        <div>
            <b-card-group deck class="group">

                <b-card :title="product.name" class="mb-2, card-list" v-for="product in products" :key="product.id">
                    <b-card-sub-title class="mb-2">Prijs: {{product.price}}</b-card-sub-title>
                    <b-card-sub-title class="mb-2">Smaak: {{product.flavor}}</b-card-sub-title>
                    <b-button :href="'/admin/products/' + product.id" variant="outline-primary" style="margin-top: 2vh;">Edit</b-button>
                </b-card>

            </b-card-group>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    Vue.use(axios)

    export default {
        name: 'ProductView',
        data() {
            return {
                products: [],
            }
        },

        mounted() {
            axios
                .get('https://localhost:44349/product/GetAllProduct')
                .then(response => {
                    this.products = response.data
                    console.log(this.products)
                })
        },
    }
</script>

<style scoped>
    .title{
        margin-top: 7vh;
    }

    .card-list {
        margin: 6vh;
        max-width: 25rem;
    }

    .group {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
    .group > * {
        width: 100%;
        max-width: 20rem;
    }

</style>
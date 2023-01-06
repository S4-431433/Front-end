<template>
    <div class="title">
        <h1>Producten overzicht</h1>
        <div>
            <b-card-group deck class="group">

                <b-card :title="product.name" class="mb-2, card-list" v-for="product in products" :key="product.id">
                    <b-card-sub-title class="mb-2">Price: {{product.price}}</b-card-sub-title>
                    <b-button href="#" variant="outline-primary" style="margin-top: 2vh;">Edit</b-button>
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
                products: [
                    { name: 'test naam', id: 1, price: '\u20AC 1.50' },
                ],
            }
        },

        mounted() {
            axios
                .get('https://localhost:44349/account/GetAllUsers')
                .then(response => {
                    response.forEach(data => this.impacts.push(data))
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
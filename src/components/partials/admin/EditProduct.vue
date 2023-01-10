<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1">
                <b-form-input id="input-1"
                              v-model="form.name"
                              type="email"
                              placeholder="Enter name"
                              required>
                </b-form-input>
           

                <b-form-input id="input-2"
                              v-model="form.price"
                              placeholder="Enter price"
                              required>
                </b-form-input>
            </b-form-group>
        </b-form>
</div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    Vue.use(axios)

    export default {
        name: 'EditProduct',
        data() {
            return {
                products: [],
                id: this.$route.params.id,
                form: {
                    name: '',
                    description: '',
                    effect: '',
                    category: '',
                    weight: null,
                    falvor: '',
                    price: null,
                }
            }
        },

        mounted() {
            axios
                .get('https://localhost:44349/product/GetProduct?' + this.id)
                .then(response => {
                    this.products = response.data
                    console.log(this.products)
                })
        },
    }
</script>

<style>

</style>
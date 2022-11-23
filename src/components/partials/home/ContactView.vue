<template>
    <div>
        <b-row no-gutters class="contact">
            <div class="split left">
                <h1 style="margin-top: 40px;">Kom kennis maken</h1>
                <div>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">

                        <b-form-group id="input-group-1">
                            <b-form-input id="input-forename"
                                          v-model="form.forename"
                                          placeholder="Voornaam"
                                          required
                                          class="input"></b-form-input>
                            <b-form-input id="input-lastname"
                                          v-model="form.lastname"
                                          placeholder="Achternaam"
                                          required
                                          class="input"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2">
                            <b-form-input id="input-email"
                                          v-model="form.email"
                                          type="email"
                                          placeholder="E-mail"
                                          required
                                          class="input"></b-form-input>
                            <b-form-input id="input-number"
                                          v-model="form.number"
                                          type="number"
                                          placeholder="Telefoonnummer"
                                          required
                                          class="input"></b-form-input>
                        </b-form-group>

                        <b-form-checkbox id="checkbox"
                                         v-model="form.status"
                                         name="checkbox"
                                         value="accepted"
                                         class="checkbox">
                            Ik accepteer de algemene voorwaarden
                        </b-form-checkbox>

                        <b-button type="submit" variant="dark" class="button">Verzenden</b-button>
                    </b-form>
                </div>
            </div>

            <div class="split right">

            </div>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'ContactView',

        components: {

        },
        data() {
            return {
                form: {
                    forename: '',
                    lastname: '',
                    email: '',
                    number: ''
                },
                show: true
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
                this.form.forename = ''
                this.form.lastname = ''
                this.form.email = ''
                this.form.number = ''
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style scoped>
    .contact {
        width: 100.65% !important;
        height: 600px;
    }

    .split {
        width: 50%;
        height: 600px;
    }

    .right {
        align-content: center;
    }

    .left {
        background-color: #181818;
        text-align: center;
        color: white;
    }

    .form{
        max-width: 60%;
        align-content: center;
        margin-left: 20%;
        margin-top: 5%;
    }
    .input{
        margin-bottom: 30px;
        color: white;
        background-color: #181818;
        border-block: solid;
    }

    .checkbox{
        align-content: flex-start;
        margin-bottom: 10px;
    }

    .button{
        width: 200px;
        height: 50px;
        color: black;
        background-color: white;
    }

    @media only screen and (max-width: 600px) {
        .form{
            margin-left: 10%;
            max-width: 85% !important;
        }

        .button{
            width: 150px;
        }
    }
</style>

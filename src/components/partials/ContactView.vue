<template>
    <div>
        <div class="bg-contact">
            <div class="container-contact">
                <div class="wrap-contact">
                    <form class="contact-form validate-form">
                        <h1 class="contact-title">Neem contact op</h1>

                        <b-form-input id="name"
                                      v-model="form.name"
                                      placeholder="Naam"
                                      required
                                      class="input">
                        </b-form-input>

                        <b-form-input id="name"
                                      v-model="form.email"
                                      placeholder="Email"
                                      required
                                      class="input">
                        </b-form-input>

                        <b-form-textarea id="subject"
                                      v-model="form.subject"
                                      placeholder="Onderwerp"
                                      required
                                      class="input"
                                        max-rows="6">
                        </b-form-textarea>

                        <b-button type="submit" variant="primary" class="btn">Versturen</b-button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactView',
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    subject: null
                }
            }
        },
    }
</script>

<style scoped>
    .bg-contact{
        width: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-image: url("./Mette.jpg");
        overflow: hidden;
    }

    .container-contact{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }

    .wrap-contact{
        width: 790px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        padding: 72px 55px 90px;
    }

    .contact-form{
        width: 100%;
    }

    .contact-title{
        display: block;
        color: black;
        line-height: 1.2;
        text-align: center;
        padding-bottom: 90px;
    }

    .validate-input{
        position: relative;
    }

    .wrap-input{
        width: 100%;
        border-bottom: 2px solid #adadad;
        margin-bottom: 37px;
    }

    .input{
        display: block;
        margin-bottom: 3vh;
    }

    .btn {
        background-color: #5E3AD4;
        border-color: #5E3AD4;
    }
</style>
<template>
    <div>
        <b-row>
            <b-col cols="6" offset-md="2" class="justify-content-md-center">
                <b-container class="login">
                    <div>
                        <h1>Login met je account</h1>
                        <h6>login met je social media</h6>


                        <a href="#"><img src="./fb.png" alt="Facebook" class="social" /></a>
                        <a href="#"><img src="./google.png" alt="Google" class="social" /></a>


                        <b-row>
                            <b-col><hr /></b-col>
                            <b-col class="close"> of </b-col>
                            <b-col><hr /></b-col>
                        </b-row>
                        <br />
                        <b-form-group id="input-login">
                            <b-form-input id="input-1"
                                          v-model="form.username"
                                          type="text"
                                          placeholder="Gebruikersnaam"
                                          required class="input"></b-form-input>
                            <b-form-input id="input-2"
                                          v-model="form.password"
                                          type="password"
                                          placeholder="Wachtwoord"
                                          required class="input"></b-form-input>
                        </b-form-group>
                        <br />
                        <b-button variant="dark" class="button">Login</b-button>
                    </div>
                </b-container>
            </b-col>
            <b-col cols="4">
                <b-container class="box image">
                    <div>
                        <h1 class="title">Nieuw hier?</h1>
                        <br />
                        <p class="info">
                            Heb je interesse in een account? Neem dan nu
                            contact op en hopelijk zien we je snel!
                        </p>
                        <br />
                        <b-button variant="light" class="button" type="submit" >Neem contact op</b-button>
                    </div>
                </b-container>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'LoginView',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                this.form.username = ''
                this.form.password = ''
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        height: 100%;
        width: 70%;
        background-color: #9976A8;
        color: white;
        border-radius: 25px 0px 0px 25px;
        border: 2px solid #9976A8;
        display: flex;
        justify-content: center;
        margin-left: auto;
        margin-right: 0;
    }

    .title{
        margin-top: 40%;
    }

    .info {
        margin-top: 5%;
    }

    .button {
        border-radius: 10px;
        margin-top: 50px;
    }

    .image {
        background-image: url('./purple.png');
        height: 92.5vh;
        border-image-repeat: stretch;
    }

    .login{
        margin-top: 20%;
        max-width: 80%;
    }

    .close{
        margin-left: -20%;
        margin-right: -20%;
    }

    .social{
        max-height: 75px;
        margin: 25px;
    }

    .input{
        margin: 15px;
    }
</style>
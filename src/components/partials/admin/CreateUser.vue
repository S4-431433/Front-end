<template>
    <div>
        <b-card style="margin-top:12vh;">
            <b-card-header><h1>Nieuwe gebruiker maken</h1></b-card-header>
            <b-row>
                <b-col>
                    <b-form @submit="onSubmit" v-if="show" class="form">
                        <label>Voornaam:</label>
                        <b-form-input id="forename" v-model="form.forename" placeholder="Vul de voornaam in" required class="form-margins"></b-form-input>

                        <label>Achternaam:</label>
                        <b-form-input id="lastname" v-model="form.lastname" placeholder="Vul de achternaam in" required class="form-margins"></b-form-input>

                        <label>E-mailadress:</label>
                        <b-form-input id="email" v-model="form.email" type="email" placeholder="Vul het E-mailadres in" required class="form-margins"></b-form-input>

                        <label>Personal trainer:</label>
                        <b-form-select id="pt" v-model="form.pt" :options="pt" required class="form-margins"></b-form-select>

                        <label>Adres:</label>
                        <b-form-input id="adress" v-model="form.adress" placeholder="Straatnaam huisnummer, woonplaats" required class="form-margins"></b-form-input>

                        <label>Lengte (cm):</label>
                        <b-form-input id="length" v-model="form.length" type="number" placeholder="Vul de lengte in cm" required class="form-margins"></b-form-input>

                        <label>Verjaardag:</label>
                        <b-form-input v-model="form.birthday" :id="birthday" type="date" :v-onChange="getAge(form.birthday)" required class="form-margins"></b-form-input>

                        <br />
                    </b-form>
                </b-col>

                <b-col>
                    <b-form @submit="onSubmit" v-if="show" class="form">

                        <label>Gewicht (kg):</label>
                        <b-form-input id="weight" v-model="weight.mass" placeholder="Vul het gewicht in" required class="form-margins"></b-form-input>

                        <label>Vetmassa (kg):</label>
                        <b-form-input id="fat" v-model="weight.fat" placeholder="Vul het vetmassa in" required class="form-margins"></b-form-input>

                        <label>Spiermassa (kg):</label>
                        <b-form-input id="muscle" v-model="weight.muscle" placeholder="Vul de spiermassa in" required class="form-margins"></b-form-input>

                        <label>Lichaamsvocht (kg):</label>
                        <b-form-input id="fluid" v-model="weight.fluid" placeholder="Vul het lichaamsvocht in" required class="form-margins"></b-form-input>

                        <label>Botmassa (kg):</label>
                        <b-form-input id="bones" v-model="weight.bones" placeholder="Vul het botmassa in" required class="form-margins"></b-form-input>

                        <label>BMR (kcal):</label>
                        <b-form-input id="bmr" v-model="weight.bmr" placeholder="Vul het basaal metabolisme in" required class="form-margins"></b-form-input>

                        <br />
                        <b-button v-b-modal.goal>Goal</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-card>

        <b-modal id="goal" hide-footer hide-header>
            <b-card style="margin-top: 2vh !important;">
                <b-card-header><h3>Zet een goal</h3></b-card-header>
                <b-form @submit="onSubmit" v-if="show" class="form">

                    <label>Gewicht (kg):</label>
                    <b-form-input id="weight" v-model="goal.mass" :placeholder="weight.mass" required class="form-margins"></b-form-input>

                    <label>Vetmassa (kg):</label>
                    <b-form-input id="fat" v-model="goal.fat" :placeholder="weight.fat" required class="form-margins"></b-form-input>

                    <label>Spiermassa (kg):</label>
                    <b-form-input id="muscle" v-model="goal.muscle" :placeholder="weight.muscle" required class="form-margins"></b-form-input>

                    <label>Lichaamsvocht (kg):</label>
                    <b-form-input id="fluid" v-model="goal.fluid" :placeholder="weight.fluid" required class="form-margins"></b-form-input>

                    <br />
                    <b-button type="submit" variant="primary" class="buttons">Submit</b-button>
                </b-form>
            </b-card>
        </b-modal>

        <b-row>
            <b-col>
                <b-card class="mt-3, results" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                </b-card>
            </b-col>

            <b-col>
                <b-card class="mt-3, results" header="Weight Data Result">
                    <pre class="m-0">{{ weight }}</pre>
                </b-card>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    export default {
        name: 'CreateUser',
        data() {
            return {
                form: {
                    forename: '',
                    lastname: '',
                    email: '',
                    pt: null,
                    adress: '',
                    length: '',
                    birthday: '',
                    age: ''
                },
                weight: {
                    mass: '',
                    fat: '',
                    muscle: '',
                    fluid: '',
                    bones: '',
                    bmr: ''
                },
                goal: {
                    mass: '',
                    fat: '',
                    muscle: '',
                    fluid: '',
                },
                pt: [{ text: 'Selecteer een trainer', value: null }, 'Jenson van Geel'],
                show: true,
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form) + JSON.stringify(this.weight) + JSON.stringify(this.goal))
            },
            getAge(dateString) {
                var today = new Date();
                var birthDate = new Date(dateString);
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                this.form.age = age.toString();
            }
        }

    }
</script>

<style scoped>
    .results{
        max-width: 90%;
        margin-left: 5%;
    }

    .form {
        margin-top: 5vh;
        text-align: left;
        max-width: 80%;
        margin-left: 5%;
        display: grid;
    }

    .form-margins{
        margin: 1vh;
    }

    .buttons {
        margin-left: 1vh;
        margin-bottom: 2vh;
        margin-top: 2vh;
    }

    .user {
        min-width: 50%;
        max-width: 95%;
        flex: 0 1 50%;
        padding-right: 15px;
        padding-left: 15px;
        box-sizing: inherit;
    }

    .card {
        background-color: #EFEDFB !important;
        color: black;
        display: inline-block;
        position: relative;
        width: 95%;
        margin: 25px;
        overflow: unset;
        box-shadow: 0 1px 4px black;
        border-radius: 3px;
        background: #fff;
        z-index: 1;
        margin-top: 9vh;
    }

    .card-header {
        color: #fff;
        background: linear-gradient(60deg, #8c00cc, #7700ae);
        box-shadow: 0 12px 20px -10px #2b003e, 0 4px 20px 0 black, 0 7px 8px -5px #2b003e;
        margin: -20px 15px 0;
        border-radius: 3px;
        padding: 15px;
        box-sizing: inherit;
    }

    .title {
        color: white;
        margin-top: 0;
        margin-bottom: 5px;
    }

    .btn {
        color: #8B00CB;
        background-color: transparent;
        margin-top: 2vh;
        transition-duration: 0.3s;
        width: 25%;
        margin-left: auto;
    }

        .btn:hover {
            background-color: #8B00CB !important;
            color: white;
        }
</style>
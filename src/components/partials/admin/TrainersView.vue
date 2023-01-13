<template>
    <div>
        <h1 style="margin-top: 3vh;">Trainers overzicht</h1>
        <b-row>
            <b-col>
                <div class="trainers">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="title">Alle trainers</h4>
                        </div>

                        <div class="content">
                            <div>
                                <div class="table">
                                    <b-table :items="trainers" :fields="fields" class="table" :tbody-tr-class="rowClass"></b-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';
    Vue.use(axios)

    export default {
        name: 'TrainersView',
        data() {
            return {
                trainers: [],
                fields: [
                    {
                        key: 'name',
                        label: 'Naam',
                        sortable: false
                    },
                    {
                        key: 'age',
                        label: 'Leeftijd',
                        sortable: false,
                    },
                    {
                        key: 'department',
                        label: 'Afdeling',
                        sortable: false,
                    },
                    {
                        key: 'email',
                        label: 'E-mail',
                        sortable: false,
                    },
                    {
                        key: 'number',
                        label: 'Nummer',
                        sortable: false,
                    }
                ],
            }
        },
        mounted() {
            axios
                .get('https://localhost:44349/pt/GetAll')
                .then(response => {
                    this.trainers = response.data
                })
        }
    }
</script>

<style scoped>
    .trainers {
        min-width: 50%;
        max-width: 97%;
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
        width: 100%;
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

    .sub-title {
        margin: 0;
        color: #c7c7c7;
    }

    .content {
        padding: 15px 20px;
    }

    .table {
        background-color: #fff;
        color: black;
        flex-flow: column wrap;
        overflow-y: scroll;
        box-sizing: inherit;
        margin-top: 1vh;
        border-radius: 5px;
        max-height: 55vh;
    }
</style>
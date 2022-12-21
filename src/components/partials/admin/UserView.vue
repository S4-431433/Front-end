<template>
    <div>

        <h1 style="margin-top: 3vh;">Gebruikers overzicht</h1>
        <b-row>
            <b-col>
                <div class="users">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="title">Alle gebruikers</h4>
                            <p>inclusief non-actief</p>
                        </div>

                        <div class="content">
                            <div>
                                <div class="table">
                                    <b-table :items="users" :fields="fields" class="table" :tbody-tr-class="rowClass"></b-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>

            <b-col>
                <div class="users">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="title">Gebruiker grafiek</h4>
                        </div>

                        <div class="content">
                            <div>
                                <div class="table" style="overflow: hidden">
                                    <UserChart/>
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
    import UserChart from './UserChart.vue'

    export default {
        name: 'UserView',
        components: {
            UserChart,
        },
        data() {
            return {
                users: [
                    { isActive: true, age: 35, first_name: 'John', last_name: 'Doe', status: 'active'}],
                fields: [
                    {
                        key: 'first_name',
                        sortable: false
                    },
                    {
                        key: 'last_name',
                        sortable: false
                    },
                    {
                        key: 'age',
                        label: 'Person age',
                        sortable: false,
                    }
                ],
            }
        },
        mounted() {
            //axios call
        },
        methods: {
            rowClass(item, type) {
                if (!item || type !== 'row') return 
                if (item.status === 'active') return 'table-success'
                if (item.status === 'non-active') return 'table-danger'
            }
        },
    }
</script>

<style scoped>
    .badge{
        color: white;
        background-color: limegreen;
    }

    .users{
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
        width: 100%;
        margin: 25px;
        overflow: unset;
        box-shadow: 0 1px 4px black;
        border-radius: 3px;
        background: #fff;
        z-index: 1;
        margin-top: 9vh;
    }

    .card-header{
        color: #fff;
        background: linear-gradient(60deg, #8c00cc, #7700ae);
        box-shadow: 0 12px 20px -10px #2b003e, 0 4px 20px 0 black, 0 7px 8px -5px #2b003e;
        margin: -20px 15px 0;
        border-radius: 3px;
        padding: 15px;
        box-sizing: inherit;
    }

    .title{
        color: white;
        margin-top: 0;
        margin-bottom: 5px;
    }

    .sub-title{
        margin: 0;
        color: #c7c7c7;
    }

    .content{
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
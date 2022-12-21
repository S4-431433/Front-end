<template>
    <div>
        <h1>Overzicht</h1>

        <div>
            <b-row> 
                <b-col class="graph">
                    <h3>Nog maar 3 Kilo te gaan!'</h3>
                    <GraphView />
                </b-col>
            </b-row>
        </div>

        <div>
            <b-row>
                <b-col sm class="subscription">
                    <h3>Abonnementen</h3>
                    <SubscriptionView />
                </b-col>

                <b-col sm class="pt">
                    <h3>Personal Trainer</h3>
                    <PtDetailsView/>
                </b-col>
            </b-row>
        </div>

        <div>
            <b-row>
                <b-col class="orders">
                    <h3>Bestellingen</h3>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import GraphView from './GraphView.vue'
    import PtDetailsView from './PtDetailsView.vue'
    import SubscriptionView from '../account/SubscriptionView.vue'
    export default {
        name: 'OverviewView',
        components: {
            GraphView,
            SubscriptionView,
            PtDetailsView,
        }
    }
</script>

<style scoped>
    .graph {
        background-color: white;
        margin: 20px;
        /*color: white;*/
        text-align: left;
        height: 450px;
        border-radius: 10px;
        border: 1px solid dimgrey
    }

    .pt {
        background-color: dimgrey;
        color: white;
        text-align: left;
        height: 200px;
        border-radius: 10px;
        margin: 20px;
    }

    .orders {
        background-color: dimgrey;
        color: white;
        text-align: left;
        height: 200px;
        border-radius: 10px;
        margin: 20px;
    }

    .subscription {
        background-color: dimgrey;
        max-width: 35%;
        color: white;
        text-align: left;
        height: 200px;
        border-radius: 10px;
        margin: 20px;
    }

    @media only screen and (max-width: 600px) {
        .subscription{
            max-width: stretch;
        }

        .pt{
            max-width: stretch;
        }
    }
</style>
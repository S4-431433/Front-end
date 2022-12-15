<template>
    <div>
        <SideBar />
        <template>
            <b-container style="margin-top: -20px">
                <OverviewView />
            </b-container>
        </template>
    </div>
</template>

<script>
    import SideBar from '../components/partials/menu/SideBar.vue'
    import OverviewView from '../components/partials/progress/OverviewView.vue'
    export default {
        name: 'DashboardView',
        components: {
            SideBar,
            OverviewView,
        }
    }
</script>

<style>
    .hide{
        visibility: hidden !important;
    }
</style>
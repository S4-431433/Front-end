<template>
    <div>
        <TopHomeView />
        <ServicesView />
        <ContactView/>
        <SaleView />
    </div>
</template>

<script>
    import TopHomeView from '../components/partials/home/TopHomeView'
  import ServicesView from '../components/partials/home/ServicesView'
  import ContactView from '../components/partials/home/ContactView'
  import SaleView from '../components/partials/home/SaleView'

  export default {
    name: 'HomeView',

    components: {
        TopHomeView,
        ServicesView,
        ContactView,
        SaleView,
    },
  }
</script>

<style>
    .hide{
        visibility: visible !important;
    }
</style>

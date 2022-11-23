<template>
    <div id="app">
        <TopBar class="bar" />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
    import TopBar from './components/partials/menu/TopBar';
    export default {
        name: 'App',
        components: {
            TopBar,
        }

    };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
</style>

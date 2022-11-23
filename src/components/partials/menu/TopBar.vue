<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand><router-link to="/"><img src="./logo.png" class="logo" alt="" /></router-link></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item class="first-link"><router-link class="nav-link" to="/">Home</router-link></b-nav-item>
                        <b-nav-item class="space"><router-link class="nav-link" to="/pt">Personal Training</router-link></b-nav-item>
                        <b-nav-item class="space"><router-link class="nav-link" to="/oefeningen">Oefeningen</router-link></b-nav-item>
                        <b-nav-item class="space"><router-link class="nav-link" to="/winkel">Winkel</router-link></b-nav-item>
                        <b-nav-item class="space"><router-link class="nav-link" to="/account">Account</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { BootstrapVue } from 'bootstrap-vue';
    Vue.use(BootstrapVue)
    export default {
        name: 'NavView',
    }
</script>

<style>
    .space {
        margin-left: 30px;
    }

    .nav-link {
        color: white;
        display: inline-block;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15em;
        color:white !important;
    }

        .nav-link :hover {
            text-decoration: underline;
            text-decoration-color: white;
        }

        .nav-link :active {
            text-decoration: underline;
            text-decoration-color: white;
        }

    .logo {
        margin-left: 40px;
        max-width: 140px;
        position: absolute;
        top: 0px;
        left: 8px;
    }

    .first-link {
        margin-left: 200px;
    }

    .right-side {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        padding: 0;
        margin-right: 100px;
    }

    @media only screen and (max-width: 1000px) {
        .logo {
            max-width: 100px;
            position: absolute;
            top: -4px;
            left: 8px;
            margin-left: 5px;
        }

        .first-link {
            margin-top: 60px;
            margin-left: 30px;
        }

        .right-side {
            display: flex;
            justify-content: flex-end;
            width: 50%;
            padding: 0;
            margin-left: 100px;
        }
    }
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/DashboardView.vue';
import AdminView from '../components/partials/admin/AdminView.vue';
import UserView from '../components/partials/admin/UserView.vue';
import HomeView from '../views/HomeView.vue';
import AccountView from '../views/AccountView.vue';
import PersonalTrainingView from '../views/PersonalTrainingView.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/account',
        name: 'account',
        component: AccountView  
    },
    {
        path: '/pt',
        name: 'pt',
        component: PersonalTrainingView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/admin',
        name: 'amin',
        component: AdminView
    },
    {
        path: '/admin/users',
        name: 'users',
        component: UserView
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

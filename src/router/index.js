import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/DashboardView.vue';
import AdminView from '../components/partials/admin/AdminView.vue';
import UserView from '../components/partials/admin/UserView.vue';
import ProductView from '../components/partials/admin/ProductView.vue';
import TrainersView from '../components/partials/admin/TrainersView.vue';
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
    },
    {
        path: '/admin/users/new',
        name: 'new-user',
        component: () => import('../components/partials/admin/CreateUser.vue'),
    },
    {
        path: '/admin/trainers',
        name: 'trainer',
        component: TrainersView
    },
    {
        path: '/admin/products',
        name: 'products',
        component: ProductView
    },
    {
        path: '/admin/products/:id',
        name: 'edit_product',
        component: () => import('../components/partials/admin/EditProduct.vue'),
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

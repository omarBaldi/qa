import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Homepage from '../views/Homepage.vue'
import Dashboard from '../views/QA/Dashboard.vue'
import notFound from '../views/notFound.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '*',
		component: notFound
	},
	{
		path: '/',
		name: 'Homepage',
		component: Homepage
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/qa',
		name: 'Dahsboard',
		component: Dashboard,
		meta: {
			requiresAuth: true
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {

	const isUserAuthenticated = store.getters['Auth/isUserAuthenticated'];
	const authenticatedRoute = to.matched.some(route => route.meta.requiresAuth);

	if (authenticatedRoute && !isUserAuthenticated) {
		return next('/login');
	}

	if (!authenticatedRoute && isUserAuthenticated) {
		return next('/qa');
	}

	return next();

});

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Homepage from '../views/Homepage.vue'
import Dashboard from '../views/QA/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
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

	const authUser = JSON.parse(localStorage.getItem('currentUserToken'));
	const authenticatedRoute = to.matched.some(route => route.meta.requiresAuth);

	if (authenticatedRoute && !authUser) {
		return next('/login');
	}

	if (!authenticatedRoute && authUser) {
		return next('/qa');
	}

	return next();

});

export default router

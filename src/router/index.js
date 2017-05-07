import Vue from 'vue';
import Router from 'vue-router';
import Signup from '../components/Signup';
import Welldone from '../components/welldone';
import List from '../components/list';

Vue.use(Router);

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Signup',
		component: Signup
	},
	{
		path: '/done',
		name: 'Welldone',
		component: Welldone
	},
	{
		path: '/list',
		name: 'List',
		component: List
	}
	]
});

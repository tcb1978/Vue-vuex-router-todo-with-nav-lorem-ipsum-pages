import Vue from 'vue';
import Router from 'vue-router';

// import components here
import Home from '../components/Home.vue';
import Todos from '../components/Todos.vue'
import About from '../components/About.vue'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },
];

export default new Router({
  routes,
});

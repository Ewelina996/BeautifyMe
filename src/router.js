import { createRouter, createWebHistory } from "vue-router";
import MainPage from './components/MainPage.vue';
import Register from './components/Register.vue'; 
import Login from './components/Login.vue'; 
import Home from './components/Home.vue';
import Book from './components/Book.vue';
import AboutUs from './components/AboutUs.vue';
import Services from './components/Services.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },

  {
    path: '/services',
    name: 'Services',
    component: Services
  }, 
    
];


const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
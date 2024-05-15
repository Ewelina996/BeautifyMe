import { createRouter, createWebHistory } from "vue-router";
import MainPage from './components/MainPage.vue';
import Register from './components/Register.vue'; 
import Login from './components/Login.vue'; 
import Home from './components/Home.vue';
import AboutUs from "./components/AboutUs.vue";
import Book from "./components/Book.vue";


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
  { path: '/login',
    name: 'Login',
    component: Login
  },
  {  
    path: '/home',
    name: 'Home',
    component: Home
  },
  {  
    path: '/about',
    name: 'About Us',
    component: AboutUs
  },
  {  
    path: '/book',
    name: 'Book',
    component: Book
  } 
];


const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
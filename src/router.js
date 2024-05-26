import { createRouter, createWebHistory } from "vue-router";
import MainPage from './components/MainPage.vue';
import Register from './components/Register.vue'; 
import Login from './components/Login.vue'; 
import Home from './components/Home.vue';
import Book from './components/Book.vue';
import AboutUs from './components/AboutUs.vue';
import Services from './components/Services.vue';
import Alice from './components/Alice.vue';
import Katharina from './components/Katharina.vue';
import Alex from './components/Alex.vue';
import Rose from './components/Rose.vue';
import Monique from './components/Monique.vue';
import HaircutShort from "./components/HaircutShort.vue";
import HaircutLong from "./components/HaircutLong.vue";
import FacialAcne from "./components/FacialAcne.vue";
import FacialDry from "./components/FacialDry.vue";
import HybridManicure from "./components/HybridManicure.vue";
import Lashes from "./components/Lashes.vue";
import Massage from "./components/Massage.vue";
import MyBookings from "./components/MyBookings.vue";
import Payment from "./components/Payment.vue";
import Calendar from "./components/Calendar.vue";


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

  {
    path: '/alice',
    name: 'Alice',
    component: Alice
  },
      
    {
      path: '/katharina',
      name: 'Katharina',
      component: Katharina
    },
      
    {
      path: '/alex',
      name: 'Alex',
      component: Alex
    },
      
    {
      path: '/rose',
      name: 'Rose',
      component: Rose
    },
      
    {
      path: '/monique',
      name: 'Monique',
      component: Monique
    },

    {
      path: '/haircutshort',
      name: 'HaircutShort',
      component: HaircutShort
    },

    {
      path: '/haircutlong',
      name: 'HaircutLong',
      component: HaircutLong
    },

    {
      path: '/facialacne',
      name: 'FacialAcne',
      component: FacialAcne
    },

    {
      path: '/facialdry',
      name: 'FacialDry',
      component: FacialDry
    },

    {
      path: '/hybridmanicure',
      name: 'HybridManicure',
      component: HybridManicure
    },

    {
      path: '/lashes',
      name: 'Lashes',
      component: Lashes
    },

    {
      path: '/massage',
      name: 'Massage',
      component: Massage
    },

    {
      path: '/mybookings',
      name: 'MyBookings',
      component: MyBookings
    
    },

    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    
    },

    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    
    },

];


const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
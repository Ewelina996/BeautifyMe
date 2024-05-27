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
import { getAuth, onAuthStateChanged } from "firebase/auth";


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
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/book',
    name: 'Book',
    component: Book,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
  },

  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      requiresAuth: true,
    },
  }, 

  {
    path: '/alice',
    name: 'Alice',
    component: Alice,
    meta: {
      requiresAuth: true,
    },
  },
      
    {
      path: '/katharina',
      name: 'Katharina',
      component: Katharina,
      meta: {
        requiresAuth: true,
      },
    },
      
    {
      path: '/alex',
      name: 'Alex',
      component: Alex,
      meta: {
        requiresAuth: true,
      },
    },
      
    {
      path: '/rose',
      name: 'Rose',
      component: Rose,
      meta: {
        requiresAuth: true,
      },
    },
      
    {
      path: '/monique',
      name: 'Monique',
      component: Monique,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/haircutshort',
      name: 'HaircutShort',
      component: HaircutShort,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/haircutlong',
      name: 'HaircutLong',
      component: HaircutLong,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/facialacne',
      name: 'FacialAcne',
      component: FacialAcne,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/facialdry',
      name: 'FacialDry',
      component: FacialDry,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/hybridmanicure',
      name: 'HybridManicure',
      component: HybridManicure,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/lashes',
      name: 'Lashes',
      component: Lashes,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/massage',
      name: 'Massage',
      component: Massage,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/mybookings',
      name: 'MyBookings',
      component: MyBookings,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: {
        requiresAuth: true,
      },
    },

];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },

      reject
    )
  });
};

router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      alert("Please log in to access page");
      next('/');
    }
  }else {
    next();
  }
});

export default router;
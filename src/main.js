import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDP9XYpdCbweOji1W2gJVMCfiUwsJTkWiE",
    authDomain: "beautifyme-7818b.firebaseapp.com",
    projectId: "beautifyme-7818b",
    storageBucket: "beautifyme-7818b.appspot.com",
    messagingSenderId: "568440136503",
    appId: "1:568440136503:web:072e87eaec6a16b107f0b2"
  };

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
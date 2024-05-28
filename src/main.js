import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const firebaseConfig = {
    apiKey: "AIzaSyDP9XYpdCbweOji1W2gJVMCfiUwsJTkWiE",
    authDomain: "beautifyme-7818b.firebaseapp.com",
    projectId: "beautifyme-7818b",
    storageBucket: "beautifyme-7818b.appspot.com",
    messagingSenderId: "568440136503",
    appId: "1:568440136503:web:072e87eaec6a16b107f0b2"
  };

const vuetify = createVuetify({
  components,
  directives,
})

initializeApp(firebaseConfig);

createApp(App).use(router).use(vuetify).mount('#app')

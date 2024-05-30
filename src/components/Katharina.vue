<template>
  <div id="alice">
    <task-bar></task-bar>
    <div class="content">        
    </div>
  </div>  
  <h1 class="specialist-header">Our specialists:</h1>
  <div class="image-container">
  <div class="image-item">
    <img class="image" src="../assets/photo2.png" alt="Photo 2">
    <p class="service-header">Katharina</p>
    <p class="italic-text">Beautician</p>
  </div>
  </div>
  
  <div class="services-container">
      <h1 class="header">SERVICES</h1>
      <div class="button-container">
        <a href="/history">
          <button class="history">My bookings</button>
        </a>
    </div>
  </div>

    <hr/>

    <div class="booking-containers">

      <h2 class="ser1">{{ service1 }}</h2>
      <a>
        <button class="button-container1" @click="goToCalendar(service1)">Book</button>><br>
      </a>

      <h2 class="ser2">{{ service2 }}</h2>
      <a>
        <button class="button-container2" @click="goToCalendar(service2)">Book</button>><br>
      </a>

      <h2 class="ser3">{{ service3 }}</h2>
      <a>
        <button class="button-container3" @click="goToCalendar(service3)">Book</button>><br>
      </a>

      <h2 class="ser4">{{ service4 }}</h2>
      <a>
        <button class="button-container4" @click="goToCalendar(service4)">Book</button>><br>
      </a>

      <h2 class="ser5">{{ service5 }}</h2>
      <a>
        <button class="button-container5" @click="goToCalendar(service5)">Book</button>><br>
      </a>
    </div>
</template>

<script setup>
import TaskBar from './TaskBar.vue';
import { useStore } from "../store";
import { useRouter } from 'vue-router/dist/vue-router';

const service1 = 'Hybrid manicure';
const service2 = 'Facial for acne-prone skin';
const service3 = 'Facial for dry skin';
const service4 = 'Relaxing back massage';
const service5 = 'Lashes extenions';

const localStore = useStore();
const router = useRouter();

localStore.changeBeautician('Katharina');

function goToCalendar(value) {
  localStore.changeService(value);
  router.push({ path: '/calendar' }); 
};

</script>

<style scoped>
#main-page {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 60px); /* Wysokość na całą wysokość widoku minus wysokość paska zadań */
}

.title {
font-family: "Hurricane", cursive;
font-weight: 400;
font-size: 6em;
}

.title.hurricane-regular {
font-family: "Hurricane", cursive;
font-weight: 400;
font-style: normal;
margin-top: -500px;
}

.content {
margin-top: 60px;
}

.logo h1 {
margin: 0;
font-size: 20px;
margin-top: -500px; 
}

button {
background-color: #F553B4;
color: white;
border: none;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
border-radius: 18px;
}

.history {
color: white;
margin-left: 1050px;
position: absolute;
top: 0;
left: 10px;
}

h1 {
color: #000000;
font-family: "Josefin Sans";
font-size: 30px;
margin-top: 100px;
text-align: left;
margin-left: 80px;
}

hr {
display: block;
height: 2px;
border: 0;
border-top: 3px solid #000000;
margin: 1em 0;
padding: 0;
width:90%;
margin-left: 70px;
} 

.services-container { 
position: relative;
margin-top: -20px;
margin-bottom: 10px;
}

.ser1 {
color: #000000;
font-size: 25px;
font-family: "Josefin Sans";
text-align: left;
margin-left: 70px;
}

.button-container1 {
color: white;
margin-left: 1200px;
position: absolute;
left: 10px;
margin-top: -70px;    
}

.ser2 {
color: #000000;
font-size: 25px;
font-family: "Josefin Sans";
text-align: left;
margin-left: 70px;
margin-top: -25px;
}

.button-container2 {
color: white;
margin-left: 1200px;
position: absolute;
left: 10px;
margin-top: -70px;    
}

.ser3 {
color: #000000;
font-size: 25px;
font-family: "Josefin Sans";
text-align: left;
margin-left: 70px;
margin-top: 5px;
}

.button-container3 {
color: white;
margin-left: 1200px;
position: absolute;
left: 10px;
margin-top: -70px;    
}

.ser4 {
color: #000000;
font-size: 25px;
font-family: "Josefin Sans";
text-align: left;
margin-left: 70px;
margin-top: 5px;
}

.button-container4 {
color: white;
margin-left: 1200px;
position: absolute;
left: 10px;
margin-top: -70px;    
}

.ser5 {
color: #000000;
font-size: 25px;
font-family: "Josefin Sans";
text-align: left;
margin-left: 70px;
margin-top: 5px;
}

.button-container5 {
color: white;
margin-left: 1200px;
position: absolute;
left: 10px;
margin-top: -70px;    
}

.image-container {
display: flex;
justify-content: flex-start;
}

.image-item {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.image {
width: 100px; /* Adjust as needed */
height: auto;
margin-left: 80px;
}
.centered-text {
text-align: center;
margin-left: 0;
}

.service-header {
color: #000000;
font-size: 25px;
font-family: "Josefin Sans";
text-align: left;
margin-left: 70px;
font-weight: bold;
}

.italic-text {
  font-style: italic;
  color: #000000;
  font-size: 20px;
  font-family: "Josefin Sans";
  text-align: left;
  margin-left: 70px;
  font-weight: bold;
  margin-top: 0;
}

.specialist-header {
font-size: 25px;
font-family: "Josefin Sans";
text-align: left;
margin-left: 70px;
margin-top: 5px;
}

</style>
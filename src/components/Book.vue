<template>
  <div id="book">
    <task-bar></task-bar>
    <div class="content">        
    </div>
  </div>
    <button class="back-button" @click="goHome">Back to previous page</button>

    <h1 class="specialists-header">Our specialists:</h1>
    <div class="image-container">
    <div class="image-item">
      <a :href="'/Alice'">
        <img src="../assets/photo1.jpg" alt="Photo 1">
        <p class="name-text">Alice</p>
        <p class="italic-text">Hairdresser</p>
      </a>
    </div>
    <div class="image-item">
      <a :href="'/Katharina'">
        <img src="../assets/photo2.png" alt="Photo 2">
        <p class="name-text">Katharina</p>
        <p class="italic-text">Beautician</p>
      </a>
    </div>
    <div class="image-item">
      <a :href="'/Alex'">
        <img src="../assets/photo3.jpg" alt="Photo 3">
        <p class="name-text">Alex</p>
        <p class="italic-text">Hairdresser</p>
      </a>
    </div>
    <div class="image-item">
      <a :href="'/Rose'">
        <img src="../assets/photo4.png" alt="Photo 4">
        <p class="name-text">Rose</p>
        <p class="italic-text">Hairdresser</p>
      </a>
    </div>
    <div class="image-item">
      <a :href="'/Monique'">
        <img src="../assets/photo5.jpg" alt="Photo 5">
        <p class="name-text">Monique</p>
        <p class="italic-text">Hairdresser & beautician</p>
      </a>
    </div>
  </div> 


  <div class="services-container">
      <h1 class="header">OUR SERVICES</h1>
      <div class="button-container">
        <a href="/MyBookings">
          <button class="mybookings">My bookings</button>
        </a>
      </div>
    </div>

    <hr/>

    <div class="booking-containers">

      <h2 class="ser1">Haircut for short hair</h2>
      <a href="/HaircutShort">
        <button class="button-container1">Book</button><br>
      </a>

      <h2 class="ser2">Haircut for long hair</h2>
      <a href="/HaircutLong">
        <button class="button-container2">Book</button>
      </a>

      <h2 class="ser3">Hybrid manicure</h2>
      <a href="/HybridManicure">
        <button class="button-container3">Book</button>
      </a>

      <h2 class="ser4">Facial for acne-prone skin</h2>
      <a href="/FacialAcne">
        <button class="button-container4">Book</button>
      </a>

      <h2 class="ser5">Facial for dry skin</h2>
      <a href="/FacialDry">
        <button class="button-container5">Book</button>
      </a>

      <h2 class="ser6">Relaxing back massage</h2>
      <a href="/Massage">
        <button class="button-container5">Book</button>
      </a>

      <h2 class="ser7">Lashes extensions</h2>
      <a href="/Lashes">
        <button class="button-container5">Book</button>
      </a>
    </div>
</template>

<script setup>
import TaskBar from './TaskBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('home');
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

.mybookings {
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

.ser6 {
  color: #000000;
  font-size: 25px;
  font-family: "Josefin Sans";
  text-align: left;
  margin-left: 70px;
  margin-top: 5px;
}

.button-container6 {
  color: white;
  margin-left: 1200px;
  position: absolute;
  left: 10px;
  margin-top: -70px;    
}

.ser7 {
  color: #000000;
  font-size: 25px;
  font-family: "Josefin Sans";
  text-align: left;
  margin-left: 70px;
  margin-top: 5px;
}

.button-container7 {
  color: white;
  margin-left: 1200px;
  position: absolute;
  left: 10px;
  margin-top: -70px;    
}

.image-container { /* Dodane */
  display: flex;
  justify-content: flex-start;
  gap: 0px;
  margin-right:300px;
}

.image-container img { /* Dodane */
  width: 50%;
}

.image-item { /* Dodane */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-item p { /* Dodane */
  font-weight: bold;
  color: black;
}

.italic-text {
  font-style: italic;
}

.name-text {
  font-size: 20px;
}

.specialists-header {
  margin-top: 10px;
}

.back-button {
  position: absolute;
  top: 80px; /* Odległość od góry */
  right: 365px; /* Odległość od prawej strony */
}

</style>

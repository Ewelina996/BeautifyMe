<template>
  <div id="haircut-short">
    <task-bar></task-bar>
    <button class="back-button" @click="goHome">Back to previous page</button>
    <div class="content">        
    <h1 class="specialists-header">Available specialists for "Haircut for short hair":</h1>
    <div class="image-container">

    <div class="image-item">
      <a :href="'/Alice'">
        <img src="../assets/photo1.jpg" alt="Photo 1">
        <p class="name-text">Alice</p>
        <p class="italic-text">Hairdresser</p>
      </a>

      <a>
        <button class="button-container1" @click="goToCalendar(stylist1)">Book</button>><br>
      </a>

    </div>

    <div class="image-item">
      <a :href="'/Alex'">
        <img src="../assets/photo3.jpg" alt="Photo 3">
        <p class="name-text">Alex</p>
        <p class="italic-text">Hairdresser</p>
      </a>

      <a>
        <button class="button-container2" @click="goToCalendar(stylist2)">Book</button>><br>
      </a>
    
    </div>
    <div class="image-item">
      <a :href="'/Rose'">
        <img src="../assets/photo4.png" alt="Photo 4">
        <p class="name-text">Rose</p>
        <p class="italic-text">Hairdresser</p>
      </a>

      <a>
        <button class="button-container3" @click="goToCalendar(stylist3)">Book</button>><br>
      </a>
    
    </div>
    <div class="image-item">
      <a :href="'/Monique'">
        <img src="../assets/photo5.jpg" alt="Photo 5">
        <p class="name-text">Monique</p>
        <p class="italic-text">Hairdresser & beautician</p>
      </a>

      <a>
        <button class="button-container4" @click="goToCalendar(stylist4)">Book</button>><br>
      </a>
    </div>
  </div> 
</div>
</div>

</template>

<script setup>
  import TaskBar from './TaskBar.vue';
  import { useStore } from "../store";
  import { useRouter } from 'vue-router/dist/vue-router';

  const stylist1 = "Alice";
  const stylist2 = "Alex";
  const stylist3 = "Rose";
  const stylist4 = "Monique";

  const localStore = useStore();
  const router = useRouter();

  localStore.changeService('Haircut for short hair');

  const goHome = () => {
    router.push('book');
  };

  function goToCalendar(value) {
    localStore.changeBeautician(value);
    router.push({ path: '/calendar' }); 
  };

</script>

<style scoped>

  #main-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
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
    margin-top: 80px;
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

  .services-container { 
    position: relative;
    margin-top: -20px;
    margin-bottom: 10px;
  }

  .button-container1 {
    color: white;
    margin-left: 1550px;
    position: absolute;
    left: -880px;
    margin-top: 0px;    
  }

  .button-container2 {
    color: white;
    margin-left: 1050px;
    position: absolute;
    left: -635px;
    margin-top: 0px;    
  }

  .button-container3 {
    color: white;
    margin-left: 1310px;
    position: absolute;
    left: -390px;
    margin-top: 0px;    
  }

  .button-container4 {
    color: white;
    margin-left: 1300px;
    position: absolute;
    left: -140px;
    margin-top: 0px;    
  }

  .image-container {
    display: flex;
    justify-content: flex-start;
    gap: 0px;
    margin-right:300px;
    margin-top: 70px;
  }

  .image-container img {
    width: 50%;
  }

  .image-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .image-item p {
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
    margin-top: 80px;
  }

  .back-button {
    position: fixed;
    top: 80px;
    right: 365px;
  }
  
</style>

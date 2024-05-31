<template>
  <div id="hybrid-manicure">
    <task-bar></task-bar>
    <div class="content">        
    </div>
  </div>
  <button class="back-button" @click="goHome">Back to previous page</button>

    <h1 class="specialists-header">Available specialists for "Hybrid manicure":</h1>
    <div class="image-container">
    
      <div class="image-item">
      <a :href="'/Katharina'">
        <img src="../assets/photo2.png" alt="Photo 2">
        <p class="name-text">Katharina</p>
        <p class="italic-text">Beautician</p>
      </a>

      <a>
        <button class="button-container1" @click="goToCalendar(stylist1)">Book</button>><br>
      </a>

    </div>  

    <div class="image-item">
      <a :href="'/Monique'">
        <img src="../assets/photo5.jpg" alt="Photo 5">
        <p class="name-text">Monique</p>
        <p class="italic-text">Hairdresser & beautician</p>
      </a>

      <a>
        <button class="button-container2" @click="goToCalendar(stylist2)">Book</button>><br>
      </a>

    </div>
    
  </div> 

</template>

<script setup>
  import TaskBar from './TaskBar.vue';
  import { useStore } from "../store";
  import { useRouter } from 'vue-router/dist/vue-router';

  const stylist1 = "Katharina";
  const stylist2 = "Monique";

  const localStore = useStore();
  const router = useRouter();

  localStore.changeService('Hybrid manicure');

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
    left: -760px;
    margin-top: 0px;    
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
    left: -270px;
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
    margin-top: 10px;
  }

  .back-button {
    position: fixed;
    top: 80px; 
    right: 365px; 
  }

</style>

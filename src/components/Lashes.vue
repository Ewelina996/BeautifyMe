<template>
  <div id="lashes">
    <task-bar></task-bar>
    <div class="content">        
    </div>
  </div>

  <button class="back-button" @click="goHome">Back to previous page</button>

    <h1 class="specialists-header">Available specialists for "Lashes extensions":</h1>
    <div class="image-container">
    
      <div class="image-item">
      <a :href="'/Katharina'">
        <img src="../assets/photo2.png" alt="Photo 2">
        <p class="name-text">Katharina</p>
        <p class="italic-text">Beautician</p>
      </a>
      <a :href="'/Calendar'">
        <button class="button-container1">Book</button><br>
      </a>
    </div>  
    <div class="image-item">
      <a :href="'/Monique'">
        <img src="../assets/photo5.jpg" alt="Photo 5">
        <p class="name-text">Monique</p>
        <p class="italic-text">Hairdresser & beautician</p>
      </a>
      <a :href="'/Calendar'">
        <button class="button-container4">Book</button><br>
      </a>
    </div>
  </div> 
</template>

<script setup>
  import TaskBar from './TaskBar.vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const goHome = () => {
    router.push('book');
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

  .services-container { 
    position: relative;
    margin-top: -20px;
    margin-bottom: 10px;
  }

  .button-container1 {
    color: white;
    margin-left: 1300px;
    position: absolute;
    left: -760px;
    margin-top: 0px;    
  }

  .button-container2 {
    color: white;
    margin-left: 1300px;
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
    color: #000000;
    font-family: "Josefin Sans";
    font-size: 30px;
    margin-top: 100px;
    text-align: left;
    margin-left: 80px;
  }

  .back-button {
    position: fixed;
    top: 80px; 
    right: 365px; 
  }

</style>

<template>
    <div id="about-us">
      <task-bar></task-bar>
      <div class="content"> 
      </div>
    </div>
    <body>
      <h1>BeautifyMe was created in 2024 by a team of acknowledged and experienced aestheticians. Their goal was to create a space available for everyone, ready to help and guide on their adventure of skincare, and more.</h1>
      <h1>Our specialist are ready to help you with whatever skin and hair concern you have. Our skilled stylists will create hair and nails of your dreams. Don’t hesitate and book an appointment with us now!</h1>
      <!-- <img src= "./src/assets/images/beautyroutine.jpg" /> -->
      <!-- <img :src="imageUrl" /> -->
      <!-- <img :src=require('@/assets/images/beautyroutine.jpg') /> -->
      <!-- <img :src="require(`../../assets/${beautyroutine.jpg}.svg`)"> -->
      <!-- <img v-bind:src="require('./assets/${beautyroutine.jpg')" /> -->
      <img src="./public//beautyroutine.jpg">
    </body>
  </template>
  
  <script>
  import TaskBar from './TaskBar.vue';

  // const imageUrl = import("BeautifyMe/src/assets/images/beautyroutine.jpg");
  
  export default {
    components: {
      TaskBar
    },
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
    margin-top: -500px; /* Dodane */
  }

  h1 {
    font-size: 20px;
    color: black;
    font-family: "Josefin Sans";
  }
  
  </style>
  
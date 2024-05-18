<template>
  <div id="about-us">
    <task-bar></task-bar>
  </div>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap">
  </head>
  <body>  
    <h1 class="welcome">Welcome to</h1>
    <h1 class ="bm">BeautifyMe</h1>
    <a href="/book">
      <button class="book">See all available services</button><br>
    </a>
    <a href="/history">
      <button class="history">My bookings</button>
    </a>
    
  </body>
</template>

<script setup>
import TaskBar from './TaskBar.vue';
</script>

<style scoped>
#main-page {
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px); /* Wysokość na całą wysokość widoku minus wysokość paska zadań */
}
.welcome {
  font-family: "Josefin Sans";
  text-align: center;
  line-height: 100px;
  font-size: 50px;
  color: black;
  width: 400px;
  margin: auto;
  margin-top: 70px;
}

.bm {
  text-align: center;
  line-height: 100px;
  font-family: "Hurricane";
  font-size: 120px;
  color: black;
  width: 400px;
  margin: auto;
  margin-top: 60px;
}

.book {
  background-color: #F553B4;
  color: white;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 18px;
  margin: 0;
  position: absolute;
  top: 70%;
  left: 50%;
  width: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.history {
  background-color: #F553B4;
  color: white;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 18px;
  margin: 0;
  position: absolute;
  top: 80%;
  left: 50%;
  width: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

</style>
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
    <a>
      <button class="book" @click.prevent="goToServices">See all available services</button><br>
    </a>
    <a>
      <button class="history" @click.prevent="goToBookings">My bookings</button>
    </a>
  </body>
</template>

<script setup>
  import TaskBar from './TaskBar.vue';
  import { useRouter } from 'vue-router/dist/vue-router';
  import { useStore } from "../store";

  const router = useRouter();
  const localStore = useStore();

  function goToServices(value) {
    router.push({ path: '/book' }); 
  };

  function goToBookings (value) {
      router.push({ path: '/mybookings' });
  };
</script>

<style scoped>
#main-page {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px); 
}
.welcome {
  font-family: "Josefin Sans";
  text-align: center;
  line-height: 100px;
  font-size: 50px;
  color: black;
  width: 400px;
  margin: auto;
  margin-top: 90px;
}

.bm {
  text-align: center;
  line-height: 100px;
  font-family: "Hurricane";
  font-size: 120px;
  color: black;
  margin: auto;
  margin-top: 250px;
  margin-left: -850px;
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
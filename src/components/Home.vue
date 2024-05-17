<template>
  <div id="main-page">
    <task-bar></task-bar>
    <div id="about-us">
      <h1 class="welcome">Welcome to</h1>
      <h1 class="bm">BeautifyMe</h1>
      <a href="/book">
        <button class="book">Book Now</button>
      </a>
      <a href="/history">
        <button class="history">My bookings</button>
      </a>
    </div>
  </div>
</template>

<script>
import TaskBar from './TaskBar.vue';

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
  height: calc(100vh - 60px); /* Height minus taskbar height */
  padding: 20px;
  text-align: center;
}

.welcome {
  font-family: "Josefin Sans", sans-serif;
  line-height: 1.2;
  font-size: 8vw; /* Adjusted for responsiveness */
  color: black;
  margin: 20px 0;
}

.bm {
  font-family: "Hurricane", cursive;
  font-size: 15vw; /* Adjusted for responsiveness */
  color: black;
  margin: 20px 0;
}

button {
  background-color: #F553B4;
  color: white;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 18px;
  margin: 10px 0;
  padding: 15px;
  font-size: 4vw; /* Adjusted for responsiveness */
  width: 80%;
  max-width: 300px; /* Max width for larger screens */
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e542a3;
}

@media (min-width: 768px) {
  .welcome {
    font-size: 4vw;
  }

  .bm {
    font-size: 7vw;
  }

  button {
    font-size: 2vw;
    width: 40%;
  }
}
</style>

<template>
  <div id="book">
    <task-bar></task-bar>
    <div class="content"></div>
  </div>
  <body>
    <div class="services-container">
      <h1 class="header">OUR SERVICES</h1>
      <div class="button-container">
        <a href="/history">
          <button class="history">My bookings</button>
        </a>
      </div>
    </div>
    <hr />
    <div class="booking-containers">
      <div class="service-item">
        <h2 class="service">Haircut for short hair</h2>
        <a href="/history">
          <button class="button-container">Book</button>
        </a>
      </div>
      <div class="service-item">
        <h2 class="service">Haircut for long hair</h2>
        <a href="/history">
          <button class="button-container">Book</button>
        </a>
      </div>
      <div class="service-item">
        <h2 class="service">Hybrid manicure</h2>
        <a href="/history">
          <button class="button-container">Book</button>
        </a>
      </div>
      <div class="service-item">
        <h2 class="service">Facial for acne-prone skin</h2>
        <a href="/history">
          <button class="button-container">Book</button>
        </a>
      </div>
      <div class="service-item">
        <h2 class="service">Facial for dry skin</h2>
        <a href="/history">
          <button class="button-container">Book</button>
        </a>
      </div>
      <div class="service-item">
        <h2 class="service">Relaxing back massage</h2>
        <a href="/history">
          <button class="button-container">Book</button>
        </a>
      </div>
      <div class="service-item">
        <h2 class="service">Lashes extensions</h2>
        <a href="/history">
          <button class="button-container">Book</button>
        </a>
      </div>
    </div>
  </body>
</template>

<script>
import TaskBar from './TaskBar.vue';

export default {
  components: {
    TaskBar
  }
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

.content {
  margin-top: 60px;
}

.logo h1 {
  margin: 0;
  font-size: 20px;
}

button {
  background-color: #F553B4;
  color: white;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 18px;
  padding: 10px 20px;
  font-size: 1em;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e542a3;
}

.header {
  color: #000;
  font-family: "Josefin Sans";
  font-size: 2em;
  margin: 20px;
  text-align: center;
}

hr {
  display: block;
  height: 2px;
  border: 0;
  border-top: 3px solid #000;
  margin: 1em 0;
  padding: 0;
  width: 90%;
}

.services-container {
  text-align: center;
  margin-bottom: 20px;
}

.booking-containers {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 800px;
}

.service {
  color: #000;
  font-size: 1.5em;
  font-family: "Josefin Sans";
}

.button-container {
  flex-shrink: 0;
  margin-left: 20px;
  padding: 10px 20px;
}

@media (min-width: 768px) {
  .header {
    font-size: 2.5em;
  }

  .service {
    font-size: 2em;
  }

  button {
    font-size: 1.2em;
    padding: 15px 30px;
  }

  .service-item {
    gap: 40px;
  }
}
</style>

<template>
  <div id="main-page">
    <task-bar></task-bar>
    <div class="content">
      <h1 class="title">BeautifyMe</h1>
      <p>
        <button @click="$router.push('/login')">Log in</button>
      </p>
      or
      <p>
        <button @click="$router.push('/register')">Create an account</button>
      </p>
    </div>
  </div>
</template>

<script setup>
import TaskBar from './TaskBar.vue';

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

.content button {
  width: 100%;
  background-color: #d869c9; /* Kolor tła przycisku */
  color: #fff; /* Kolor tekstu na przycisku */
  border: none;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.logo h1 {
  margin: 0;
  font-size: 20px;
  margin-top: -500px; /* Dodane */
}

</style>

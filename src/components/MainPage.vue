<template>
  <div id="main-page">
    <task-bar></task-bar>
    <h1 class="title">BeautifyMe</h1>
    <div class="content">
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
  height: calc(100vh - 60px); 
}

.title {
  color: black;
  font-family: "Hurricane", cursive;
  font-weight: 400;
  font-size: 6em;
  margin-top: -10px;
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
  background-color: white;
  color: black;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
<template>
  <div id="login-page">
    <h1 class="title">BeautifyMe</h1>
    <task-bar></task-bar>
    <div class="content">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  import TaskBar from './TaskBar.vue';
  
  export default {
    components: {
      TaskBar
    },
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Tutaj powinna być logika logowania, np. wysłanie danych do serwera
        console.log(`Logging in with email ${this.email} and password ${this.password}`);
      }
    }
  }
  </script>

<style scoped>
#login-page {
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

.content {
  width: 100%;
  max-width: 400px; /* Maksymalna szerokość formularza */
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 4px;
  margin-top: 60px
}

.content form div {
  margin-bottom: 10px;
}

.content form button {
  width: 100%;
}
</style>
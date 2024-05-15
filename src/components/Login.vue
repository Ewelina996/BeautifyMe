<template>
  <div id="login-page">
    <h1 class="title">BeautifyMe</h1>
    <div class="account-info">
      <h2>Login to access your account</h2>
      <p>Enter your email and password to log in</p>
    </div>
    <task-bar></task-bar>
    <div class="content">
      <form @submit.prevent="login">
        <div class="input-container">
          <input type="email" id="email" v-model="email" placeholder="email@domain.com">
        </div>
        <div class="input-container">
          <input type="password" id="password" v-model="password" placeholder="password">
        </div>
        <button type="submit">Log in</button>
        <p>or continue with</p>
<button class="google-sign-in-button">
  Google
</button>
<p>or create an account</p>
      <button type="button">Create an account</button>
    </form>
    </div>
     <div class="terms-and-privacy">
      <p>By clicking continue, you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy</strong></p>
    </div>
  </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import TaskBar from './TaskBar.vue';

  let email = ref('');
  let password = ref('');

  const login = () => {
    // Tutaj powinna być logika logowania, np. wysłanie danych do serwera
    console.log(`Logging in with email ${email} and password ${password}`);
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
  color: black;
}

.content {
  width: 100%;
  max-width: 400px; /* Maksymalna szerokość formularza */
  padding: 20px;
  background-color: transparent;
  border-radius: 4px;
  margin-top: 1px
}

.content form div {
  margin-bottom: 12px;
}

.content form input {
  width: 95%; /* Powiększa pola wprowadzania do pełnej szerokości */
  height: 20px;
  padding: 10px; /* Dodaje padding dookoła tekstu */
  border-radius: 4px; /* Dodaje zaokrąglone rogi */
  border: none;
}

.content form button {
  width: 100%;
  background-color: #F553B4; /* Kolor tła przycisku */
  color: #fff; /* Kolor tekstu na przycisku */
  border: none;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}


</style>

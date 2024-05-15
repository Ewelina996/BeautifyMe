<template>
  <div id="register-page">
    <h1 class="title">BeautifyMe</h1>
    <div class="account-info">
      <h2>Create an account</h2>
      <p>Enter your email and password to create an account for this app</p>
    </div>
    <task-bar></task-bar>
    <div class="content">
      <form @submit.prevent="register">
        <div class="input-container">
          <input type="email" id="email" v-model="email" placeholder="email@domain.com">
        </div>
        <div class="input-container">
          <input type="password" id="password" v-model="password" placeholder="password">
        </div>
        <div class="input-container">
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="confirm_password">
        </div>
        <button type="submit">Create an account</button>
        <p>or continue with</p>
<button class="google-sign-in-button">
  Google
</button>
      </form>
    </div>
     <div class="terms-and-privacy">
      <p>By clicking continue, you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy</strong></p>
      <h1 class="title">BeautifyMe</h1>
      <p>
        <button @click="$router.push('/login')">Log in</button>
      </p>
      <p>
        <button @click="$router.push('/register')">Create an account</button>
      </p>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import TaskBar from './TaskBar.vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = () => {
  // Tutaj powinna być logika rejestracji, np. wysłanie danych do serwera
  console.log(`Registering with email ${email.value} and password ${password.value}`);
};
</script>

<style scoped>
#register-page {
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
  margin-bottom: 0px;
}

.content form input {
  width: 97%; /* Powiększa pola wprowadzania do pełnej szerokości */
  height: 20px;
  padding: 10px; /* Dodaje padding dookoła tekstu */
  border-radius: 4px;
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

.google-sign-in-button {
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.input-container {
  background-color: transparent; /* Zmień na kolor tła, który chcesz */
  margin-bottom: 10px; /* Dodaje odstęp między polami */
  padding: 10px; /* Dodaje padding dookoła pola */
}




</style>

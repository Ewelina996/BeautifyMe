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
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="confirm password">
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
    </div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import TaskBar from './TaskBar.vue';

const router = useRouter();
let email = ref("");
let password = ref("");
let confirmPassword = ref("");

const register = async () => {
  console.log(`Registering with email ${email.value} and password ${password.value}`);

  try {
    await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
    console.log("Successfully registered");
    router.push('/home');
  } catch (error) {
    console.log(error.code);
    alert(error.message);
  }
}
</script>

<style scoped>
#register-page {
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
  color: black;
}

.content {
  width: 100%;
  max-width: 400px; 
  padding: 20px;
  background-color: transparent;
  border-radius: 4px;
  margin-top: 1px
}

.content form div {
  margin-bottom: 0px;
}

.content form input {
  width: 97%; 
  height: 20px;
  padding: 10px; 
  border-radius: 4px;
  border: none;
}

.content form button {
  width: 100%;
  background-color: #F553B4; 
  color: #fff; 
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
  background-color: transparent; 
  margin-bottom: 10px; 
  padding: 10px; 
}




</style>

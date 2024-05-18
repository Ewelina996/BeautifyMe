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
    </form>
    <a href="/register">
        <button class="register">Create an account</button><br>
    </a>  
    </div>
     <div class="terms-and-privacy">
      <p>By clicking continue, you agree to our <strong>Terms of Service</strong> and <strong>Privacy Policy</strong></p>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import TaskBar from './TaskBar.vue';
  import router from "../router";
  
  let email = ref("");
  let password = ref("");

const login = async () => {
  console.log(`Logging in with email ${email.value} and password ${password.value}`);

  try {
    await signInWithEmailAndPassword(getAuth(), email.value, password.value);
    console.log("Successfully signed in");
    router.push('/home');
  } catch (error) {
    console.log(error.code);
    alert(error.message);
  }
};
</script>

<style scoped>
#login-page {
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
  margin-bottom: 12px;
}

.content form input {
  width: 95%; 
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

.register {
  width: 100%;
  background-color: #F553B4; 
  color: #fff; 
  border: none;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}


</style>

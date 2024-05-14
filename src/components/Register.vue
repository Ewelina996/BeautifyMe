<template>
  <div id="register-page">
    <h1 class="title">BeautifyMe</h1>
    <task-bar></task-bar>
    <div class="content">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword">
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRoute, useRouter } from "vue-router";
  import TaskBar from './TaskBar.vue';
  import router from "../router";

  const email = ref("");
  const password = ref(""); 

  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Successfully registered");
        router.push('/home')
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };

  export default {
  components: {
    TaskBar
  },

  



  data() {
    return {
      email: '',
      password: '',
        confirmPassword: ''
      }
    },
    methods: {
      register() {
        // Tutaj powinna być logika rejestracji, np. wysłanie danych do serwera
        console.log(`Registering with email ${this.email} and password ${this.password}`);

        createUserWithEmailAndPassword(getAuth(), this.email, this.password)
      .then((data) => {
        console.log("Successfully registered");
        router.push('/home')
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
      }
    }
  }
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
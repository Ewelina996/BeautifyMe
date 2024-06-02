<template>
  <div id="mybookings">
    <task-bar></task-bar>
  </div>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap">
  </head>
    <h1 class="welcome">My bookings:</h1>
    <li v-for="item in bookingArray">
      Date: {{ item.date }}
      <br>
      Hour: {{ item.hour }}
      <br>
      Service: {{ item.service }}
      <br>
      Beautician: {{  item.beautician  }}
    </li>
    <body>
      <button class="book" @click="goToBooking">New booking</button><br>
    </body>
</template>
  
<script setup>
  import TaskBar from './TaskBar.vue';
  import { useRouter } from 'vue-router';
  import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; 
  import { db } from '../main.js'
  import { useStore } from "../store";
  import { onMounted } from 'vue';
  import { getAuth, onAuthStateChanged} from 'firebase/auth';

  const router = useRouter();
  const localStore = useStore();

  const goToBooking = () => {
    router.push('book');
  };

</script>

<script>

  export default {
      data: () => ({
        bookingArray: [{
          date: "",
          hour: "",
          service: "",
          beautician: ""
        }        
        ]
      }),
      mounted(){
        this.getData();
      },
      methods:{
        async getData() {
          let auth = getAuth();
          onAuthStateChanged(auth,(user) => {
            if(user) {
              localStore.changeClient(user.email);
            }
          });
          const localStore = useStore();
          const q = query(collection(db, "appointments"), where("client", "==", localStore.client));
          const querySnapshot = await getDocs(q);
          this.bookingArray.shift();
          querySnapshot.forEach((doc) => {
                  let docData = doc.data();
                  this.bookingArray.push({date: docData.date, hour: docData.hour, service: docData.service, beautician: docData.beautician})
                });
        }
      }
  }
</script>
  
<style scoped>

  #main-page {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px); 
  }
  
  .welcome {
    font-family: "Josefin Sans";
    line-height: 100px;
    font-size: 40px;
    color: black;
    width: 400px;
    margin: auto;
    margin-top: 70px;
    margin-left: 10px;
  }
  
  .bm {
    text-align: center;
    line-height: 100px;
    font-family: "Hurricane";
    font-size: 120px;
    color: black;
    width: 400px;
    margin: auto;
    margin-top: 60px;
  }
  
  .book {
    background-color: #F553B4;
    color: white;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 18px;
    margin: 0;
    position: absolute;
    left: 50%;
    width: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    bottom: 0;
  }
  
  .history {
    background-color: #F553B4;
    color: white;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 18px;
    margin: 0;
    position: absolute;
    top: 80%;
    left: 50%;
    width: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .back-button {
  position: absolute;
  top: 80px; 
  right: 365px; 
  }

  button {
    background-color: #F553B4;
    color: white;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 18px;
  }

  li {
    color: black;
    font-family: "Josefin Sans";
    font-size: 20px;
    text-align: justify;
    margin-left: 90px;
  }
  
</style>

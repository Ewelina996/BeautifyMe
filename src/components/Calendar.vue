<template>
    <div id="calendar">
      <task-bar></task-bar>
      <div class="content">        
      </div>
    </div>
    <body>

    <div class="services-container">
      <h1>Your beautician: {{  localStore.beautician }}</h1>

      <hr class="line"/>

      <div class="button-container">
        <a href="/MyBookings">
          <button class="mybookings">My bookings</button>
        </a>
      </div>

      <v-container class="calendar">
        <v-row justify="space-around">
          <v-date-picker v-model="date" :allowed-dates="allowedDates"></v-date-picker>
        </v-row>
      </v-container>
      <v-select :items="items" item-title="hour" label="Choose appointment hour" class="hours">
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" @click="selectHour(item)"></v-list-item>
        </template>
      </v-select>

      <button @click="sendData" class="bookButton">BOOK YOUR APPOINTMENT</button>
        
    </div>   
    </body>
  </template>

  <script setup>
    import TaskBar from './TaskBar.vue';
    import { collection, addDoc, getDocs, query, where } from "firebase/firestore"; 
    import { db } from '../main.js'
    import { useStore } from "../store";
    import { onMounted } from 'vue';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';

    const localStore = useStore();

    let auth;

    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth,(user) => {
        if(user) {
          localStore.changeClient(user.email);
        }
      });
    });

    function selectHour(time) {
      localStore.changeHour(time.value);
    }

  </script>

  <script>  
  export default {
    data: () => ({
      disabledDates: {dates: [new Date()]},
      dateTimeSet: [{
        date: new Date(),
        hours: ""
      }],
      date: new Date(),
      items: [],
      startItems: [
        {
          hour: '8:00-10:00',
        },
        {
          hour: '10:00-12:00',
        },
        {
          hour: '12:00-14:00',
        },
        {
          hour: '14:00-16:00',
        },
        {
          hour: '16:00-18:00',
        },

      ],
      props: { choosenBeautician: String },
    }),
    mounted(){
      this.items = this.startItems;
      this.getData();
    },
    computed: {
      choosenDateToString () { 
        return new Date(this.date).toString()
      }
    },
    methods: {
      async sendData(){
        const localStore = useStore();
        try {
        const docRef = await addDoc(collection(db, "appointments"), {
          beautician: localStore.beautician,
          service: localStore.service,
          client: localStore.client,
          date: this.choosenDateToString,
          hour: localStore.hour,
        })
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      },
      async getData() {
        const localStore = useStore();
        const q = query(collection(db, "appointments"), where("beautician", "==", localStore.beautician));
        const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              this.dateTimeSet.push({
              date: doc.data().date,
              hours: doc.data().hour
             });
          });
          this.dateTimeSet.shift();
          this.disabledDates.dates.shift();
          //add 1 if the date exists, initialize as 1 if it does not
          let hoursSets = this.dateTimeSet.reduce((out, {date}) => ({ ...out, [date]: out[date]+1 || 1}), {});
          let dateHoursSet = Object.keys(hoursSets).map(key => ({date: new Date(Date.parse(key)), houreSet: hoursSets[key]}));

          dateHoursSet.forEach(dateHours => {
            if(dateHours.houreSet == 5) {
              this.disabledDates.dates.push(dateHours.date);
              return true;
            }});          
      },
      allowedDates(value) {
      const day =  new Date(Date.parse(value)).getDate();
      if(this.disabledDates.dates.length == 0) return true;
      return this.disabledDates.dates.some(date => date.getDate() !== day);
      },
   }, 
   watch: {
    date: function(newValue, oldValue) {
        this.items = this.startItems;
        this.dateTimeSet.forEach( setMember => {
          if(setMember.date == newValue){
            this.items = this.items.filter(obj => obj.hour != setMember.hours)
          }
        });
        }
    },
   
  }
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
  
  .title.hurricane-regular {
    font-family: "Hurricane", cursive;
    font-weight: 400;
    font-style: normal;
    margin-top: -500px;
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
    background-color: #F553B4;
    color: white;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 18px;
  }
  
  .mybookings {
    color: white;
    margin-left: 1050px;
    position: absolute;
    margin-top: -80px;
    left: 10px;
  }
  
  h1 {
    color: #000000;
    font-family: "Josefin Sans";
    font-size: 30px;
    text-align: left;
    margin-top: 50px;
    margin-left: 50px;
  }
  
  .line {
    display: block;
    height: 2px;
    border: 0;
    border-top: 3px solid #000000;
    margin: 1em 0;
    margin-top: 30px;
    padding: 0;
    width: 1150px;
    margin-left: 50px;
  } 
  
  .services-container { 
    position: relative;
    margin-top: -20px;
    margin-bottom: 10px;
  }
  
  .ser1 {
    color: #000000;
    font-size: 25px;
    font-family: "Josefin Sans";
    text-align: left;
    margin-left: 70px;
  }
  
  .button-container1 {
    color: white;
    margin-left: 1200px;
    position: absolute;
    left: 10px;
    margin-top: -70px;    
  }
  
  .ser2 {
    color: #000000;
    font-size: 25px;
    font-family: "Josefin Sans";
    text-align: left;
    margin-left: 70px;
    margin-top: -25px;
  }
  
  .button-container2 {
    color: white;
    margin-left: 1200px;
    position: absolute;
    left: 10px;
    margin-top: -70px;    
  }
  
  .ser3 {
    color: #000000;
    font-size: 25px;
    font-family: "Josefin Sans";
    text-align: left;
    margin-left: 70px;
    margin-top: 5px;
  }
  
  .button-container3 {
    color: white;
    margin-left: 1200px;
    position: absolute;
    left: 10px;
    margin-top: -70px;    
  }
  
  .ser4 {
    color: #000000;
    font-size: 25px;
    font-family: "Josefin Sans";
    text-align: left;
    margin-left: 70px;
    margin-top: 5px;
  }
  
  .button-container4 {
    color: white;
    margin-left: 1200px;
    position: absolute;
    left: 10px;
    margin-top: -70px;    
  }
  
  .ser5 {
    color: #000000;
    font-size: 25px;
    font-family: "Josefin Sans";
    text-align: left;
    margin-left: 70px;
    margin-top: 5px;
  }
  
  .button-container5 {
    color: white;
    margin-left: 1200px;
    position: absolute;
    left: 10px;
    margin-top: -70px;    
  }
  
  .ser6 {
    color: #000000;
    font-size: 25px;
    font-family: "Josefin Sans";
    text-align: left;
    margin-left: 70px;
    margin-top: 5px;
  }
  
  .button-container6 {
    color: white;
    margin-left: 1200px;
    position: absolute;
    left: 10px;
    margin-top: -70px;    
  }
  
  .ser7 {
    color: #000000;
    font-size: 25px;
    font-family: "Josefin Sans";
    text-align: left;
    margin-left: 70px;
    margin-top: 5px;
  }
  
  .button-container7 {
    color: white;
    margin-left: 1200px;
    position: absolute;
    left: 10px;
    margin-top: -70px;    
  }
  
  .image-container { 
    display: flex;
    justify-content: flex-start;
    gap: 0px;
    margin-right:300px;
  }
  
  .image-container img {
    width: 50%;
  }
  
  .image-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .image-item p { 
    font-weight: bold;
    color: black;
  }
  
  .italic-text {
    font-style: italic;
  }
  
  .name-text {
    font-size: 20px;
  }
  
  .specialists-header {
    margin-top: 10px;
  }
  
  .back-button {
    position: fixed;
    top: 80px;
    right: 365px; 
  }

  .calendar {
    margin-left: 40px;
  }

  .hours {
    width: 50%;
    justify-content: center;
    margin-left: 350px;
    margin-top: 10px;
  }
  
</style>
  
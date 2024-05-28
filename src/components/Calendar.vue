<template>
    <div id="calendar">
      <task-bar></task-bar>
      <div class="content">        
      </div>
    </div>
    <body>

    <div class="services-container">
      <h1>Your stylist:</h1>

      <hr class="line"/>

      <div class="button-container">
        <a href="/MyBookings">
          <button class="mybookings">My bookings</button>
        </a>
      </div>

        <v-container class="calendar">
          <v-row justify="space-around">
            <v-date-picker elevation="24"></v-date-picker>
          </v-row>
        </v-container>

      <v-select :items="items" item-title="name" label="User">
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :subtitle="item.raw.department"></v-list-item>
        </template>
      </v-select>
        
    </div>   
    </body>
  </template>

  <script setup>
    import TaskBar from './TaskBar.vue';
  </script>

  <script>

  export default {
    data: () => ({
      items: [
        {
          name: 'John',
          department: 'Marketing',
        },
        {
          name: 'Jane',
          department: 'Engineering',
        },
        {
          name: 'Joe',
          department: 'Sales',
        },
        {
          name: 'Janet',
          department: 'Engineering',
        },
        {
          name: 'Jake',
          department: 'Marketing',
        },
        {
          name: 'Jack',
          department: 'Sales',
        },
        {
          stylist: 'Anna',
        },
      ],
    }),
  }

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
    top: 0;
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
  
  .image-container { /* Dodane */
    display: flex;
    justify-content: flex-start;
    gap: 0px;
    margin-right:300px;
  }
  
  .image-container img { /* Dodane */
    width: 50%;
  }
  
  .image-item { /* Dodane */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .image-item p { /* Dodane */
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
    top: 80px; /* Odległość od góry */
    right: 365px; /* Odległość od prawej strony */
  }

  .calendar {
    margin-left: 40px;
  }
  
  </style>
  
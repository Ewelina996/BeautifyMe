<template>
  <div id="payment">
    <task-bar></task-bar>
  </div>
  <div class="services-container">
    <h1 class="header">PAYMENT METHODS</h1>
    <hr/>
    <div class="methods">
      <label>
        <input type="radio" value="Credit card" v-model="selectedPaymentMethod">
        Credit card
      </label>
    </div>
    <div class="methods">
      <label>
        <input type="radio" value="Blik" v-model="selectedPaymentMethod">
        Blik
      </label>
    </div>
    <div class="methods">
      <label>
        <input type="radio" value="Google Pay" v-model="selectedPaymentMethod">
        Google Pay
      </label>
    </div>
    <div class="methods">
      <label>
        <input type="radio" value="PayPal" v-model="selectedPaymentMethod">
        PayPal
      </label>
    </div>
    <p class="methods">Selected payment method: <strong>{{ selectedPaymentMethod }}</strong></p>
    <button class="pay">Pay</button><br>
  </div>
</template>

  
<script setup>
import { ref } from 'vue';
import TaskBar from './TaskBar.vue';

let selectedPaymentMethod = ref('');
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
    text-align: center;
    line-height: 100px;
    font-size: 40px;
    color: black;
    width: 400px;
    margin: auto;
    margin-top: 70px;
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
  
  .pay {
  background-color: #F553B4;
  color: white;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 10px;
  margin: 0;
  position: absolute;
  bottom: -50px; /* Dodano jednostkę px */
  top: auto; /* Zmieniono na auto */
  left: 50%;
  width: 15%;
  border-radius: 60px;
  -ms-transform: translateX(-50%); /* Zmieniono na translateX */
  transform: translateX(-50%); /* Zmieniono na translateX */
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
  
  .services-container { 
  position: relative;
  margin-top: -20px;
  margin-bottom: 10px;
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
  font-size: 35px;
  margin-top: 150px;
  text-align: left;
  margin-left: 80px;
}

hr {
  display: block;
  height: 2px;
  border: 0;
  border-top: 3px solid #000000;
  margin: 1em 0;
  padding: 0;
  width:90%;
  margin-left: 70px;
} 

button {
  background-color: #F553B4;
  color: white;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 50px;
}

.methods {
  color: #000000;
  font-size: 28px;
  font-family: "Josefin Sans";
  text-align: left;
  margin-left: 70px;
  margin-top: 5px;
  font-weight: bold;
  margin-bottom: 25px;
}
.methods:first-of-type {
  margin-top: 40px; 
}


  </style>
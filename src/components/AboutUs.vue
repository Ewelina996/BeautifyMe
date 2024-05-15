<template>
    <div id="about-us">
      <task-bar></task-bar>
      <div class="content"> 
      </div>
    </div>
    <body>
      <img class ="beauty_routine" src="../assets/beautyroutine.jpg">
      <p class="first_par">BeautifyMe was created in 2024 by a team of acknowledged and experienced aestheticians. Their goal was to create a space available for everyone, ready to help and guide on their adventure of skincare, and more.</p>
      <p class="second_par">Our specialist are ready to help you with whatever skin and hair concern you have. Our skilled stylists will create hair and nails of your dreams. Don’t hesitate and book an appointment with us now!</p>
      <p class="third_par">Our beauty parlor is equipped with the newest tools and skin care, in order to provide our clients with the best care possible. The visits in our parlor are not just visits - they are a whole experience, every single one of them tailored individually to every client. This approach allows our aestheticians to understand and treat every concern of your precious skin!</p>
      <a href="/book">
        <button class="book">Start your beauty journey now!</button><br>
      </a>
    </body>
  </template>
  
  <script>
  import TaskBar from './TaskBar.vue';

  // const imageUrl = import("BeautifyMe/src/assets/images/beautyroutine.jpg");
  
  export default {
    components: {
      TaskBar
    },
  };

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
    margin-top: -500px; /* Dodane */
  }

  .beauty_routine {
    float: left;
    margin-left: 30px;
    border-radius: 18px;
    box-shadow: 10px 10px 5px rgb(102, 77, 96);
    width: 25vw;
    height: 40vh;

  }

  .first_par {
    font-size: 25px;
    color: black;
    font-family: "Josefin Sans";
    text-align: left;
    margin-top: 80px;
    margin-left: 450px;
  }

  .second_par {
    font-size: 25px;
    color: black;
    font-family: "Josefin Sans";
    margin-top: 30px;
    margin-left: 450px;
    text-align: left;
  }

  .third_par {
    font-size: 25px;
    color: black;
    font-family: "Josefin Sans";
    margin-top: 50px;
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
  }

  .book {
    background-color: #F553B4;
    font-size: 15px;
    color: white;
    border: none;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 18px;
    margin: 0;
    position: absolute;
    top: 93%;
    left: 50%;
    width: 30%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
  </style>
  
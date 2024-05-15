<template>
    <div id="book">
      <task-bar></task-bar>
      <div class="content">
        <h1 class="title">BeautifyMe</h1>        
      </div>
    </div>
    <body>
      <div class="btn-group">
        <button>Op1</button>
        <button>Op2</button>
        <button>Op3</button>
</div>
    </body>
  </template>
  
  <script>
  import TaskBar from './TaskBar.vue';
  
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
  
  </style>
  
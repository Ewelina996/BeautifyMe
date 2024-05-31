<template>
    <div id="about-us">
      <task-bar></task-bar>
    </div>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap">
    </head>
    <body>  
      <h1 class="welcome">Welcome to</h1>
      <h1 class ="bm">BeautifyMe</h1>
    </body>
  </template>
  
  <script setup>
  import TaskBar from './TaskBar.vue';
  </script>
  
  <style scoped>
  #main-page {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
  }
  .welcome {
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    color: black;
    width: 400px;
    margin: auto;
    margin-top: 70px;
  }
  
  </style>
  
<script>
// import { useStore } from "./store";

// const store = useStore();

// export { store }

// export default {
//   data () {
//     return {
//       store
//     }
//   }
// }

</script>

<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<style scoped>
#app {
  background-image: linear-gradient(to bottom, rgb(212, 74, 132), rgb(211, 185, 212));
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>


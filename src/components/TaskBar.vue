<template>
    <header class="header">
      <div class="logo" @click="goToMainPage">
        <h1 class="logo-text title">BeautifyMe</h1>
      </div>
      <div class="nav-links">
        <nav>
          <ul>
            <li><a @click.prevent="goToHomePage" class="nav-link">Home</a></li>
          <li><a @click.prevent="goToBookPage" class="nav-link">Book</a></li>
          <li><a @click.prevent="goToAboutUsPage" class="nav-link">About Us</a></li>
        </ul>
      </nav>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
      <button @click="search">Search</button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const search = () => {
  // Add search functionality here
  console.log("Searching...");
};

const goToHomePage = () => {
  router.push({ path: '/home' });
};

const goToBookPage = () => {
  router.push({ path: '/book' }); // Przekierowuje do komponentu Book
};

const goToAboutUsPage = () => {
  router.push({ path: '/about' }); // Przekierowuje do komponentu AboutUs
};

const goToMainPage = () => {
  router.push({ path: '/' }); // Przekierowuje do komponentu MainPage
};
</script>
  
  <style scoped>
  .header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box; /* Dodane, aby uwzględnić padding i border w szerokości */
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000; /* Dodane, aby upewnić się, że pasek zadań jest zawsze na wierzchu */
}

.title {
  font-family: "Hurricane", cursive;
  font-weight: 400;
  font-size: 10em;
  color: black;
}

    .nav-links {
    margin-left: auto;
    cursor: pointer;
}
  
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;

  }
  
  .logo h1 {
    margin: 0;
    font-size: 40px
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
  }
  .search-bar input[type="text"]::placeholder {
  color: white;
  }

  .search-bar input[type="text"] {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-right: 10px;
    background-color: rgb(212, 74, 132);
    color: white;
  }
  
  .search-bar button {
    padding: 8px 15px;
    border-radius: 4px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  </style>

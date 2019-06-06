<template>
  <header class="header">
    <div class="header__inner">
      <div class="logo">
        <figure class="figure">
          <router-link :to="{name: 'Home'}"><img class="image" alt="Vue logo" src="./assets/logo.png"></router-link>
        </figure>
      </div>
      <div class="masthead"><h1>Vue, Vuex, Todos</h1></div>
      <Navigation>
        <ul>
          <li><router-link :to="{name: 'About'}">About</router-link></li>
          <li><router-link :to="{name: 'Todos'}">Todos</router-link></li>
        </ul>
      </Navigation>
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation';
export default {
  name: 'Header',
  components: {
    Navigation
  }
}
</script>

<style scoped>
.header {
  background-color: rgba(65,184,131, 0.5);
}

.header__inner {
  display: flex;
  max-width: 95%;
  margin: 0 auto;
  padding: 1.5rem 0;
}

.logo {
  flex: 1;
}

.figure {
  width: calc(100% - 1rem);
}

.image {
  width: 100%;
}

.masthead {
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  flex: 10;
}
</style>


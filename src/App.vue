<template>
  <div id="app">
    <Header/>
    <main class="main">
      <div class="main__inner">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #e8f7f0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
}

ul {
  list-style: none;
}

.main__inner {
  margin: auto;
  max-width: 1100px;
  overflow: auto;
  padding: 1.5rem 2rem;
}
</style>

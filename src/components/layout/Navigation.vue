<template>
  <div class="nav">
    <nav><i class="hamburger fas fa-bars"></i></nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.nav {
  align-content: center;
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  transform: translate(3rem, 0);
}

.hamburger {
  color: #35495E;
  cursor: pointer;
}
</style>

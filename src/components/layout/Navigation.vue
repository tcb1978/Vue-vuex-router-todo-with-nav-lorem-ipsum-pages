<template>
  <div class="nav">
    <nav>
      <span v-if="open" @click="open = !open"><i class="hamburger fas fa-bars"></i></span>
      <span v-if="!open" @click="open = !open"><i class="hamburger fas fa-bars"></i></span>
      <!-- <i class="hamburger fas fa-bars"></i> -->
      <slot v-if="open"></slot>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      open: true
    };
  }
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

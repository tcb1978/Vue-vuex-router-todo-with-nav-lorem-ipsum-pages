<template>
  <section class="filterTodos">
    <div>
      Filter Todos:
      <select class="select" @change="onChange">
        <option value="200">200</option>
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'FilterTodos',
  methods: {
    ...mapActions(['filterTodos']),
    onChange(event) {
      this.filterTodos(event.target.value);
    }
  }
}
</script>

<style scoped>
.select {
  border: 1px solid #41b883;
  margin-top: 20px;
  padding: 6px;
}
</style>


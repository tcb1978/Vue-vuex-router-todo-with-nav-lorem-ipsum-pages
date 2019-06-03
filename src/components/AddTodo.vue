<template>
  <section class="addTodo">
    <h3>Add Todo</h3>
    <div class="add">
      <form class="form" @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title)
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  padding: 1rem 0;
}

input[type="text"] {
  background-color: #fff;
  border: 1px solid #41b883;
  border-radius: 5px 0 0 5px;
  color: #41b883;
  cursor: pointer;
  flex: 10;
  padding: 1rem 3rem;
}

input[type="submit"] {
  background-color: #41b883;
  border: 1px solid #41b883;
  border-radius: 0 5px 5px 0;
  color: #fff;
  cursor: pointer;
  flex: 2;
  padding: 1rem 3rem;
}
</style>


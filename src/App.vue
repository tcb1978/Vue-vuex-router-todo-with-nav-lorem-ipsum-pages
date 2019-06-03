<template>
  <div id="app">
    <Header/>
    <main class="main">
      <div class="main__inner">
        <AddTodo/>
        <FilterTodos/>
        <Todos/>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';
import Todos from './components/Todos';

export default {
  name: 'app',
  components: {
    Header,
    AddTodo,
    FilterTodos,
    Todos
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

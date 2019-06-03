<template>
  <section class="toDos">
    <h3>Todos</h3>
    <legend class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </legend>
    <ul class="todos">
      <li
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        v-bind:key="todo.id"
        class="todo"
        v-bind:class="{'is-complete':todo.completed}">
        {{ todo.title }}
        <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),

    onDblClick(todo) {
      // create new object to update updateTodo and mutate state
      const updateTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      //call the updateTodo action with updateTodo
      this.updateTodo(updateTodo);
    }
  },
  computed: mapGetters(['allTodos']),
  created() {
    //call the fetchTodos action
    this.fetchTodos();
  }
}
</script>

<style scoped>
.section {
  padding: 3rem 0;
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding-top: 1rem;
}

.todo {
  align-content: center;
  background-color: #41b883;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  padding: 1rem;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

i {
  bottom: 10px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  right: 10px;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin:0 0 1rem 0;
}

.complete-box {
  background-color: #35495e;
  display: inline-block;
  height: 10px;
  width: 10px;
}

.incomplete-box {
  background: #41b883;
  display: inline-block;
  height: 10px;
  width: 10px;
}

.is-complete {
  background-color: #35495e;
  color: #fff;
  text-decoration: line-through;
  transition: all .2s ease;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>


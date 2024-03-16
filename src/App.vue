<template>
  <div id="app">
    <div class="container">
      <AddTodoView/>
      <TodosView/>
    </div>
  </div>
</template>

<script>
import TodosView from "./views/TodosView.vue";
import AddTodoView from "./views/AddTodoView.vue";
export default {
  name: "app",
  components: {
    TodosView,
    AddTodoView,
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: white;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
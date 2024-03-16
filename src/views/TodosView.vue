<template>
  <div>
    <h3>Todos View</h3>
    <div class="todosviews">
      <div
        v-for="todoview in allTodosView"
        :key="todoview._id"
        class="todoview"
        v-bind:class="{ 'is-complete': todoview.completed, 'is-editing': todoview.isEditing }"
        @dblclick="toggleEditMode(todoview)"
      >
        <div v-if="todoview.isEditing">
          <input v-model="todoview.title" />
          <textarea v-model="todoview.content[0]"></textarea>
          <button @click="updateTodoView(todoview)">Save</button>
        </div>
        <div v-else>
          <div>{{ todoview.title }}</div>
          <div>{{ todoview.content[0] }}</div>
          <i @click="deleteTodoView(todoview._id)" class="fas fa-trash-alt"></i>
          <div class="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TodosView',
  methods: {
    ...mapActions(['fetchTodosView', 'deleteTodoView', 'updateTodoView']),
    onDelete(todoviewId) {
      this.deleteTodoView(todoviewId)
    },

    toggleEditMode(todoview) {
      todoview.isEditing = !todoview.isEditing
    }
  },
  computed: mapGetters(['allTodosView']),
  created() {
    this.fetchTodosView()
  }
}
</script>
<style scoped>
.todosviews {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todoview {
  position: relative;
  width: 300px;
  height: 200px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #444;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.4rem;
}

.todoview:nth-child(1) {
  background-color: #f4a261;
}

.todoview:nth-child(2) {
  background-color: #e9c46a;
}

.todoview:nth-child(3) {
  background-color: #eed997;
}

.todoview:nth-child(4) {
  background-color: #f7af9d;
}
.todoview:nth-child(5) {
  background-color: #c08497;
}

.todoview:nth-child(6) {
  background-color: #f7e3af;
}

.todoview:nth-child(7) {
  background-color: #f4a261;
}

.todoview:nth-child(8) {
  background-color: #e9c46a;
}

.todoview:nth-child(9) {
  background-color: #eed997;
}
.todoview:nth-child(10) {
  background-color: #f7af9d;
}
.todoview:nth-child(11) {
  background-color: #c08497;
}

.todoview:nth-child(12) {
  background-color: #f7e3af;
}


i {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  cursor: pointer;
}

.arrow {
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 1px;
  right: 15px;
  color: white;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}
</style>

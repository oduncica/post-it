<template>
  <div>
    <h3>Add TodoView</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Title...">
        <input type="text" v-model="content" placeholder="Content...">
        <input type="submit" value="Add New View">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodoView",
  data() {
    return {
      title: "",
      content :"",
    };
  },
  methods: {
    ...mapActions(["addTodoView"]),
    onSubmit(e) {
      e.preventDefault();
      let note = {
        title: this.title,
        content: this.content,
      }
      this.addTodoView(note);

    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input[type="text"] {
  width: 400px;
  padding: 10px;
  border: 1px solid #C08497;
  outline: 0;
}
input[type="submit"] {
  background: #C08497;
  color: #fff;
  border: 1px #C08497 solid;
  cursor: pointer;
  width: 422px;
}

</style>

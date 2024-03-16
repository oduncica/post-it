import axios from 'axios';

const state = {
  todosview: []
};

const getters = {
  allTodosView: state => state.todosview
};

const actions = {
  async fetchTodosView({ commit }) {
    const response = await axios.get(
      'https://post-it-7m1i.onrender.com/notes/',
    );

    commit('setTodosView', response.data.notes);
  },
  async addTodoView({ commit }, note ) {
    let title = note.title;
    let content = note.content;
    const response = await axios.post(
      'https://post-it-7m1i.onrender.com/notes/',
      { title,content, completed: false }
    );

    commit('newTodoView', response.data);
  },
  async updateTodoView({ commit }, updTodoView) {
    const response = await axios.put(
      `https://post-it-7m1i.onrender.com/notes/${updTodoView.id}`,
      updTodoView
    );

    console.log(response.data);

    commit('updateTodoView', response.data);
  },


  async deleteTodoView({ commit }, id) {
    console.log(id)

    await axios.delete(
      'https://post-it-7m1i.onrender.com/notes/'+id,

      );

  },


  
};

const mutations = {
  setTodosView: (state, todosview) => (state.todosview = todosview),
  newTodoView: (state, todoview) => state.todosview.unshift(todoview),
  removeTodoView: (state, id) =>
    (state.todosview = state.todosview.filter(todoview => todoview.id !== id)),
  updateTodoView: (state, updTodoView) => {
    const index = state.todosview.findIndex(todoview => todoview.id === updTodoView.id);
    if (index !== -1) {
      state.todosview.splice(index, 1, updTodoView);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
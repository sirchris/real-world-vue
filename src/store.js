import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: "abc123",
      name: "Adam Jahr"
    },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],
    todos: [
      { id: 1, text: "Feed the cat", done: false },
      { id: 2, text: "Wash the car", done: false },
      { id: 3, text: "Clean the flat", done: true },
      { id: 4, text: "Go shopping", done: false }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength(state) {
      return state.categories.length;
    },
    activeTodos(state) {
      return state.todos.filter(todo => !todo.done);
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  }
});

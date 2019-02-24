import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

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
    ],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event.data);
      });
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(response => {
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`);
        });
    }
  },
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

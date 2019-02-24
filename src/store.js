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
    events: [],
    eventsTotal: 0,
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_TOTAL_EVENTS(state, amount) {
      state.eventsTotal = parseInt(amount, 10);
    },
    SET_EVENT(state, event) {
      state.event = event;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event.data);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit("SET_TOTAL_EVENTS", response.headers["x-total-count"]);
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`);
        });
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id);

      if (event) {
        commit("SET_EVENT", event);
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit("SET_EVENT", response.data);
          })
          .catch(error => {
            console.log(`There was an error: ${error.response}`);
          });
      }
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
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
});

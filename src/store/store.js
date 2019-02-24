import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import event from "./modules/event";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    event
  },
  state: {
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ]
  }
});

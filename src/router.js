import Vue from "vue";
import Router from "vue-router";
import EventCreate from "./views/EventCreate";
import EventList from "./views/EventList";
import EventShow from "./views/EventShow";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate
    },
    {
      path: "/event",
      name: "event-show",
      component: EventShow
    }
  ]
});

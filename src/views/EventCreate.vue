<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>

    <p>This event was created by {{ user.id }}</p>

    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>

    <p>There are some active todos:</p>
    <ul>
      <li v-for="todo in activeTodos" :key="todo.id">{{ todo.text }}</li>
    </ul>

    <p>{{ getTodoById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["activeTodos", "catLength", "getTodoById"]),
    ...mapState(["user", "categories"])
  }
};
</script>

<style scoped></style>

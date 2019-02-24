<template>
  <div class="about">
    <h1>Events Listing</h1>

    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', params: { id: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      <template v-if="hasNextPage">
        |
      </template>
    </template>
    <template v-if="hasNextPage">
      <router-link :to="{ name: 'event-list', params: { id: page + 1 } }"
        >Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  props: ["id"],
  components: {
    EventCard
  },
  created() {
    this.perPage = 3;

    this.$store.dispatch("fetchEvents", {
      perPage: this.perPage,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.id) || 1;
    },
    hasNextPage() {
      return this.page * this.perPage < this.eventsTotal;
    },
    ...mapState(["events", "eventsTotal"])
  }
};
</script>

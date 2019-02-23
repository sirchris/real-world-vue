<template>
  <div class="about">
    <h1>Events Listing</h1>

    <EventCard />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  components: {
    EventCard
  }
};
</script>

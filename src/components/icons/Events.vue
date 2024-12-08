<template>
  <div class="events">
    <div v-if="events.length" v-for="event in events" :key="event.title">
      <h3>{{ event.title }}</h3>
      <p>{{ event.time }}</p>
      <button @click="deleteEvent(event)">Delete</button>
    </div>
    <p v-else>No Events</p>
  </div>
</template>

<script>
export default {
  props: {
    events: Array,
  },
  methods: {
    deleteEvent(event) {
      this.$emit("delete-event", event);
    },
  },
};
</script>

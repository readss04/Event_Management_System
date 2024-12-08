<template>
  <div class="add-event-modal" v-if="isVisible">
    <h3>Add Event</h3>
    <input v-model="eventTitle" placeholder="Event Title" />
    <input v-model="eventTimeFrom" placeholder="Start Time" />
    <input v-model="eventTimeTo" placeholder="End Time" />
    <button @click="addEvent">Add Event</button>
    <button @click="$emit('close')">Cancel</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventTitle: "",
      eventTimeFrom: "",
      eventTimeTo: "",
    };
  },
  props: {
    isVisible: Boolean,
  },
  methods: {
    addEvent() {
      if (this.eventTitle && this.eventTimeFrom && this.eventTimeTo) {
        this.$emit("add-event", {
          title: this.eventTitle,
          time: `${this.eventTimeFrom} - ${this.eventTimeTo}`,
        });
        this.eventTitle = "";
        this.eventTimeFrom = "";
        this.eventTimeTo = "";
      } else {
        alert("All fields are required.");
      }
    },
  },
};
</script>

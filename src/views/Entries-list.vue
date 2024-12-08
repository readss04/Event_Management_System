<template>
  <div class="light-green">
    <!-- Header -->
    <header>
      <div class="sidebar">
        <div class="top">
          <div class="logo">
            <i class="bx bxl-codeopen"></i>
            <span class="title-name">Eventify</span>
          </div>
          <i class="bx bx-menu" id="btn"></i>
        </div>
        <ul>
          <li>
            <router-link to="/entries">
              <i class="bx bxs-home-alt-2"></i>
              <span class="nav-item">List</span>
            </router-link>
          </li>
          <li>
            <router-link to="/report">
              <i class="bx bx-question-mark"></i>
              <span class="nav-item">Report</span>
            </router-link>
          </li>
          <li>
            <router-link to="/users">
              <i class="bx bx-child"></i>
              <span class="nav-item">Users</span>
            </router-link>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-log-out"></i>
              <span class="nav-item">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </header>

    <div class="entries-container">
      <div class="entries-desc">
        <h2 class="entries-title">Event Entries List</h2>
        <hr class="entries-line" />
        <div class="button-container">
          <router-link to="/create-event" class="entries-button">Create Event</router-link>
        </div>
      </div>

      <!-- Search and Entries Table -->
      <div class="container">
        <div class="entries-sample">
          <p class="entries-subtitle">Search:</p>
          <input
            class="entries-input"
            type="text"
            v-model="searchQuery"
            @input="filterEvents"
            placeholder="Search"
          />
        </div>

        <!-- Integrate the reusable EventTable -->
        <EventTable :events="filteredEvents" />
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "@/api/axios";
import EventTable from "@/components/EventTable.vue"; // Import the reusable component

export default {
  components: {
    EventTable, // Register the reusable EventTable component
  },
  data() {
    return {
      events: [], // Stores all events fetched from the API
      searchQuery: "", // Search input value
      filteredEvents: [], // Filtered results based on search
    };
  },
  created() {
    this.fetchEvents(); // Fetch events when the component is created
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await apiClient.get("/displayevent");
        if (response.data.status.remarks === "Success") {
          this.events = response.data.payload || [];
          this.filteredEvents = [...this.events];
        } else {
          console.error("Failed to fetch events:", response.data.status.message);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
    filterEvents() {
      const query = this.searchQuery.toLowerCase();
      this.filteredEvents = this.events.filter((event) =>
        (event.event_name || "").toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped src="../assets/styles/admins/entrieslist.css"></style>
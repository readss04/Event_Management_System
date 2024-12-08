<template>
  <div class="light-green"></div>
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
          <router-link to="/Home">
            <i class="bx bxs-home-alt-2"></i>
            <span class="nav-item">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/About">
            <i class="bx bx-question-mark"></i>
            <span class="nav-item">About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/events">
            <i class="bx bxs-calendar-event"></i>
            <span class="nav-item">Events</span>
          </router-link>
        </li>
        <li>
          <router-link to="/profile">
            <i class="bx bx-child"></i>
            <span class="nav-item">Profile</span>
          </router-link>
        </li>
        <li>
          <!-- Button to trigger the logout modal -->
          <a @click="showLogoutModal = true">
            <i class="bx bxs-log-out"></i>
            <span class="nav-item">Logout</span>
          </a>

          <!-- Include the LogoutModal component -->
          <LogoutModal :show="showLogoutModal" @close="showLogoutModal = false" />
        </li>
      </ul>
    </div>
  </header>

  <!-- UPCOMING EVENTS SECTION -->
  <section>
    <div class="events-section">
      <h1 class="events-title">Upcoming Events</h1>

      <!-- Search Input -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search events..."
        class="search-input"
      />

      <hr class="events-line" />
    </div>

    <router-link to="/registration" class="register-button">
      Click to Register
    </router-link>

    <div class="events-container">
      <!-- Dynamically render event cards -->
      <div
        class="events-glasscard"
        v-for="event in filteredEvents"
        :key="event.event_id"
      >
        <div class="events-image">
          <img
            class="mark"
            :src="event.image_url || '../../../../images/default-event.png'"
            :alt="`Image for ${event.event_name}`"
          />
        </div>

        <div class="events-explanations">
          <div class="events-test">
            <h2 class="glasscard-title">{{ event.event_name }}</h2>
            <p class="desc-highlight">
              {{ event.event_description || "No description available." }}
            </p>
            <hr class="test5" />
            <div class="test4">
              <p class="name-highlight">
                Resource Speaker:
                <span class="name">
                  {{ event.resource_speaker || "Unknown" }}
                </span>
              </p>
              <p class="when-highlight">
                Date/Time:
                <span class="when">
                  {{ event.event_date || "TBD" }},
                  {{ event.event_start_time || "TBD" }} -
                  {{ event.event_end_time || "TBD" }}
                </span>
              </p>
              <p class="where-highlight">
                Venue: <span class="where">{{ event.venue || "TBD" }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import LogoutModal from "@/components/LogoutModal.vue"; // Import LogoutModal
import { fetchEvents } from "@/utils/fetchEvents"; // Import event fetch utility

// Reactive properties
const showLogoutModal = ref(false); // Controls logout modal visibility
const events = ref([]); // Stores fetched events
const filteredEvents = ref([]); // Stores filtered events
const searchQuery = ref(""); // Search input value

// Fetch events from API
const displayEvents = async () => {
  try {
    events.value = await fetchEvents();
    console.log("Fetched events:", events.value); // Debug: Log fetched events
    filteredEvents.value = [...events.value]; // Initialize filtered events
  } catch (error) {
    console.error("Error fetching events:", error); // Debug: Log error
  }
};

// Watch for changes in searchQuery and filter events
watch(searchQuery, (newQuery) => {
  filterEvents(newQuery);
});

// Filter events based on search query
const filterEvents = (query) => {
  const lowerCaseQuery = query.toLowerCase();
  filteredEvents.value = events.value.filter((event) =>
    (event.event_name || "").toLowerCase().includes(lowerCaseQuery)
  );
};

// Fetch events on component mount
onMounted(() => {
  displayEvents();
});
</script>

<style scoped src="../assets/styles/eventspage.css"></style>

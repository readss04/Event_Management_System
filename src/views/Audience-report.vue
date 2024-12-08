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
              <!-- Button to trigger the logout modal -->
        <a @click="showLogoutModal = true">
            <i class="bx bxs-log-out"></i>
            <span class="nav-item">Logout</span>
          </a>

          <!-- Include the LogoutModal component -->
          <LogoutModal
            :show="showLogoutModal"
            @close="showLogoutModal = false"
          />

          </li>
        </ul>
      </div>
    </header>

    <div class="entries-container">
      <div class="entries-desc">
        <h2 class="entries-title">Audience Report</h2>
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

        <!-- Integrate the reusable Audience Report Table -->
        <AudienceReportTable :reports="filteredReports" />
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "@/api/axios";
import AudienceReportTable from "@/components/AudienceReportTable.vue"; // Import the reusable component
import { ref, onMounted } from "vue";
import LogoutModal from "@/components/LogoutModal.vue"; // Import LogoutModal

// Reactive properties
const showLogoutModal = ref(false); // Controls logout modal visibility

export default {
  components: {
    AudienceReportTable, // Register the reusable Audience Report Table component
  },
  data() {
    return {
      reports: [], // Stores all reports fetched from the API
      searchQuery: "", // Search input value
      filteredReports: [], // Filtered results based on search
    };
  },
  created() {
    this.fetchAudience(); // Fetch events when the component is created
  },
  methods: {
    async fetchAudience() {
      try {
        const response = await apiClient.get("/reports");
        if (response.data.status.remarks === "Success") {
          this.reports = response.data.payload || [];
          this.filteredReports = [...this.reports];
        } else {
          console.error("Failed to fetch reports:", response.data.status.message);
        }
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    },
    filterReports() {
      const query = this.searchQuery.toLowerCase();
      this.filteredReports = this.reports.filter((r) =>
        (r.event_name || "").toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped src="../assets/styles/admins/entrieslist.css"></style>
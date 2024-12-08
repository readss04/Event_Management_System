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
          <router-link to="/entries">
            <i class="bx bxs-home-alt-2"></i>
            <span class="nav-item"> List</span>
          </router-link>
        </li>
        <li>
          <router-link to="/report">
            <i class="bx bx-question-mark"></i>
            <span class="nav-item"> Report</span>
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

  <!-- Create Event Form -->
  <div class="container-overall">
    <div class="container">
      <h2 class="edit-title">Create Event</h2>
      <hr />
    </div>

    <div class="edit-audience-container">
      <div class="edit-separation">
        <h2 class="edit-name">Event Name</h2>
        <input type="text" v-model="event_name" required />

        <h2 class="edit-email">Event Date</h2>
        <input type="date" v-model="event_date" required />

        <h2 class="edit-year">Event Start Time</h2>
        <input type="time" v-model="event_start_time" required />

        <h2 class="edit-event">Event End Time</h2>
        <input type="time" v-model="event_end_time" />

        <h2 class="edit-event">Venue</h2>
        <input type="text" v-model="venue" />

        <h2 class="edit-event">Resource Speaker</h2>
        <input type="text" v-model="resource_speaker" />

        <h2 class="edit-event">Image</h2>
        <input type="file" @change="handleImageUpload" />

        <h2 class="edit-event">Description</h2>
        <textarea v-model="description" class="modal-textarea"></textarea>

        <div class="button-container">
          <button @click="saveEvent" class="edit-delete">Save</button>
          <router-link to="/Entries" class="edit-go-back">Go Back</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "@/api/axios";
import { ref, onMounted } from "vue";
import LogoutModal from "@/components/LogoutModal.vue"; // Import LogoutModal

// Reactive properties
const showLogoutModal = ref(false); // Controls logout modal visibility

export default {
  data() {
    return {
      event_name: '',
      event_date: '',
      event_start_time: '',
      event_end_time: '',
      venue: '',
      event_description: '',
      resource_speaker: '',
      event_image: null, // For file upload
    };
  },
  methods: {
    handleImageUpload(event) {
      this.event_image = event.target.files[0]; // Store selected file
    },
    validateInputs() {
      if (!this.event_name || !this.event_date || !this.event_start_time) {
        alert('Please fill out all required fields.');
        return false;
      }
      return true;
    },
    convertDateTime() {
      // Convert date to YYYY-MM-DD format
      const formattedDate = this.event_date;

      // Convert time to 24-hour format if needed (already 24-hour in <input type="time">)
      const formattedStartTime = this.event_start_time;
      const formattedEndTime = this.event_end_time;

      return {
        formattedDate,
        formattedStartTime,
        formattedEndTime,
      };
    },
    async saveEvent() {
  if (!this.validateInputs()) return;

  // Convert date and time
  const { formattedDate, formattedStartTime, formattedEndTime } = this.convertDateTime();

  const formData = new FormData();
  formData.append('event_name', this.event_name);
  formData.append('event_date', formattedDate);
  formData.append('event_start_time', formattedStartTime);
  formData.append('event_end_time', formattedEndTime);
  formData.append('venue', this.venue);
  formData.append('event_description', this.description);
  formData.append('resource_speaker', this.resource_speaker);

  if (this.event_image) {
    formData.append('event_image', this.event_image);
  }

  try {
    const response = await apiClient.post('/addevent', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data.status?.remarks === 'Success') {
      alert('Event successfully created!');
      this.$router.push('/Entries').catch(() =>
        console.error('Navigation to Entrieslist failed.')
      );

      // Emit event to notify entries-list.vue to refresh the event list
      this.$emit('eventCreated', response.data.data); // Emit created event data
    } else {
      alert(`Error: ${response.data.status?.message || 'Unknown error occurred'}`);
    }
  } catch (error) {
    console.error('Error saving event:', error);
    const errorMessage = error.response?.data?.message || 'Failed to save event. Please try again.';
    alert(errorMessage);
  }
},
  },
};
</script>

<style scoped src="../assets/styles/admins/create-event.css"></style>

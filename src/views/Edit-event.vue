<template>
  <div class="light-green"></div>
  <!--Header-->
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
            <i class='bx bxs-home-alt-2'></i>
            <span class="nav-item"> List</span>
          </router-link>
        </li>
        <li>
          <router-link to="/report">
            <i class='bx bx-question-mark'></i>
            <span class="nav-item"> Report</span>
          </router-link>
        </li>
        <li>
          <router-link to="/users">
            <i class='bx bx-child'></i>
            <span class="nav-item">Users</span>
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class='bx bxs-log-out'></i>
            <span class="nav-item">Logout</span>
          </a> 
        </li>
      </ul>
    </div>
  </header>

  <!-- EDIT ATTENDEES SECTION-->
  <div class="container-overall">
    <div class="container">
      <h2 class="edit-title">Edit Event</h2>
      <hr>  
    </div>

    <div class="edit-audience-container">
      <div class="edit-separation">
        <h2 class="edit-name">Event Name </h2>
        <input type="text" v-model="eventName" required>
        
        <h2 class="edit-email">Event Date </h2>
        <input type="date" v-model="eventDate" required>
        
        <h2 class="edit-year">Event Start Time</h2>
        <input type="time" v-model="eventStartTime" required>
        
        <h2 class="edit-event">Event End Time</h2>
        <input type="time" v-model="eventEndTime">
        
        <h2 class="edit-event">Venue </h2>
        <input type="text" v-model="venue">
        
        <h2 class="edit-event">Resource Speaker </h2>
        <input type="text" v-model="resourceSpeaker">
        
        <h2 class="edit-event">Image</h2>
        <input type="file" @change="handleImageUpload">
        
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
import { ref } from 'vue';

export default {
  name: 'CreateEvent',
  data() {
    return {
      eventName: '',
      eventDate: '',
      eventStartTime: '',
      eventEndTime: '',
      venue: '',
      resourceSpeaker: '',
      description: '',
      image: null
    };
  },
  methods: {
    // Handle file upload
    handleImageUpload(event) {
      this.image = event.target.files[0];
    },
    // Save the event and navigate to /Entries
    saveEvent() {
      const { eventName, eventDate, eventStartTime, eventEndTime, venue, resourceSpeaker, description, image } = this;

      if (eventName && eventDate && eventStartTime && eventEndTime && venue && resourceSpeaker && description && image) {
        alert('Event created successfully');
        
        // Redirect to /Entries after event creation
        this.$router.push('/Entries');
        
        // Reset the form
        this.resetForm();
      } else {
        alert('Please fill in all fields');
      }
    },
    // Reset the form data
    resetForm() {
      this.eventName = '';
      this.eventDate = '';
      this.eventStartTime = '';
      this.eventEndTime = '';
      this.venue = '';
      this.resourceSpeaker = '';
      this.description = '';
      this.image = null;
    }
  }
};
</script>

<style scoped src = "../assets/styles/admins/create-event.css">

</style>
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
        <router-link to="/Home">
          <i class='bx bxs-home-alt-2' ></i>
          <span class="nav-item">Home</span>
        </router-link>
  
      </li>
  
      <li>
        <router-link to="/about">
          <i class='bx bx-question-mark' ></i>
          <span class="nav-item">About</span>
        </router-link>
      </li>
  
      <li>
        <router-link to="/events">
          <i class='bx bxs-calendar-event' ></i>
          <span class="nav-item">Events</span>
        </router-link>
  
      </li>
  
      <li>
        <router-link to="/profile">
          <i class='bx bx-child' ></i>
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
            <LogoutModal
              :show="showLogoutModal"
              @close="showLogoutModal = false"
            />
  
      </li>
    </ul>
  </div>
  
  </header>
  
  <!-- UPCOMING EVENTS SECTION -->
  
    <section>
      <div class="events-section">
        <h1 class="events-title">Profile</h1>
        <hr class="events-line">
      </div>
  
      <div class="profile-container">
        <div class="profile-card">
          <div class="separation-img">
            <img class="profile-image" src="../../../../images/sample pic.jpg" alt="profile pic">
          </div>
  
          <div class="separation-desc">
            <h2 class="profile-title">{{ user ? `Greetings, ${user}!` : "Loading..." }}</h2>
            <p class="profile-course">Welcome! 📅 Add events to your calendar and tasks to your to-do list to stay organized!</p>
          </div>
        </div>  
      </div>
    </section>
      <!-- CALENDAR SECTION -->
      
  
    </template>
  
  <script setup>
  import apiClient from "@/api/axios";
  import { ref, onMounted } from "vue";
  import LogoutModal from "@/components/LogoutModal.vue"; // Import LogoutModal
  
  // Reactive properties
  const showLogoutModal = ref(false); // Controls logout modal visibility
  const user=ref("");
  const isLoading=ref(false);
  
  const getProfile = async () => {
    isLoading.value=true;
    try{
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No auth token found.");
        alert("You are not authenticated. Please log in again.");
        return;
      }
  
      const response = await apiClient.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if(response.data.status.remarks !== "Success"){
        console.error(response.data.status.message);
            throw new Error(response.data.status.message);    
      }
      user.value = response.data.payload.tokenData.first_name;
      
    } catch (error) {
      console.error("Error fetching profile:", error);
      alert("Unable to gather profile, Please try again later");
    } finally {
      isLoading.value=false;
    }
  };
  onMounted(() => {
    getProfile();
  });
  
  </script>
  
  <style scoped src ="../assets/styles/profile.css">
    
  </style>
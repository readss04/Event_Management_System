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
       <a href="#">
         <i class='bx bxs-log-out' ></i>
         <span class="nav-item">Logout</span>
       </a>
 
     </li>
   </ul>
 </div>
 
   </header>
 
   <!-- UPCOMING EVENTS SECTION -->
 
     <section>
       <div class="events-section">
         <h1 class="events-title">Registration Form</h1>
         <hr class="events-line">
         
         <div v-if="isLoading" class="loader">Loading events...</div>
       </div>
 
           <div class="registration-container">
             <div class="registration-glasscard">
               <p class="registration-desc">Please fill all of the required input form</p>
             </div>
             
             <div class="test">
             <p v-if="statusMessage" class="error-message">{{ statusMessage }}</p>
              <form class="separation" @submit.prevent="registerEvent">
                <h2 class="glasscard-nameevent">Name of Event</h2>
                <input type="text" class="glasscard-inputtime" name="event_name" v-model="eventName" required placeholder="Type Event name ">
   
                <h2 class="glasscard-starttime">Event Start time</h2>
                <input type="time" class="glasscard-inputtime" name="start_time" v-model="startTime" readonly>

                <h2 class="glasscard-dateevent">Date of event</h2>
                <input class="glasscard-inputdateevent" type="date" name="event_date" v-model="eventDate" readonly>
    
                <h2 class="glasscard-finishtime">Event finish time</h2>
                <input class="glasscard-inputfinishtime" type="time" name="finish_time" v-model="finishTime" readonly>
                
                <input type="submit" value="Register" class="glasscard-button">
               </form>
            </div>
             
          <!-- POPUP MODAL FORM -->
    <span v-if="showModal" class="overlay"></span>
    <div v-if="showModal" class="modal-box">
      <i class='bx bx-check-circle' id="check"></i>
      <h2>Completed</h2>
      <h3>You have successfully registered!</h3>
      <div class="buttons">
        <button @click="showModal = false" class="close-btn">Close</button>
      </div>
    </div>
           </div>
       </section>
 </template>
 
 <script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { fetchEvents } from "@/utils/fetchEvents"; // Adjust the path if needed
import apiClient from "@/api/axios"; // Adjust the path if needed
import { useRouter } from 'vue-router';

// Define reactive variables using ref
const eventName = ref('');
const eventDate = ref('');
const startTime = ref('');
const finishTime = ref('');
const allEvents = ref([]); // Store all fetched events
const showModal = ref(false);
const isLoading = ref(false);
const statusMessage = ref("");

// Define the method to fetch events
const fetchEventsList = async () => {
  isLoading.value = true;
  try {
    allEvents.value = await fetchEvents(); // Fetch the events and update the state
  } catch (error) {
    console.error("Error fetching events:", error);
  } finally {
	  isLoading.value = false;
  }
};

const refreshEvents = async () => {
	try{
		await fetchEventsList();
	} catch (error) {
		console.error("Error fetching events:", error);
		alert("Unable to load events, Please try again later");
	}
};

// Fetch events when the component is mounted
let intervalId;

onMounted(() => {
  fetchEventsList();
  intervalId = setInterval(() => {
	  refreshEvents();
  }, 60000);
});

 onBeforeUnmount(() => {
	 clearInterval(intervalId);
 });
 
// Watch for changes in eventName and auto-fill the event details
let debounceTimeout;
watch(eventName, (newEventName) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
	  autofillEventDetails(newEventName); 
  }, 300);
});

// Method to autofill event details based on the event name
const autofillEventDetails = (newEventName) => {
  const event = allEvents.value.find(e => e.event_name === newEventName); // Match event by name
  if (event) {
    eventDate.value = event.event_date;
    startTime.value = event.event_start_time;
    finishTime.value = event.event_end_time;
    statusMessage.value="";
  } else {
    // Clear fields if no match found
    eventDate.value = startTime.value = finishTime.value = ""; 
    statusMessage.value="No matching event found. Please check the event name.";
  }
};

const registerEvent = async () => {
  const payload = {
    event_name: eventName.value,
  };

  const token = localStorage.getItem("authToken");

  try {
    const response = await apiClient.post("/register", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status.remarks !== "Success") {
	    console.error(response.data.status.message);
        throw new Error(response.data.status.message);    
    }
    showModal.value = true;
    await refreshEvents();
    setTimeout(() => {
	    router.push({ name: 'events' });
    }, 2000);
  } catch (error) {
    console.error("Error during registration:", error.message);
    showModal.value = false;
    throw error;
  }
};
</script>

 <style src = "../assets/styles/registrationform.css"></style>
 
 
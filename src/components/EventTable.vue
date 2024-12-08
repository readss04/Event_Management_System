<script setup>
import { useRouter } from 'vue-router';

defineProps({
  events: Array, // Accept 'events' as a prop
});

// Setup router for navigation
const router = useRouter();

// Function to handle edit action
const handleEdit = (eventId) => {
  router.push({ 
    name: 'Entries-event', // Use the route name defined in your router
    params: { eventId }    // Pass the eventId as a parameter
  });
}
</script>

<template>
  <div class="test10">
    <table class="users-table">
      <thead>
        <tr>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Time</th>
          <th>Date</th>
          <th>Venue</th>
          <th>Resource Speaker</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through the 'events' array -->
        <tr v-for="event in events" :key="event.event_id">
          <td data-label="Id">{{ event.event_id }}</td>
          <td data-label="Event Name">{{ event.event_name }}</td>
          <td data-label="Time">{{ event.event_start_time }} - {{ event.event_end_time }}</td>
          <td data-label="Date">{{ event.event_date }}</td>
          <td data-label="Venue">{{ event.venue }}</td>
          <td data-label="Resource Speaker">{{ event.resource_speaker }}</td>
          <td>
            <span
              :class="{
                'status-pending': event.event_status === 'Pending',
                'status-active': event.event_status === 'Active',
                'status-completed': event.event_status === 'Completed',
              }"
            >
              {{ event.event_status }}
            </span>
          </td>
          <td data-label="Action">
            <button class="entries-edit" @click="handleEdit(event.event_id)">Edit</button>
          </td>
        </tr>
        <!-- Show placeholder if 'events' is empty -->
        <tr v-if="events.length === 0">
          <td colspan="8" class="no-data">No events available</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped src="../assets/styles/admins/entrieslist.css"></style>
<script setup>
import { useRouter } from 'vue-router';

defineProps({
  reports: Array, // Accept 'reports' as a prop
});

</script>

<template>
  <div class="test10">
    <table class="users-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Section</th>
          <th>Event Name</th>
        </tr>
      </thead>
      <tbody>
	    <!-- Show placeholder if 'Audience Report' is empty -->
        <tr v-if="reports.length === 0">
          <td colspan="5" class="no-data">No audience reports</td>
        </tr>
        <!-- Loop through the 'reports' array -->
        <tr v-else v-for="r in reports" :key="r.registration_id">
          <td data-label="#">{{ r.registration_id }}</td>
          <td data-label="Name">{{ r.first_name }} {{ r.last_name }}</td>
          <td data-label="Email">{{ r.email_acc }}</td>
          <td data-label="Section">{{ r.program }} {{ r.year }}{{r.block}}</td>
          <td data-label="Event Name">{{ r.event_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped src="../assets/styles/admins/entrieslist.css"></style>
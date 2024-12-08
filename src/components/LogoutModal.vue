<template>
  <!-- Logout Modal -->
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h3>{{ message }}</h3> <!-- Dynamic message if needed -->
      <div class="modal-actions">
        <button @click="handleLogout" class="yes-button">Yes</button>
        <button @click="cancel" class="no-button">No</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Logout } from '@/composable/logout.js';


// Props to control modal visibility and pass dynamic message
const props = defineProps({
  show: { type: Boolean, required: true }, // Controls modal visibility
  message: { type: String, default: 'Are you sure you want to logout?' } // Optional message
});

const emit = defineEmits(['close']); // Emit event to parent component when modal is closed

const { logout } = Logout(); // Access the logout logic from the composable

// Confirm logout action
const handleLogout = async () => {
  await logout(); // Perform logout logic (API call)
  emit('close'); // Emit event to close the modal
};

// Cancel logout action
const cancel = () => {
  emit('close'); // Emit event   close the modal without logging out
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
}

.modal-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.yes-button, .no-button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.yes-button {
  background-color: #ff5722;
  color: white;
}

.no-button {
  background-color: #ccc;
  color: white;
}

.yes-button:hover, .no-button:hover {
  opacity: 0.8;
}
</style>

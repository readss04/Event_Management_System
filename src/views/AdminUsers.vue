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
          <LogoutModal :show="showLogoutModal" @close="showLogoutModal = false" />
        </li>
      </ul>
    </div>
  </header>

  <!-- USERS SECTION -->
  <section>
    <div class="users-container">
      <h2 class="users-title">Add users</h2>
      <hr class="users-line" />

      <div class="table-container">
        <div class="search-separation">
          <p class="table-title-search">Search: </p>
          <input type="text" placeholder="Search" class="table-search" />
        </div>

        <div class="test10">
          <table class="users-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action Button</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="#">1</td>
                <td data-label="Name">hello</td>
                <td data-label="Username">di ko na kaya</td>
                <td data-label="Action">
                  <button class="entries-edit" @click="confirmAdmin('hello')">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import LogoutModal from "@/components/LogoutModal.vue"; // Import LogoutModal

// Reactive properties
const showLogoutModal = ref(false); // Controls logout modal visibility

// Confirmation logic
function confirmAdmin(name) {
  const confirmMessage = `Are you sure you want to make "${name}" an admin?`;
  if (confirm(confirmMessage)) {
    alert(`${name} is now an admin!`);
    // Add logic here to update the backend or state
  }
}
</script>

<style src="../assets/styles/admins/addusers.css"></style>
    
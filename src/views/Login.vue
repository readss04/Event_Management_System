<template>
  <div class="dark-green"></div>
  <div class="signin-container">
    <div class="sigin-separation">
      <div class="signin-description">
        <h1 class="signin-title">Eventify</h1>
        <p class="sigin-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero sapiente labore.
        </p>
      </div>

      <div class="signin-description1">
        <h2 class="title">Sign In</h2>
        <form @submit.prevent="login">
          <input
            class="signin-studnumber"
            type="email"
            v-model="email_acc"
            placeholder="Email Address"
          />
          <input
            class="signin-password"
            type="password"
            v-model="password"
            placeholder="Password"
          />
          
          <!-- Replaced input tags with button elements -->
          <button type="submit" class="signin-button">Sign In</button>
          <button type="button" @click="goToSignUp" class="signup-button">Sign Up</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
        <div class="sigin-images-align">
          <img class="signin-images" src="../../../../images/gc-logo.png" alt="gc-logo" />
          <img class="signin-images" src="../../../../images/gc-ccs.png" alt="gc-logo-css" />
        </div>
      </div>
    </div>
    <img
      class="sigin-vectorpng"
      src="../../../../public/images/undraw_sign_in_re_o58h.svg"
      alt="image vector"
    />
  </div>
</template>

<script>
import apiClient from "@/api/axios";

export default {
  data() {
    return {
      email_acc: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async login() {
      if (!this.email_acc || !this.password) {
        alert("Email and password are required.");
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(this.email_acc)) {
        alert("Please enter a valid email address.");
        return;
      }

      const loginData = {
        email_acc: this.email_acc,
        password: this.password
      };

      try {
        const response = await apiClient.post("/login", loginData);

        // Handle success
        if (response.data.status.remarks === "Success") {
          const { token, is_admin } = response.data.payload;

          // Save token and user role (admin/user) in localStorage
          localStorage.setItem("authToken", token);
          localStorage.setItem("isAdmin", is_admin); // Store boolean value as is

          // Redirect based on user role
          if (is_admin) {
            this.$router.push("/entries"); // Admin page
          } else {
            this.$router.push("/events"); // User page
          }
        } else {
          this.error = response.data.status.message || "Login failed.";
          alert(this.error);
        }
      } catch (error) {
        this.error = error.response?.data?.message || "An error occurred. Please try again.";
        alert(this.error);
      }
    },

    goToSignUp() {
      this.$router.push("/signup");
    }
  }
};

</script>

<style scoped src="../assets/styles/signinstud.css"></style>

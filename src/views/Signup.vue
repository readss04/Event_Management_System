<template>
  <div class="dark-green"></div>

  <div class="signin-container">
    <div class="sigin-separation">
      <div class="signin-description">
        <h1 class="signin-title">Eventify</h1>
        <p class="sigin-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero sapiente labore.</p>
      </div>

      <div class="form">
        <div class="header">
          <h2>Create an Account</h2>
          <p>sample text basta ganyan</p>
        </div>

        <div class="body">
          <div class="pagination">
            <div class="number active">1</div>
            <div class="bar"></div>
            <div class="number">2</div>
            <div class="bar"></div>
            <div class="number">3</div>
          </div>

          <div class="steps">
            <!-- Step 1: Contact Details -->
            <div class="step">
              <h4>Contact Details</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div class="grids">
                <div class="col">
                  <label for="email">Email</label>
                  <input type="email" v-model="email_acc" id="email" required>
                </div>

                <div class="col">
                  <label for="password">Password</label>
                  <input type="password" v-model="password" id="password" required>
                </div>
              </div>
            </div>

            <!-- Step 2: Other Information -->
            <div class="step">
              <h4>Other Information</h4>
              <p>heelo di ko na kaya</p>
              <div class="grid">
                <div class="col">
                  <label for="first-name">First Name</label>
                  <input type="text" v-model="first_name" id="fname" required>
                </div>

                <div class="col">
                  <label for="last-name">Last Name</label>
                  <input type="text" v-model="last_name" id="lname" required>
                </div>

                <div class="col">
                  <label for="program">Program</label>
                  <input type="text" v-model="program" id="program" required>
                </div>

                <div class="col">
                  <label for="year">Year</label>
                  <input type="text" v-model="year" id="year" required>
                </div>

                <!-- Add Block Input -->
                <div class="col">
                  <label for="block">Block</label>
                  <input type="text" v-model="block" id="block" required>
                </div>
              </div>
            </div>

            <!-- Step 3: Confirmation -->
            <div class="step">
              <div class="confirmation">
                <h2>Create my account</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis doloribus voluptatibus magni! Corporis, fugiat deleniti!</p>
              </div>

              <div>
                <button class="signup-button" @click="signup">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <button class="prev" disabled>Previous</button>
          <button class="next">Next</button>
        </div>
      </div>
    </div>
    <img class="sigin-vectorpng" src="../../../../images/undraw_sign_in_re_o58h.svg" alt="image vector">
  </div>
</template>

<script>
import apiClient from "@/api/axios"; // Adjust this import path if necessary

export default {
  data() {
    return {
      email_acc: "",
      password: "",
      first_name: "",
      last_name: "",
      program: "",
      year: "",
      block: "",
      error: "", // For error messages
    };
  },
  methods: {
    async signup() {
      this.error = "";

      const registerData = {
        email_acc: this.email_acc,
        password: this.password,
        first_name: this.first_name,
        last_name: this.last_name,
        program: this.program,
        year: this.year,
        block: this.block,
      };

      try {
        const response = await apiClient.post("/signup", registerData);

        if (response.data.status.remarks === "Success") {
          alert("Registration successful!");
          this.$router.push("/login");
        } else {
          this.error = response.data.status.message || "An unexpected error occurred.";
          alert("An error occurred: " + this.error);
        }
      } catch (error) {
        console.error("Registration error:", error);
        this.error = error.response?.data?.status.message || "An error occurred while registering.";
        alert("An error occurred: " + this.error);
      }
    },
  },
};
</script>

<style scoped src="../assets/styles/signup.css"></style>

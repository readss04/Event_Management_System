<template>
  
  <header>
    <a href="#home" class="classcode">Eventify</a>
    <i class="bx bx-menu" id="menu-icon"></i>
    <nav class="navbar">
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/events">Events</router-link>
        <router-link to="/profile">Profile</router-link>
    </nav>
</header>

<div id="sidebar" class="sidebar">
    <i class="bx bx-x close-icon" id="close-sidebar"></i>
    <h1 class="classcode">Eventify</h1>
    <router-link to="/home"><i class="bx bx-home"></i> Home</router-link>
    <router-link to="/about"><i class="bx bx-info-circle"></i> About</router-link>
    <router-link to="/events"><i class="bx bx-calendar"></i> Events</router-link>
    <router-link to="/profile"><i class="bx bx-user"></i> Profile</router-link>
</div>



    <!--Ttile Section-->
      <section> 
        <div class="logo-container">
          <div class="logo-title">
            <img class="logo" src="../../../../images/LOGO1.png" alt="sample logo">

            <div class="name-desc">
              <h2 class="name">Eventify</h2>
              <p class="title-description"> Eventify is a tailored event management platform for BSIT students and CCS faculty
                 at Gordon College. It streamlines the organization and participation in academic and extracurricular activities, 
                 such as seminars, workshops, and social events. With features like a dynamic calendar, event creation tools,
                  hassle-free registration, and a to-do list, Eventify offers a user-friendly interface to efficiently plan, 
                  coordinate, and engage in campus activities.</p>
            </div>
          
          </div>
        </div>
      </section>

      <!--Features section-->

      <section class="features-section"> 
        <h1 class="features-title">It's Features</h1>
        <hr class="feature-line">
        <p class="features-desc">Plan, track, and join events with ease. Enjoy dynamic calendars,
           simple registration, and secure, seamless access across all your devices!</p>

          <div class="features-container">
            <div class="features-glasscard">
              <i class='bx bx-edit'></i>
              <h2 class="glasscard-title">Dynamic Event Planner</h2>
              <p class="glasscard-desc">The platform provides centralized tools for event planning and coordination, 
                including a dynamic calendar that tracks all academic seminars, social events, deadlines workshops
                and important dates.
              </p>
            </div>

            <div class="features-glasscard">
              <i class='bx bx-notepad'></i>
              <h2 class="glasscard-title">Easy Event Registration & Discovery</h2>
              <p class="glasscard-desc"> Event registration and discovery simplifies participant registration while 
                offering a user-friendly interface to help students easily find relevant events.
              </p>
            </div>

            <div class="features-glasscard">
              <i class='bx bx-lock-alt'></i>
              <h2 class="glasscard-title">Data Security & One-Time Login </h2>
              <p class="glasscard-desc">Secure data and one time login ensured authorized access to participants 
                data while enabling seamless login across multiple devices with token based authentication.
              </p>
            </div>
          </div>
      </section>

      <!--Testimonials section-->

      <section class="testimonials-section">

        <div class="green-div">
          <div class="margin-container">
            <h1 class="testimonial-title"><span class="span-title">Our</span> Testimonials</h1>
          <hr class="testimonials-line">
  
          <div class="testimonial-container">
            <div class="testimonial-glasscard">
              <i class='bx bxs-quote-alt-left' ></i>
              <p class="testimonial-text">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Ullam pariatur minus voluptate, 
                tempora vero optio dolores ipsam exercitationem!
                 Aperiam, atque.</p>
  
                <hr class="glasscard-line">
                <img class="testimonial-samplepic" src="../../../../images/sample pic.jpg" alt="sample pic">
                <p class="glasscard-name">Sample Name</p>
            </div>

            <div class="testimonial-glasscard">
              <i class='bx bxs-quote-alt-left' ></i>
              <p class="testimonial-text">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Ullam pariatur minus voluptate, 
                tempora vero optio dolores ipsam exercitationem!
                 Aperiam, atque.</p>
  
                <hr class="glasscard-line">
                <img class="testimonial-samplepic" src="../../../../images/sample pic.jpg" alt="sample pic">
                <p class="glasscard-name">Sample Name</p>
            </div>
            
            <div class="testimonial-glasscard">
              <i class='bx bxs-quote-alt-left' ></i>
              <p class="testimonial-text">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Ullam pariatur minus voluptate, 
                tempora vero optio dolores ipsam exercitationem!
                 Aperiam, atque.</p>
  
                <hr class="glasscard-line">
                <img class="testimonial-samplepic" src="../../../../images/sample pic.jpg" alt="sample pic">
                <p class="glasscard-name">Sample Name</p>
            </div>
          </div>

          <p class="testimonial-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius necessitatibus tenetur commodi? Possimus fugiat tempora 
            libero officia, tenetur ipsam eius?</p>
         </div>
        </div>
      </section>

      <!-- SEE EVENTS SECTION -->

      <section>
         <div class="events-bg">
          <div class="events-container">
            <p class="events-desc">Explore and dig deeper to our upcoming events!</p>
            <router-link to="/events" class="events-button">See More!</router-link> <!-- it will direct sa registration form (tentative) -->
          </div>
         </div>
      </section>


      <!-- Footer Section -->
       
      <footer>
        <div class="footer-container">
          <div class="footer-text">
            <div class="footer-about">
                <h2 class="footer-heading">About Us</h2>
              <p class="footer-text">The Eventify web app was created by FlexFam, a team of five BSIT students 
                from Block 2A at Gordon College, for their Fundamentals of Database Systems (FDS) course in
                 2024–2025. The front-end team, Ridley Angeles and Allysa Lingad, collaborated with the back-end team,
                  Aaron Jan Estacio, Jamaica Mae Flores, and Azel Oquendo, the Project Manager.
</p>
            </div>
          
              <div class="footer-links">
                <h2 class="footer-quicklinks">Quick links</h2>
                <router-link to="/home" id="home">Home</router-link>
                <router-link to="/about">About us</router-link>
                <router-link to="/events">Events</router-link>
                <router-link to="/profile">Profile</router-link>
              </div>
          </div>
          <h2 class="footer-eventify">Eventify | FlexFam | Copyright  &copy; 2024</h2>
        </div>
      </footer>
</template>


<style scoped src ="../assets/styles/home.css">

</style>
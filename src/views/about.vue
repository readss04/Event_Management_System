<template>
    <!--Header-->
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

<!--ABOUT US SECTION-->

<section>

  <div class="about-container">
    <div class="about">
    <h2 class="about-title">About us</h2>
    <hr class="about-line">
    <p class="about-desc">Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Nisi aliquid optio est hindi ko na alam kung bakit.</p>
    </div>
  </div>

  <div class="card-body">
        
    <div class="body-container">
        <div class="img-body">
            <img class="img1" src="../../../../images/gc-ccs.png">
        </div>

        <div class="text-container">
            <div class="text-body">
                <h5 class="title-body">Ridley Angeles</h5>
                <p class="texts">
                    <small>BSIT 2A | Division of Labors</small>
                </p>

                <p class="card-description">
                    <small>Greetings! My name is Ridley, and I am a hardworking and determined guy who is not scared to confront challenges.
                         I'm enthusiastic about my work and know how to get things done.</small>
                </p>
            </div>
        </div>
    </div>

    <div class="body-container">
        <div class="img-body">
            <img class="img1" src="../../../../images/gc-ccs.png">
        </div>

        <div class="text-container">
            <div class="text-body">
                <h5 class="title-body">Allysa Lingad</h5>
                <p class="texts">
                    <small>BSIT 2A | Division of Labors</small>
                </p>

                <p class="card-description">
                    <small>My name is Aki, my goal is to live my life to the fullest, embracing challenges and overcoming
                         it with my passion for my work as a push on being the best. 
                    </small>
                </p>
            </div>
        </div>
    </div>

    <div class="body-container">
        <div class="img-body">
            <img class="img1" src="../../../../images/gc-ccs.png">
        </div>

        <div class="text-container">
            <div style="margin-top: 30px;" class="text-body">
                <h5 class="title-body">Azel Oquendo</h5>
                <p class="texts">
                    <small>BSIT 2A | Division of Labors</small>
                </p>

                <p class="card-description">
                    <small>Hello! I am Ceejay and I am a college student with a passion for computer and modern technology.
                         In my free time, I enjoy playing video games and reading mangas. I am always eager to learn,
                          grow, and connect with like-minded individuals.

                    </small>
                </p>
            </div>
        </div>
    </div>

    <div class="body-container">
        <div class="img-body">
            <img class="img1" src="../../../../images/gc-ccs.png">
        </div>

        <div class="text-container">
            <div class="text-body">
                <h5 class="title-body">Jamaica Flores</h5>
                <p class="texts">
                    <small> BSIT 2A | Division of Labors</small>
                </p>

                <p class="card-description">
                    <small>My name is Leo, and I thrive on discovering new opportunities and embracing challenges.
                         With determination as my driving force, I am consistently eager to push boundaries 
                         and achieve excellence.
                    </small>
                </p>
            </div>
        </div>
    </div>

    <div class="body-container">
        <div class="img-body">
            <img class="img1" src="../../../../images/gc-ccs.png">
        </div>

        <div class="text-container">
            <div class="text-body">
                <h5 class="title-body">Aaron Jan Estacio</h5>
                <p class="texts">
                    <small> BSIT 2A | Division of Labors</small>
                </p>

                <p class="card-description">
                    <small>My name is Leo, and I thrive on discovering new opportunities and embracing challenges.
                         With determination as my driving force, I am consistently eager to push boundaries 
                         and achieve excellence.
                    </small>
                </p>
            </div>
        </div>
    </div>
</div>
</section>


      <!-- Footer Section -->
       
    <footer>
        <div class="footer-container">
          <div class="footer-text">
            <div class="footer-about">
                <h2 class="footer-heading">About Us</h2>
                <p class="footer-text">Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Distinctio incidunt nesciunt
               temporibus illum blanditiis exercitationem 
               inventore laborum quidem dolores fugit
                omnis alias aspernatur, ullam nam nisi 
                accusamus reprehenderit optio repudiandae!</p>
            </div>
          
            <div class="footer-links">
                <h2 class="footer-quicklinks">Quick links</h2>
                <a href="home.html" target="_blank" id="home">Home</a>
                <a href="<!-- link through another form -->">About us</a>
                <a href="<!-- link through another form -->" target="_blank">Events</a>
                <a href="<!-- link through another form -->" target="_blank">Profile</a>
            </div>
          </div>
          <h2 class="footer-eventify">Eventify | FlexFam | Copyright  &copy; 2024</h2>
        </div>
    </footer>

</template>

<style scoped src ="../assets/styles/about.css">

</style>
<template>
  <div>
    <!-- hero -->
    <section class="container">
      <div class="row mt-5 g-hero" align-v="center">
        <div class="col-md-8">
          <h1 class="g-hero-heading">Material Maths</h1>
          <div class="d-flex align-items-center g-hero-tag">Status: <span
            style="background-color:#FF3366;"
            class="status-dot"
          ></span>Live Alpha</div>
          <p
            class="g-hero-tag"
          >Material Math brings unlimited mental math practice in a fun, beautiful interface to the web!</p>
          <div class="g-hero-cta-container">
            <b-button
              size="lg"
              class="mr-4 g-btn-cta"
              href="https://material-math.netlify.app"
              target="_blank"
            >
              <fa-icon
                class="mr-2"
                :icon="['fas', 'play']"
              ></fa-icon>Live Demo
            </b-button>
            <b-button
              size="lg"
              variant="outline-primary"
              class="g-btn-cta-alt"
              href="https://github.com/grey-software/material-math"
              target="_blank"
            >
              <fa-icon
                class="mr-2"
                :icon="['fab', 'github']"
              ></fa-icon>Repository
            </b-button>
          </div>
        </div>
        <div class="col-md-4 justify-content-center d-flex mt-3">
          <img
              class="g-hero-img"
              src="@/assets/material-maths.png"
            />
        </div>
      </div>
    </section>
    <!-- Become A Math Person -->
    <section class="pt-5 pb-5" style="background-color:#ddd;" align-v="center">
      <div class="container justify-content-around">
        <div class="text-center">
          <h1 class="g-hero-heading mb-5 darker-heading">Anyone Can Do Maths</h1>
        </div>
        <GreyFeatureCard />
      </div>
    </section>
    <!-- Project Details -->
    <section class="pt-5 pb-5" align-v="center">
      <div class="container">
          <p class="g-hero-tag">Material Math is the spiritual successor to Boltz, a mental math app for Android. Grey software is building off of Boltz's great work, and bringing Boltz's principles of unlimited fun math practice, interleaved concepts, and spaced repition to the web!</p>
        <div class="container">
          <div class="col-lg">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/ceACiAdXSDc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
    </section> 
  </div>
</template>

<script>
import GreyFeatureCard from '@/components/GreyFeatureCard.vue'
export default {
  components : {
    GreyFeatureCard
  }
};
</script>

<style scoped>
.darker-heading {
  color: var(--bg)
}
</style>
<template>
  <div>
    <!-- hero -->
    <section class="container">
      <div class="row mt-5 g-hero" align-v="center">
        <div class="col-md-8">
          <h1 class="g-hero-heading">Material Maths</h1>
          <div class="d-flex align-items-center g-hero-tag">
            Status:
            <span style="background-color:#FF3366;" class="status-dot"></span>Live Alpha
          </div>
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
              <fa-icon class="mr-2" :icon="['fas', 'play']"></fa-icon>Live Demo
            </b-button>
            <b-button
              size="lg"
              variant="outline-primary"
              class="g-btn-cta-alt"
              href="https://github.com/grey-software/material-math"
              target="_blank"
            >
              <fa-icon class="mr-2" :icon="['fab', 'github']"></fa-icon>Repository
            </b-button>
          </div>
        </div>
        <div class="col-md-4 justify-content-center d-flex mt-3">
          <img class="g-hero-img" src="@/assets/material-maths.png" />
        </div>
      </div>
    </section>
    <!-- Become A Math Person -->
    <section class="pt-5 pb-5 lighter-bg" style align-v="center">
      <div class="container justify-content-around">
        <div class="text-center">
          <h1 class="g-hero-heading mb-5 darker-heading">Anyone Can Do Maths</h1>
        </div>
        <div class="row justify-content-around align-items-stretch">
          <GreyFeatureCard
            icon="@/assets/img/projects.svg"
            heading="Tailor Your Practice!"
            text="You get to choose which math concepts you want to strengthen."
          />
          <GreyFeatureCard
            icon="@/assets/img/projects.svg"
            heading="Compete with Friends!"
            text="Set a new highscore and get a chance to be featured in the Leaderboard."
          />
          <GreyFeatureCard
            icon="@/assets/img/projects.svg"
            heading="Track Your Progress!"
            text="Monitor your progress to see where you excel and where you need work."
          />
        </div>
      </div>
    </section>
    <!-- Project Details -->
    <section class="container pt-5 pb-5" align-v="center">
      <h1 class="g-hero-heading mb-5 text-center">Inspiration</h1>
      <p
        class="g-hero-tag"
      >Material Math is the spiritual successor to Boltz, a mental math app for Android. Grey software is building off of Boltz's great work, and bringing Boltz's principles of unlimited fun math practice, interleaved concepts, and spaced repition to the web!</p>
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
    </section>
    <!-- Technologies Used -->
    <section class="pt-5 pb-5 lighter-bg" style align-v="center">
      <div class="container justify-content-around">
        <div class="text-center">
          <h1 class="g-hero-heading mb-5 darker-heading">Technologies Used</h1>
        </div>
        <LogoGrid
          :images="[
          {src:'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', height:'80px', desc:'Vue'},
          {src:'https://image.flaticon.com/icons/svg/919/919832.svg', height:'80px', desc:'TypeScript'},
          {src:'https://image.flaticon.com/icons/svg/919/919828.svg', height:'80px', desc:'JavaScript'},
        ]"
          :txt-black="true"
        />
      </div>
    </section>
    <!-- Road Map -->
    <section class="container pt-5 pb-5" align-v="center">
      <div class="text-center">
        <h1 class="g-hero-heading mb-5">Road Map</h1>
      </div>
      <div class="d-flex flex-column align-items-center">
        <Timeline :timeline-items="timelineItems" :message-when-no-items="messageWhenNoItems" />
      </div>
    </section>
    <!-- Contributors -->
  </div>
</template>

<script>
import GreyFeatureCard from "@/components/GreyFeatureCard.vue";
import LogoGrid from "@/components/LogoGrid.vue";
import Timeline from "@/components/Timeline.vue";
export default {
  components: {
    GreyFeatureCard,
    LogoGrid,
    Timeline
  },
  data: () => ({
    messageWhenNoItems: "There are not items",
    timelineItems: [
      {
        from: new Date(2020, 6),
        title: "Live Alpha",
        description:
          "Designed and created a new UI. Added a module to customise practice session allowing users to practice questions of their choice. Created a more interactive user experience by adding features in practice session including a timer and streak counter."
      }
    ]
  })
};
</script>

<style scoped>
.lighter-bg {
  background-color: var(--border-color);
}
.darker-heading {
  color: var(--bg);
}
</style>
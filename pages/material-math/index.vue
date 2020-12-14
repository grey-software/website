<template>
  <div>
    <!-- hero -->
    <section class="container">
      <div class="row mt-5 g-hero" align-v="center">
        <div class="col-md-8">
          <h1 class="g-hero-heading">Material Math</h1>
          <div class="flex items-center g-hero-tag">
            Status:
            <span style="background-color: #f36;" class="status-dot"></span>In
            Development
          </div>
          <p class="g-hero-tag">
            Material Math brings unlimited mental math practice in a fun,
            beautiful interface to the web!
          </p>
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
              <fa-icon class="mr-2" :icon="['fab', 'github']"></fa-icon
              >Repository
            </b-button>
          </div>
        </div>
        <div class="col-md-4 justify-content-center flex mt-3">
          <img class="g-hero-img" src="@/assets/material-math.png" />
        </div>
      </div>
    </section>
    <!-- Features -->
    <section class="pt-5 pb-5" style align-v="center">
      <div class="container justify-content-around">
        <div class="text-center">
          <h1 class="g-section-heading mb-5">Math is for everybody!</h1>
        </div>
        <div class="row justify-content-around items-stretch">
          <GreyFeatureCard
            icon="/projects/material-math/concepts.svg"
            title="Tailor Your Practice!"
            text="Choose which concepts you'd like to practice!"
          />
          <GreyFeatureCard
            icon="/projects/material-math/leaderboard.svg"
            title="Compete Globally!"
            text="Aim high and compete with users around the world!"
          />
          <GreyFeatureCard
            icon="/projects/material-math/progress.svg"
            title="Track Your Progress!"
            text="Monitor your progress to see where you excel and where you need work."
          />
        </div>
      </div>
    </section>
    <!-- Project Details -->
    <section class="container pt-5 pb-5" align-v="center">
      <h1 class="g-section-heading mb-5 text-center">Inspiration</h1>
      <div class="row items-center">
        <div class="column col-md-6 col-12">
          <p class="g-hero-tag">
            Material Math is the spiritual successor to Boltz, a mental math app
            for Android. Grey software is building off of Boltz's great work,
            and bringing Boltz's principles of unlimited fun math practice,
            interleaved concepts, and spaced repition to the web!
          </p>
        </div>
        <div class="column col-md-6 col-12">
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
      </div>
    </section>
    <!-- Technologies Used -->
    <section class="pt-5 pb-5" style align-v="center">
      <div class="container justify-content-around">
        <div class="text-center">
          <h1 class="g-section-heading mb-5">Built with</h1>
        </div>
        <LogoGrid :logos="logos" />
      </div>
    </section>
    <!-- Road Map -->
    <!-- <section
      class="container pt-5 pb-5"
      align-v="center"
    >
      <div class="text-center">
        <h1 class="g-hero-heading mb-5">Road Map</h1>
      </div>
      <div class="flex flex-column items-center">
        <Timeline
          :timeline-items="timelineItems"
          :message-when-no-items="messageWhenNoItems"
        />
      </div>
    </section>-->
    <!-- Contributors -->
    <!-- Get In Touch -->
  </div>
</template>

<script>
export default {
  data: () => ({
    messageWhenNoItems: 'There are not items',
    logos: [
      'devicon-html5-plain-wordmark',
      'devicon-css3-plain-wordmark',
      'devicon-vuejs-plain',
      'devicon-javascript-plain',
      'devicon-typescript-plain',
    ],
    timelineItems: [
      {
        from: new Date(2020, 6),
        title: 'Live Alpha',
        description:
          'Designed and created a new UI. Added a module to customise practice session allowing users to practice questions of their choice. Created a more interactive user experience by adding features in practice session including a timer and streak counter.',
      },
    ],
  }),
}
</script>

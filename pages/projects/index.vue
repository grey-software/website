<template>
  <div class="pb-5">
    <div class="container g-hero mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="g-hero-heading">Our Projects</h1>
          <p class="g-hero-tag">We're improving the open source ecosystem by creating useful, creative, and free software with the world's latest technology.</p>
          <a
            href="https://www.github.com/grey-software"
            target="_blank"
          >
            <b-button
              size="lg"
              class="g-btn-cta-alt"
            >
              <fa-icon
                class="mr-2"
                :icon="['fab', 'github']"
              ></fa-icon>Github
            </b-button>
          </a>
        </div>
        <div class="col-lg-4 mt-3">
          <img
            class="g-hero-img"
            style="float:right;height:263px;"
            src="@/assets/img/projects.svg"
          />

        </div>
      </div>
    </div>
    <div class="container px-0 pb-5">
      <div class="row justify-content-space-between align-items-center">
        <div class="col-lg mb-5">
          <h1 class="g-section-heading">Toonin</h1>
          <div class="d-flex align-items-center g-section-info">Status: <span
              style="background-color:#ffcc00;"
              class="status-dot"
            ></span>Live Beta</div>
          <p class="g-section-body mt-4">Technology that allows you to tune in to your friends and family in realtime using peer to peer sharing.</p>
          <div class="d-flex mt-5">
            <b-button
              size="lg"
              class="g-btn mr-4"
              target="_blank"
              href="https://www.toonin.ml"
            >
              <fa-icon
                class="mr-2"
                :icon="['fas', 'play']"
              ></fa-icon>Live Demo
            </b-button>
            <b-button
              size="lg"
              class="g-btn-alt"
              target="_blank"
              href="https://github.com/grey-software/material-math"
            >
              <fa-icon
                class="mr-2"
                :icon="['fab', 'github']"
              ></fa-icon>Repository
            </b-button>
          </div>
        </div>
        <div class="col-lg">
          <iframe
            class="project-promo-video"
            src="https://www.youtube.com/embed/ImxxRMPVHzs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="container px-0 mt-5">
      <div class="row justify-content-space-between align-items-center">

        <div class="col-lg mb-5">
          <h1 class="g-section-heading">Material Math</h1>
          <div class="d-flex align-items-center g-section-info">Status: <span
              style="background-color:#FF3366;"
              class="status-dot"
            ></span>Live Alpha</div>
          <p class="g-section-body mt-4">The spiritial successor to Boltz on Android, Material Math brings unlimited mental math practice in a fun, beautiful interface to the web!</p>
          <div class="d-flex mt-5">
            <b-button
              size="lg"
              class="g-btn mr-4"
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
              class="g-btn-alt"
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
        <div class="col-lg">
          <iframe
            class="project-promo-video"
            src="https://www.youtube.com/embed/ceACiAdXSDc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GreyHero from "@/components/GreyHero";
export default {
  components: {
    GreyHero,
  },
  data () {
    return {
      projects: [
        {
          name: "Toonin",
          desc:
            "Toonin allows you to share or stream audio and video over the web in real time.",
          githubLink: "https://github.com/grey-software/toonin",
          icon: "/projects/toonin/logo.svg",
          link: "/projects/toonin",
          starCount: 54
        },
        {
          name: "Material Math",
          desc:
            "Material Math allows you to practice math problems in a fun, beautiful, material experience!",
          githubLink: "https://github.com/grey-software/material-math",
          icon: "/projects/material-math/logo.svg",
          link: "/projects/material-math",
          starCount: 3
        },
        {
          name: "Open Mind",
          desc:
            "Open Mind allows you to organize your learning and research using mind maps!",
          icon: "/projects/open-mind/logo.svg",
          githubLink: "https://github.com/grey-software/openmind",
          link: "projects/open-mind",
          starCount: 4
        },
        {
          name: "LinkedInFocus",
          desc:
            "LinkedInFocus allows you to hide the news feed and news panel on LinkedIn so you can focus on your career!",
          icon: "/projects/linkedin-focus/logo.png",
          githubLink: "https://github.com/grey-software/LinkedIn-InFocus",
          link: "/projects/linkedin-focus",
          starCount: 1
        }
      ]
    };
  }
};
</script>

<style>
.status-dot {
  height: 28px;
  width: 28px;
  border-radius: 50%;
  display: inline-block;
  transition: opacity 0.2s ease-out;
  margin: 0px 8px 0px 12px;
}
.status-dot:hover {
  opacity: 0.8;
}

@media screen and (min-width: 768px) {
  .project-promo-video {
    width: 560px;
    height: 315px;
  }
}

.project-promo-video {
  width: 100%;
  height: auto;
}
</style>
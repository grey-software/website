<template>
  <div class="pb-5">
    <div class="container g-hero mt-5">
      <div
        class="row"
        align-v="center"
      >
        <div
          class="col"
          sm="12"
          md="6"
        >
          <h1 class="g-hero-heading">Our Projects</h1>
          <p class="g-hero-tag">We're improving the open source ecosystem by creating useful, creative, and free software with the world's latest technology.</p>
          <a href="https://www.github.com/grey-software" target="_blank">
            <b-button
              size="lg"
              variant="outline-primary"
              class="g-btn-cta-alt"
            ><fa-icon class="mr-2" :icon="['fab', 'github']"></fa-icon>Github</b-button>
          </a>
        </div>
        <div
          class="col"
          sm="12"
          md="8"
        >
          <img
            class="g-hero-img"
            style="float:right;"
            src="@/assets/img/projects.svg"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GreyHero from "@/components/GreyHero";
import ProjectCard from "@/components/ProjectCard";
export default {
  components: {
    GreyHero,
    ProjectCard
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
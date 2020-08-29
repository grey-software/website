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
          </a>
        </div>
        <div class="col-lg-4 d-flex flex-column mt-3">
          <img
            class="g-hero-img"
            src="@/assets/img/projects.svg"
          />

        </div>
      </div>

      <section class="container px-0">
        <div class="project-cards-container">

          <project-card
            v-for="(project,id) in projects"
            :key="id"
            :project="project"
          />
        </div>

      </section>
    </div>

  </div>
</template>

<script>
import ProjectCard from "../../components/ProjectCard.vue";
export default {
  data () {
    return {
      projects: [
        {
          name: "Toonin",
          desc:
            "Share or stream audio and video over the web in real time.",
          repo: "https://github.com/grey-software/toonin",
          demo: "https://www.toonin.ml",
          logo: "/projects/toonin/logo.svg",
          link: "/projects/toonin",
          status: "Live Beta"
        },
        {
          name: "Material Math",
          desc:
            "Practice math problems in a fun, beautiful, material experience!",
          repo: "https://github.com/grey-software/material-math",
          demo: "https://material-math.grey.software",
          logo: "/projects/material-math/logo.png",
          link: "/projects/material-math",
          status: "Live Alpha",
        },
        {
          name: "Twitter Focus",
          desc:
            "Hide the feed and What's Happening panel on Twitter so you can focus and control your experience!",
          logo: "/projects/twitter-focus/logo.png",
          repo: "https://github.com/grey-software/Twitter-Focus",
          demo: "https://chrome.google.com/webstore/detail/twitter-focus/kmdpomipbibobgdgfeidajmnlecloeml?hl=en&authuser=2",
          link: "/projects/twitter-focus",
          status: "Live Beta"
        }, {
          name: "LinkedIn Focus",
          desc:
            "Hide the news feed and news panel on LinkedIn so you can focus on your career!",
          logo: "/projects/linkedin-focus/logo.png",
          repo: "https://github.com/grey-software/LinkedIn-Focus",
          demo: "https://chrome.google.com/webstore/detail/linkedin-focus/cmafljjdkloacahjddlpaognhjpacdff?hl=en&authuser=2",
          link: "/projects/linkedin-focus",
          status: "Live Beta"
        },
      ],
    };
  },
  components: {
    ProjectCard,
  },
};
</script>

<style>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.project-cards-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
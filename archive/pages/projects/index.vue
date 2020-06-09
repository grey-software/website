<template>
  <div>
    <section class="g-hero-container">

      <div class="mt-10 w-full md:w-3/5 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="text-left">
          <h2 class="g-hero-heading">
            Our Projects
          </h2>
          <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            We're on a mission to improve the open source ecosystem by creating useful, creative apps and developer tools with the world's latest technology. </p>

        </div>

      </div>
      <div class="w-full md:w-2/5 py-6">
        <img
          style="float:right;"
          class="w-full z-50"
          src="@/assets/img/projects.svg"
        >
      </div>
    </section>

    <section class="py-8 px-8 my-8">
      <div
        v-for="project in projects"
        :key="project"
        class="mx-4 py-8"
      >
        <ProjectCard :project="project" />
      </div>
    </section>

  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard"

export default {
  components: {
    ProjectCard,
  },
  data () {
    return {
      projects: [
        {
          name: 'Toonin',
          desc: "Toonin allows you to share or stream audio and video over the web in real time.",
          githubPath: "grey-software/toonin",
          icon: "/projects/toonin/logo.svg",
          link: "/projects/toonin",
          starCount: 54,
          contributors: [
            "https://avatars0.githubusercontent.com/u/19757203?v=4",
            "https://avatars2.githubusercontent.com/u/22705846?v=4",
            "https://avatars0.githubusercontent.com/u/46510358?v=4",
            "https://avatars0.githubusercontent.com/u/29740020?v=4",
          ]
        },
        {
          name: 'Material Math',
          desc: "Material Math allows you to practice math problems in a fun, beautiful, material experience!",
          githubPath: "grey-software/toonin",
          icon: "/projects/material-math/logo.svg",
          link: "/projects/material-math",
          starCount: 3,
          contributors: [
            "https://avatars0.githubusercontent.com/u/19757203?v=4",
            "https://avatars2.githubusercontent.com/u/48028572?s=460&u=67adece51962e2e4608915bdc0784c4389e31eb7&v=4"
          ]
        },
        {
          name: 'Open Mind',
          desc: "Open Mind allows you to organize your learning and research using mind maps!",
          githubPath: "grey-software/openmind",
          icon: "/projects/open-mind/logo.svg",
          link: "https://github.com/grey-software/openmind",
          starCount: 4,
          contributors: [
            "https://avatars0.githubusercontent.com/u/19757203?v=4",
            "https://avatars1.githubusercontent.com/u/6189367?v=4"]
        },
        {
          name: 'LinkedInFocus',
          desc: "LinkedInFocus allows yout to hide the Linkedin news-feed and news-panel so you can focus!",
          githubPath: "grey-software/toonin",
          icon: "/projects/linkedin-focus/logo.png",
          link: "https://github.com/grey-software/LinkedIn-InFocus",
          starCount: 1,
          contributors: [
            "https://avatars0.githubusercontent.com/u/19757203?v=4",
          ]
        }

      ]
    }
  },
}
</script>

<style>
</style>
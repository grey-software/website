<template>
  <b-container class="mt-5">
    <grey-hero></grey-hero>
    <div>
      <div v-for="project in projects" :key="project.name">
        <ProjectCard :project="project" />
      </div>
    </div>
  </b-container>
</template>

<script>
import GreyHero from "@/components/GreyHero";
import ProjectCard from "@/components/ProjectCard";
export default {
  components: {
    GreyHero,
    ProjectCard
  },
  data() {
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
          githubLink: "https://github.com/grey-software/toonin",
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
            "LinkedInFocus allows you to hide the Linkedin news-feed and news-panel so you can focus!",
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
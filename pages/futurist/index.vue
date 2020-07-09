<template>
  <div class="pb-5">
    <!-- Hero -->
    <section id="f-hero" class="f-section">
      <futurist-hero />
      <FuturistAbout />
    </section>
    <section id="f-projects" class="f-section">
      <div v-if="projects" class="flex row flex-wrap">
        <div v-for="project in projects" :key="project.title">
          <project-card :project="project" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FuturistHero from "@/components/FuturistHero";
import FuturistAbout from "@/components/FuturistAbout";
import ProjectCard from "@/components/ProjectCard";
import gql from "graphql-tag";
// import ProjectsQuery from "@/apollo/queries/projects/Projects.gql";

export default {
  layout: "futurist",
  components: {
    FuturistHero,
    FuturistAbout,
    ProjectCard
  },
  apollo: {
    projects: {
      query: gql`
        query Projects {
          projects {
            title,
            desc,
            image {
              url
            },
            link,
            discord
          }
        }
      `
    }
  }
};
</script>

<style scoped>
* {
  background-color: #050C17;
}
</style>

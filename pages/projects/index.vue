<template>
  <div class="pb-5">
    <CenteredHero
      title="Our Projects"
      desc="We're improving the open source ecosystem by creating useful, creative, and free software with the world's latest technology."
      icon="/icons/projects.svg"
    />
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

  <!-- </div> -->
</template>

<script>
import ProjectCard from "../../components/ProjectCard.vue";
export default {
  async asyncData ({ $content, params, error }) {
    const projectsDataStore = await $content('projects').fetch()
    const projects = projectsDataStore.projects
    return { projects }
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
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
          v-for="(project, id) in projects"
          :key="id"
          :project="project"
        />
      </div>
    </section>
    <section class="container px-0">
      <h1 class="g-section-heading m-2 mb-5">External Projects</h1>
      <div class="project-cards-container">
        <project-card
          v-for="(project, id) in externalProjects"
          :key="id"
          :project="project"
        />
      </div>
    </section>
    <section class="container px-0">
      <h1 class="g-section-heading mb-5">Student Projects</h1>
      <div class="project-cards-container">
        <project-card
          v-for="(project, id) in studentProjects"
          :key="id"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '../../components/ProjectCard.vue'
export default {
  async asyncData({$content, params, error}) {
    const projectsDataStore = await $content('projects').fetch()
    const projects = projectsDataStore.projects
    const externalProjects = projectsDataStore.external
    const studentProjects = projectsDataStore.student
    return {projects, externalProjects, studentProjects}
  },
  components: {
    ProjectCard,
  },
}
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

/*
.g-section-heading {
  margin: 0 auto;
  margin-bottom: 4rem;
} */

@media screen and (max-width: 768px) {
  .g-section-heading {
    text-align: center;
  }
}
</style>

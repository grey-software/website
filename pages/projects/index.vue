<template>
  <div class="t-container t-mx-auto t-px-6 t-pb-5">
    <CenteredHero
      title="Our Projects"
      desc="We're improving the open source ecosystem by creating useful, creative, and free software with the world's latest technology. We develop our projects in the open, and invite contributors from all over the world to help shape the future of our products. As a company, one of our strategies to provide sustainable education is to develop revenue-generating applications that curious learners can help contribute to."
      icon="/icons/projects.svg"
    />
    <section id="projects" class="container px-0">
      <div class="project-cards-container">
        <project-card
          v-for="(project, id) in activeProjects"
          :key="id"
          :project="project"
        />
      </div>
    </section>
    <section class="container px-0">
      <h1 class="g-section-heading m-2 mb-5">Standby Projects</h1>
      <div class="project-cards-container">
        <project-card
          v-for="(project, id) in standbyProjects"
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
      <h1 class="g-section-heading mb-5">Project Concepts</h1>
      <div class="project-cards-container">
        <project-card
          v-for="(project, id) in conceptProjects"
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
    const activeProjects = projectsDataStore.active
    const standbyProjects = projectsDataStore.standby
    const externalProjects = projectsDataStore.external
    const conceptProjects = projectsDataStore.concept
    return {activeProjects, standbyProjects, externalProjects, conceptProjects}
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

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
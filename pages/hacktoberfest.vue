<template>
  <div class="pb-5">
    <CenteredHero
      title="Hacktoberfest"
      desc="Contribute to our Open Source Software and win a limited edition Hacktoberfest T-Shirt from DigitalOcean or plant a tree with tree-nation.com"
      icon="/icons/hacktoberfest.svg"
    />

    <section id="projects" class="container px-0">
      <div class="project-cards-container">
        <hacktoberfest-card
          v-for="(project, id) in projects"
          :key="id"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script>
import HacktoberfestCard from '@/components/HacktoberfestCard.vue'
export default {
  async asyncData({$content, params, error}) {
    const projectsDataStore = await $content('hacktoberfest-projects').fetch()
    const projects = projectsDataStore.projects
    return {projects}
  },
  components: {
    HacktoberfestCard,
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
</style>

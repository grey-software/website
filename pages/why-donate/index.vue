<template>
  <div class="pb-5">
    <CenteredHero
      title="Why Donate"
      desc="Grey Software is a not-for-profit "
      icon="/icons/donate.svg"
    />
    <section class="container px-0">
      <Rc1X2
        title="To help R&D Grey Software's Apps"
        desc="We need engineering hours to look into advanced functionality like having Twitter Focus block the news feed on mobile, and allowing Toonin users to call each other while streaming. Your donations help us hire engineers "
        imgSrc="/icons/projects.svg"
        link="https://www.grey.software/projects"
      />
      <Rc1X2
        title="To pay for our org's costs"
        desc="We report all our costs transparently on the open collective platform, so you can see how your donation dollars are being spent!"
        imgSrc="https://avatars0.githubusercontent.com/u/13403593?v=4"
        link="https://opencollective.com/grey-software"
        reverse="true"
      />
      <Rc1X2
        title="To provide financial aid"
        desc="We report all our costs transparently on the open collective platform, so you can see how your donation dollars are being spent!"
        imgSrc="/icons/financial-aid.svg"
      />

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
</style>
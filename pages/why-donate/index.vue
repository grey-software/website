<template>
  <div class="pb-5">
    <CenteredHero
      title="Why Donate?"
      icon="/icons/donate.svg"
    />
    <section class="container px-0">
      <Rc1X2
        title="To help R&D Grey Software's Apps"
        desc="We need engineering hours to look into advanced functionality like having Twitter Focus block the news feed on mobile, and allowing Toonin users to call each other while streaming. Your donations help us hire engineers "
        imgSrc="/icons/projects.svg"
        label="Our Apps"
        link="https://www.grey.software/projects"
      />
      <Rc1X2
        title="To pay for our org's costs"
        desc="We report all our costs transparently on the open collective platform, so you can see how your donation dollars are being spent!"
        imgSrc="https://avatars0.githubusercontent.com/u/13403593?v=4"
        link="https://opencollective.com/grey-software/expenses"
        reverse="true"
        label="Our Costs"
      />
      <Rc1X2
        title="To hire staff"
        desc="We aim to hire full-time software engineers and teachers to staff our creation and education teams."
        imgSrc="/apprentice/mentor.svg"
      />
      
      <Rc1X2
        title="To provide financial aid"
        desc="Many of our students are university undergraduates who are looking for paid internships to help them pay off their student loan debt!"
        imgSrc="/icons/financial-aid.svg"
        reverse="true"
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
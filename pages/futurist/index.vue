<template>
  <div class="pb-5">
    <!-- Hero -->
    <section id="f-hero" class="f-section">
      <futurist-hero />
      <FuturistAbout />
      <FuturistTeam/>
<!--      <b-carousel-->
<!--        id="carousel-1"-->
<!--        v-model="slide"-->
<!--        :interval="1"-->
<!--        controls-->
<!--        indicators-->
<!--        style="text-shadow: 1px 1px 2px #333;"-->
<!--        @sliding-start="onSlideStart"-->
<!--        @sliding-end="onSlideEnd"-->
<!--      >-->
<!--        <b-carousel-slide>-->
<!--          <b-row cols="2">-->
<!--            <b-col>Column</b-col>-->
<!--            <b-col>Column</b-col>-->
<!--            <b-col>Column</b-col>-->
<!--            <b-col>Column</b-col>-->
<!--          </b-row>-->
<!--        </b-carousel-slide>-->

<!--        <b-carousel-slide>......</b-carousel-slide>-->

<!--      </b-carousel>-->


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
import TeamCard from "@/components/TeamCard";
import FuturistTeam from "@/components/FuturistTeam";
import ProjectCard from "@/components/ProjectCard";
import gql from "graphql-tag";
// import ProjectsQuery from "@/apollo/queries/projects/Projects.gql";

export default {
  layout: "futurist",
  components: {
    FuturistHero,
    FuturistAbout,
    TeamCard,
    FuturistTeam
    // ProjectCard
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
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

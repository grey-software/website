<template>
  <b-container>
    <grey-header></grey-header>
    <nuxt />
  </b-container>
</template>

<script>
import GreyHeader from "@/components/GreyHeader"
import ProjectCard from "@/components/ProjectCard"
export default {
  components: {
    GreyHeader,
    ProjectCard
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700 &family=Montserrat:wght@400;500&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --color-text: #8b9496;
  --color-text-dark: #343434;
  --bg: #ffffff;
  --border-color: #ddd;
  --color-gold: #b29a66;
  --color-gold-light: rgba(178, 154, 102, 0.85);
  --font-heading: "Montserrat", sans-serif;
  --font-body: "Lato", sans-serif;
}

body {
  font-family: var(--font-body) !important;
  background-color: var(--bg);
  color: var(--color-text);
  transition: background-color 0.3s;
}

.g-hero-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  font-size: 2.75rem;
  letter-spacing: -0.025em;
}

.g-hero-tag {
  font-size: 1.5rem;
  color: var(--color-text);
}

.g-hero-img {
  height: 236px;
}

.g-btn-cta {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
  outline: none;
}

.g-btn-cta:active {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
}

.g-btn-cta:hover {
  color: var(--color-gold-light) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
}


.g-btn-cta-alt {
  color: var(--color-gold) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
  outline: none;
}

.g-btn-cta-alt:hover {
  background-color: var(--color-gold) !important;
  color: #ffffff !important;
}
</style>

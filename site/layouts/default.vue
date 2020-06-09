<template>
  <b-container>
    <grey-header></grey-header>
    <nuxt />
  </b-container>
</template>

<script>
import GreyHeader from "@/components/GreyHeader"
export default {
  components: {
    GreyHeader,
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
  color: var(--color);
  transition: background-color 0.3s;
}
</style>

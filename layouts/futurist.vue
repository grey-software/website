<template>
  <div>
    <futurist-nav-bar></futurist-nav-bar>
    <nuxt />
  </div>
</template>

<script>
import FuturistNavBar from "@/components/FuturistNavBar"

export default {
  components: {
    FuturistNavBar,
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700 &family=Montserrat:wght@400;500&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
  background-color: #050C17;
}

a {
  text-decoration: none;
  color: unset;
}

a:hover {
  text-decoration: none;
  color: unset;
}

:root {
  --color-text: #fcfcfc;
  --color-text-dark: #fcfcfc;
  --font-heading: "Montserrat", sans-serif;
  --font-body: "Nunito Sans", sans-serif;
}


</style>

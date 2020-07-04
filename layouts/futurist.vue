<template>
  <div>
    <futurist-nav-bar></futurist-nav-bar>
    <nuxt />
  </div>
</template>

<script>
import FuturistNavBar from "@/components/FuturistNavBar"

export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700 &family=Montserrat:wght@400;500&display=swap");

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
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
  --bg: #1f1f1f;
  --border-color: #ddd;
  --color-gold: #b29a66;
  --color-gold-light: rgba(178, 154, 102, 0.8);
  --font-heading: "Montserrat", sans-serif;
  --font-body: "Nunito Sans", sans-serif;
}
</style>
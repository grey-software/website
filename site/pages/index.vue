<template>
  <div class="mt-5">
    <grey-hero />
    <b-container class="mt-5">
      <b-row align-h="center">
        <b-col cols="4">
          <h1 class="g-hero-heading">What we do</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" md="6">
          <b-row align-h="center">
            <b-col>
          <img class="img-what-we-do" src="@/assets/img/apps.svg" />
          <h3
            class="text-what-we-do"
          >We create free apps and tools to improve the open source software ecosystem.</h3>
        </b-col>
        </b-row>
        </b-col>
        <b-col sm="12" md="6">
          <img class="img-what-we-do" src="@/assets/img/learn.svg" />

          <h3
            class="text-what-we-do"
          >We help students learn software engineering with structure and guidance from a mentor.</h3>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-5">
      <b-row align-h="center">
        <b-col cols="4">
          <h1 class="g-hero-heading">How it works</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GreyHero from "@/components/GreyHero";
export default {
  components: {
    GreyHero
  }
};
</script>

<style>
.img-what-we-do {
  height: 309px;
}

.text-what-we-do {
  font-size: 1.2rem;
  text-align: center;
}
</style>
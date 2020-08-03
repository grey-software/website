<template>
  <div>
    <section class="container">
      <div class="row mt-5 g-hero" align-v="center">
        <div class="col-md-8">
          <h1 class="g-hero-heading">Apprentice Program</h1>
          <p
            class="g-hero-tag"
          >The apprentice program offers you the opportunity to learn software development by contributing to open source apps as an engineer, designer, or product manager with guidance and structure from a mentor.</p>
        </div>
        <div class="col-md-4 justify-content-center d-flex mt-3">
          <img class="g-hero-img" src="@/assets/material-math.png" />
        </div>
      </div>
    </section>
    
    <section class="container">
      <OneCrossTwo link="/" reverse="true" title="Contribute to software that  makes it to production." desc="You'll work on Open Source projects that  companies actually depend on, not a side project that never sees the light of day." imgSrc="/projects/toonin/logo.svg" />
      <OneCrossTwo title="Contribute to software that  makes it to production." desc="You'll work on Open Source projects that  companies actually depend on, not a side project that never sees the light of day." imgSrc="/projects/toonin/logo.svg" />
    </section>
  </div>
</template>

<script>
import OneCrossTwo from '@/components/OneCrossTwo.vue'

export default {
  components: {
    OneCrossTwo
  }
};
</script>

<style>
</style>
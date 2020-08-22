<template>
  <div class="pb-5">
    <!-- Hero Section -->
    <div class="container g-hero mt-5">
      <div class="row">
        <div class="col-md-8">
          <h1 class="g-hero-heading">
            Apprentice Program
          <br />
          </h1>
          <p
            class="g-hero-tag"
          >The apprentice program offers you the opportunity to learn software development by contributing to open source apps as an engineer, designer, or product manager with guidance and structure from a mentor</p>
        </div>

        <div class="col-md-4">
          <img class="g-hero-img" src="@/assets/icons/apprentice.svg" />
        </div>
      </div>
    </div>
    <div class="container">
      <h1 class="g-hero-heading">
        The Problem
      </h1>
      <Rc1X3 :children="children"></Rc1X3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      children : [
        {
          desc: "Formal education doesn't to prepare you for the world's software ecosystem.",
          icon: "../assets/icons/educate.svg"
        },
        {
          desc: "Students crave real-world software development experience, because it plays an important role when they’re recruited into the modern tech economy.",
          icon: "../assets/icons/educate.svg"
        },
        {
          desc: "They also need guidance and structure as they gain this experience.",
          icon: "../assets/icons/educate.svg"
        }
      ]
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="container g-hero mt-5">
    <div class="row d-flex justify-center">
      <img src="../assets/logo.png" alt="Grey Software's Icon" class="grey-icon" />
    </div>
    <div class="mt-4 mt-lg-5 row d-flex flex-column align-items-center">
      <div class="col-lg-10 text-center">
        <h1 class="g-hero-heading">{{ title }}</h1>
        <p class="g-hero-tag">{{ desc }}</p>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <b-button v-if="btn1 && link1" :href="link1" size="lg" class="mr-4 g-btn-cta mb-3">{{ btn1 }}</b-button>
      <b-button v-if="btn2 && link1" :href="link2" size="lg" variant="outline-primary" class="g-btn-cta-alt mb-3">{{ btn2 }}</b-button>
    </div>
    <div class="row d-flex justify-center">
      <img src="/downarrow.png" alt="Down Arrow" class="arrow-icon" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    desc: String,
    title: String,
    link1: String,
    btn1: String,
    btn2: String,
    link2: String,
  },
};
</script>

<style scoped>
.grey-icon {
  border-radius: 50%;
  width: 125px;
}
.arrow-icon {
  width: 75px;
  position: absolute;
  bottom: 50px;
}
</style>
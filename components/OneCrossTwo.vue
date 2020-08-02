<template>
  <div>
    <div v-if="! reverse" class="row">
      <div class="col-md-8 col-12">
        <h1 class="g-hero-heading">{{ title }}</h1>
        <p class="g-hero-tag">{{ desc }}</p>
      </div>
      <div class="col-md-4 col-12">
        <img class="g-hero-img" :src="imgSrc" />
      </div>
    </div>
    <div v-else class="row">
      <div class="col-md-4 col-12">
        <img class="g-hero-img" :src="imgSrc" />
      </div>
      <div class="col-md-8 col-12 text-right">
        <h1 class="g-hero-heading">{{ title }}</h1>
        <p class="g-hero-tag">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    desc: String,
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
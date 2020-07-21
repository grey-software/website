<template>
  <div class="col-lg-3 mt-3 justify-content-center align-content-center card-container">
    <div class="row justify-content-center align-items-center">
      <div class="d-flex justify-content-center feature-icon align-content-center m-5">
        <img class="g-hero-img" :src="icon" />
      </div>
    </div>
    <div>
      <h2 class="card-heading text-center">{{ heading }}</h2>
      <p class="text-center">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    heading: {
      type: String
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.card-container {
  border-radius: 7px;
  background: var(--bg);
  box-shadow: 0 3px 4px 0 #888888, 0 5px 7px 0 #888888;
}
.feature-icon {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: var(--color-gold);
}
.card-heading {
  color: var(--color-gold);
}
</style>
<template>
  <div class="mb-5 mt-5">
    <div class="row d-flex justify-content-between">
      <div
        class="col-md-5 py-5 px-4 d-flex justify-content-center"
        :class="{'order-md-last': !reverse}"
      >
        <img class="feature-img" :src="imgSrc" />
      </div>
      <div class="col-md-6 d-flex justify-content-center flex-column text-container">
        <h3 class="feature-heading">{{ title }}</h3>
        <p class="desc">{{ desc }}</p>
        <div v-if="link != ''">
          <a :href="link" class="feature-btn">Learn More →</a>
        </div>
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
    link: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="css" scoped>
.feature-btn {
  color: var(--color-gold) !important;
  font-size: 1.1rem;
  max-width: 200px;
  text-align: left;
}

.feature-btn:hover {
  text-decoration: underline;
}

.feature-img {
  width: 275px;
}

.desc {
  color: var(--color-text);
  margin-top: 32px;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.75rem;
  opacity: 0.9;
}

.feature-heading {
  font-family: "Open Sans", "Helvetica", "Arial", "sans-serif";
  font-weight: 700;
  line-height: 1.25;
  color: var(--color-text-dark);
}

@media screen and (max-width: 768px) {
  .text-container {
    text-align: center;
  }
}

@media screen and (max-width: 992px) {
  .feature-img {
    height: 236px;
  }

  .g-hero-heading {
    font-size: calc(12px + 8vw);
    line-height: 1.05;
  }
}
</style>
<template>
  <div class="mb-5 mt-5">
    <div class="row d-flex justify-items-between">
      <div class="col-md-4 col-12 img-container" :class="{'order-md-last': !reverse}">
        <img class="feature-img" :src="imgSrc" />
      </div>
      <div class="col-md-8 text-container">
        <h1 class="feature-heading">{{ title }}</h1>
        <p class="desc">{{ desc }}</p>
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
    }
  },
};
</script>

<style lang="css" scoped>
.feature-img {
  height: 343px;
  max-width: 100%;
}

.desc {
  font-size: 32px;
  color: var(--color-text);
  letter-spacing: -0.032em;
  line-height: 1.5;
  margin-top: 32px;
}

.img-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.feature-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: calc(12px + 5vw);
  line-height: 1.05;
}

@media screen and (max-width: 768px) {
  .text-container {
    text-align: center;
  }

  .desc {
    font-size: 22px;
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
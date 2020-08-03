<template>
  <div class="mb-5 mt-5">
    <div class="row d-flex justify-content-between">
      <div
        class="col-md-5 py-5 px-4 d-flex justify-content-center"
        :class="{'order-md-last': !reversed}"
      >
        <img class="feature-img" :src="imgSrc" />
      </div>
      <div class="col-md-6 d-flex justify-content-center flex-column text-container">
        <h3 class="feature-heading">{{ title }}</h3>
        <div>
          <p class="desc">{{ desc }}</p>
          <div v-if="link != ''">
            <a :href="link" class="feature-btn">Learn More →</a>
          </div>
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
      type: String,
      default: "false",
    },
    link: {
      type: String,
      default: "",
    },
  },
  computed: {
    reversed() {
      if (this.reverse === 'true')
        return true
      return false
    }
  }
};
</script>

<style scoped>
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
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.75rem;
  opacity: 0.9;
  font-size: 28px;
  margin-top: 20px;
}

.feature-heading {
  font-weight: 600;
  line-height: 1.25;
  font-size: 42px;
  color: var(--color-text-dark);
}

@media screen and (max-width: 768px) {
  .feature-heading {
    font-size: 32px;
  }

  .desc {
    font-size: 20px;
  }
}
</style>
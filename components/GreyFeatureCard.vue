<template>
  <div
    class="col-lg-3 mt-3 justify-content-center align-content-center card-container"
  >
    <div class="row justify-content-center items-space-between">
      <div
        class="flex justify-content-center feature-icon-container items-center m-5"
      >
        <img class="feature-icon" :src="icon" />
      </div>
    </div>
    <div>
      <div class="feature-title text-center">{{ title }}</div>
      <p class="feature-desc text-center">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-container {
  border-radius: 7px;
  background: var(--bg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  height: 392px;
}

.feature-icon-container {
  height: 108px;
  width: 108px;
  border-radius: 50%;
  background: var(--color-gold);
  fill: #fff;
}

.feature-icon {
  width: 64px;
  height: 64px;
}

.card-heading {
  color: var(--color-gold);
}

.feature-title {
  font-family: var(--font-heading);
  color: var(--color-gold);
  font-size: 20px;
  height: 64px;
}

.feature-desc {
  font-family: var(--font-body);
  font-size: 18px;
}
</style>

<template>
  <div class="d-flex flex-column align-items-center col-sm-6 col-lg-4 pr-sm-4 pr-lg-5 mt-5 mb-4">
    <div
      class="mb-3 d-flex align-middle justify-content-center logo-bg"
      style="width: 4.5rem; height: 4.5rem;"
    >
      <img :src="icon" />
    </div>
    <p class="h6 mb-2 mt-4 text-title">{{ title }}</p>
    <p
      class="mt-1"
    >{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    desc: String
  }
};
</script>

<style scoped>
.logo-bg {
  background: var(--color-gold);
}

.text-title {
  font-size: 1.125rem;
  line-height: 1.75rem;
  opacity: 0.9;
  font-weight: 700;
}
</style>
<template>
  <div>
    <div class="mb-3 d-flex align-middle icon-size">
      <img :src="icon" />
    </div>
    <p class="mb-2 mt-4 title">{{ title }}</p>
    <p class="mt-1 desc">{{ desc }}</p>
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
.title {
  font-size: 42px;
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.05;
}

.col-icon {
  height: 96px;
}

.desc {
  font-size: 20px;
  line-height: 1.5;
}

.icon-size {
  width: 96px;
  height: 96px;
}
</style>
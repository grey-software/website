<template>
  <div>
    <div class="mb-3 d-flex align-middle icon-size">
      <img :src="icon" />
    </div>
    <p v-if="title != ''" class="mb-3 mt-5 title">{{ title }}</p>
    <p class="desc">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: String,
    desc: String,
  },
}
</script>

<style scoped>
.title {
  font-size: 36px;
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.05;
  min-height: 88px;
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

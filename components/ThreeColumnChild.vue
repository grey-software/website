<template>
  <div>
    <div class="mb-3 d-flex align-middle logo" :class="{'logo-color': logoColor}">
      <img :src="icon" class="col-icon" />
    </div>
    <p class="h6 mb-2 mt-4 col-heading">{{ title }}</p>
    <p class="mt-1 col-body">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    desc: String,
    logoColor: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.col-heading {
  font-size: 42px;
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.05;
}

.col-icon {
  height: 96px;
}

.col-body {
  font-size: 20px;
  line-height: 1.5;
}

.logo {
  width: 96px;
  height: 96px;
}

.logo-color {
  background: var(--color-gold);
}
</style>
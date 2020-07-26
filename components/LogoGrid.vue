<template>
  <div>
    <div class="d-md-flex flex-wrap justify-content-around">
      <div class="text-center m-3" v-for="logo in logos" :key="logo">
        <!-- image div -->
        <i class="logo-icon" :class="logo"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: Array
  }
};
</script>

<style scoped>
.logo-icon {
  font-size: 96px;
  color: var(--color-gold);
}
</style>

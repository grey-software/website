<template>
 <div>
  <div class="d-md-flex flex-wrap justify-content-around">
    <div class="text-center" v-for="img in images" :key="img.src">
      <!-- image div -->
      <img
        v-if="img.width && img.height"
        :src="img.src"
        :width="img.width"
        :height="img.height"
        class="image-property"
      />
      <img v-else-if="img.width" :src="img.src" :width="img.width" class="image-property" />
      <img v-else-if="img.height" :src="img.src" :height="img.height" class="image-property" />
      <img v-else :src="img.src" class="image-property" />
      <p class="text-center mt-3">{{img.desc}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: { images: Array }
};
</script>

<style scoped>
.image-property {
  position: relative;
}
</style>

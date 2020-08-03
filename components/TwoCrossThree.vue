<template>
  <div class="row">
    <span class="col-sm-6 col-lg-4 pr-sm-4 pr-lg-5 mt-5 mb-4" v-for="child in children" :key="child.title">
      <TwoCrossThreeChild :title="child.title" :desc="child.desc" :icon="child.icon" />
    </span>
  </div>
</template>

<script>
import TwoCrossThreeChild from '@/components/TwoCrossThreeChild.vue'

export default {
  props: {
    children: Array
  },
  components: {
    TwoCrossThreeChild
  }
}
</script>

<style>

</style>
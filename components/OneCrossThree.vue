<template>
  <div class="row">
    <span class="col-lg-4 pr-sm-4 pr-lg-5 mt-5 mb-4" v-for="child in children" :key="child.title">
      <ThreeColumnChild :title="child.title" :desc="child.desc" :icon="child.icon" />
    </span>
  </div>
</template>

<script>
import ThreeColumnChild from '@/components/ThreeColumnChild.vue'

export default {
  props: {
    children: Array
  },
  components: {
    ThreeColumnChild
  }
}
</script>
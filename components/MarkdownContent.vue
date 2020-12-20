<template>
  <article>
    <nuxt-content
      class="t-prose t-prose-sm t-screen-phone:t-prose t-screen-tablet-portrait:t-prose-lg t-screen-tablet-landscape:t-prose-xl t-screen-pc:t-prose-2xl"
      :document="content"
      :class="{'t-mx-auto': center}"
    />
  </article>
</template>

<script>
export default {
  props: {
    content: Object,
    center: {
      type: Boolean,
      default: true
    }
  },
}
</script>

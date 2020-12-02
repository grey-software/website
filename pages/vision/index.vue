<template>
  <article class="mt-5 pb-5">
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="visionPage"
    />
  </article>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const visionPage = await $content('vision', 'index').fetch()
    return { visionPage }
  },
}
</script>

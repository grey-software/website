<template>
  <article class="mt-5 pb-5">
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="successStoriesPage"
    />
  </article>
</template>

<script>
export default {
async asyncData ({ $content, params, error }) {
    const successStoriesPage = await $content('success-stories').fetch()
    return { successStoriesPage }
  },
}
</script>
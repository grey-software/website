<template>
  <article class="mt-5 pb-5">
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="faqPage"
    />
  </article>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const faqPage = await $content('faq').fetch()
    return {faqPage}
  },
}
</script>

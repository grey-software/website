<template>
  <article class="mt-5 pb-5">
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="page"
    />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    console.log(params.slug)
    const page = await $content('blog', params.slug).fetch()

    return { page }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
};
</script>

<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <h1>Blog Posts</h1>
    <div
      v-for="article of articles"
      :key="article.slug"
      class="mb-5"
    >
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
        <div class="article-card d-flex justify-space-between">
          <div class="flex-col">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
          <img class="img-article" :src="article.img" />

        </div>
      </NuxtLink>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style scoped>
h1 {
  color: #f7fafc;
}

h2 {
  color: #f7fafc;
  margin-top: 1em;
}

h3 {
  color: #f7fafc;
}

p {
  color: white;
}

a {
  color: white;
  text-decoration: none;
}

.article-card {
  border: solid 2px white;
  border-radius: 8px;
  padding: 12px 24px;
}

.img-article {
    height: 236px;
}
</style>
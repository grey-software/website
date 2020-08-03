<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <h1>Blog Posts</h1>
    <div
      v-for="article of articles"
      :key="article.slug"
    >
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
        <div class="article-card">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
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
}
</style>
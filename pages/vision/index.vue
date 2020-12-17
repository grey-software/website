<template>
  <div class="mt-5 pb-5">
    <markdown-content :content="visionPage" folder="vision" file="index" />
  </div>
</template>

<script>
import MarkdownContent from '@/components/MarkdownContent'

export default {
  components: {
    MarkdownContent,
  },
  async asyncData({$content, params, error}) {
    const visionPage = await $content('vision', 'index').fetch()
    return { visionPage }
  },
}
</script>

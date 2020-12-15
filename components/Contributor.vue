<template>
  <a target="_blank" :href="contributor.link">
    <div class="flex flex-col t-items-center">
      <img
        class="avatar t-rounded-full t-mb-2"
        :src="contributor.avatar"
        :alt="getImageAlt(contributor.login)"
      />
      <h1>{{ contributor.username }}</h1>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    contributor: {
      default: {
        username: '',
        avatar: '',
        link: '',
      },
    },
  },
  methods: {
    getImageAlt(login) {
      return `${login} 's Image`
    },
  },
}
</script>

<style scoped>
.avatar {
  height: 84px;
  width: auto;
}
</style>
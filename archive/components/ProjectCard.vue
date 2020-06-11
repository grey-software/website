<template>
  <a class="flex flex-col bg-white px-8 py-6 w-full sm:w-1/3 rounded-lg shadow-lg" :href="project.link">
    <div class="flex items-center">
      <img class="w-16 h-16 rounded-full mr-4"  :src="project.icon" />
      <a
        class="px-2 py-1 text-3xl font-semibold"
        href="#"
      >{{project.name}}</a>
    </div>
    <div class="mt-8">
      <a
        class="text-lg text-gray-700 font-medium"
        href="#"
      >{{project.desc}}</a>
    </div>
    <div class="flex justify-between items-center mt-4">
      <div class="flex flex-row items-center">
        <img
          v-for="contributor in project.contributors"
          :key="contributor"
          class="w-10 h-10 rounded-full -mr-4"
          :src="contributor"
          alt="Avatar"
        >
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      name: String,
      desc: String,
      githubLink: String,
      icon: String,
      link: String,
      starCount: Number,
    }
  }
}
</script>

<style>
</style>
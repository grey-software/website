<template>
  <header class="fixed top-0 left-0 right-0 z-30 bg-white border-b border-light-border dark:border-dark-border lg:border-0 h-16 lg:h-24 transition-colors duration-300 ease-linear">
    <div class="container relative mx-auto px-4 flex items-center lg:py-6 h-full">
      <!-- Logo -->
      <NuxtLink
        class="h-7 lg:h-10 z-10 mr-auto flex items-center"
        to="/"
      >
        <img
          class="h-12"
          src="../assets/logo.png"
        />
        <h1 class="ml-2 pl-1 uppercase logo-text">
          Grey Software
        </h1>
      </NuxtLink>
      <!-- Center Navigation -->
      <nav class="lg:flex lg:pt-1 xl:pt-0">
        <ul class="flex text-center">
          <li
            v-for="link in headerLinks"
            :key="link"
            class="xl:px-4 lg:py-0 lg:px-2 py-2 text-lg"
          >
            <NuxtLink
              class="g-nav-link"
              :to="`/${link}`"
            >
              {{ link }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      headerLinks: [
        // 'vision',
        "projects",
        "education"
        // 'blog',
        // 'github'
      ]
    };
  }
};
</script>

<style>
.logo-text {
  font-size: 24px;
  color: #434343;
}
</style>

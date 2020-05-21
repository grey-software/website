<template>
  <header class="fixed top-0 left-0 right-0 z-30 bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-b border-light-border dark:border-dark-border lg:border-0 h-16 lg:h-24 transition-colors duration-300 ease-linear">
    <div class="container relative mx-auto px-4 flex items-center lg:py-6 h-full">
      <!-- Logo -->
      <NuxtLink class="inline-block text-nuxt-gray h-7 lg:h-10 z-10 mr-auto" to="/" @click.native.right.stop.prevent="$router.push('/design')">
        <h1 class="m-0 h-0 w-0 overflow-hidden">Grey Software</h1>
        <NuxtLogo class="h-6 lg:h-8 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" />
      </NuxtLink>
      <!-- Center Navigation -->
      <nav class="hidden lg:flex lg:pt-1 xl:pt-0 mx-auto">
        <ul class="flex text-center">
          <li v-for="link in headerLinks" :key="link" class="xl:px-4 lg:py-0 lg:px-2 py-2">
            <NuxtLink class="block p-2 font-medium uppercase hover:no-underline transition-colors duration-300 ease-linear">
              {{ link }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- Algolia Search -->
    </div>
  </header>
</template>

<script>

export default {
  components: {
    NuxtLogo
  },
  data() {
      return {
          headerLinks: [
              'Mission',
              'Projects',
              'Services'
          ]
      }
  }
}
</script>

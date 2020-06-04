<template>
  <div class="px-3">
    <section class="container flex flex-col md:flex-row flex-wrap mx-auto justify-between items-center">
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start md:text-left">
        <h1 class="my-4 text-5xl font-bold leading-tight text-light-onSurfacePrimary">Promoting Liberty and Excellence in Software</h1>
        <p class="leading-normal text-2xl mb-8 text-light-onSurfaceSecondary">Grey Software develops FLOSS (Free/Libre Open Source Software) and educates students in software engineering.</p>

        <button class="hover:underline bg-white text-gray-800 font-bold rounded my-6 py-3 px-8 shadow-lg">
          <b-link
            target="_blank"
            href="https://www.github.com/grey-software"
          >Our Projects</b-link>
        </button>

      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6">
        <img
          style="float:right;"
          class="w-full md:w-4/5 z-50"
          src="@/assets/img/open-source.svg"
        >
      </div>
    </section>
    <section class="container flex flex-col md:flex-row flex-wrap mx-auto justify-between">
      <div class="flex flex-col w-full md:w-2/5 bg-gray-500 h-12"></div>
      <div class="flex flex-col w-full md:w-2/5 bg-gray-400 h-12"></div>
    </section>
    <section class="container flex flex-col md:flex-row flex-wrap mx-auto justify-between">
      <div class="flex flex-col w-full md:w-1/3 bg-gray-300 h-12"></div>
      <div class="flex flex-col w-full md:w-1/3 bg-gray-500 h-12"></div>
      <div class="flex flex-col w-full md:w-1/3 bg-gray-400 h-12"></div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
<template>
  <!--Hero-->

  <div>

    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start md:text-left">
        <h1 class="my-4 text-5xl font-bold leading-tight text-light-onSurfacePrimary">Promoting Liberty and Excellence in Software</h1>
        <p class="leading-normal text-2xl mb-8 text-light-onSurfaceSecondary">Grey Software develops FLOSS (Free/Libre Open Source Software) and educates students in software engineering.</p>

        <button class="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-3 px-8 shadow-lg">
          <b-link
            target="_blank"
            href="https://www.github.com/grey-software"
          >Our Projects</b-link>
        </button>

      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6">
        <img
          class="w-full md:w-4/5 z-50"
          src="../assets/img/open-source.svg"
        >
      </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
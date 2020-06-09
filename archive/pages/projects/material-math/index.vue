<template>
  <!--Hero-->
  <div>
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start md:text-left">
        <h1 class="my-4 text-5xl font-bold leading-tight text-light-onSurfacePrimary">Material Math</h1>
        <p class="leading-normal text-2xl mb-8 text-light-onSurfaceSecondary">Material Math allows you to practice math problems in a fun, beautiful, material experience!</p>
        <div class="flex items-center justify-start">

          <button class="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-3 px-8 shadow-lg mr-4">
            <fa-icon
              class="mr-2"
              :icon="['fab', 'github']"
            />
            <b-link
              target="_blank"
              href="https://www.github.com/grey-software/material-math"
            >Git Repo</b-link>
          </button>
          <button class="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-3 px-8 shadow-lg">
            <fa-icon
              class="mr-2"
              :icon="['fas', 'play']"
            />
            <b-link
              target="_blank"
              href="https://material-math.netlify.app/"
            >Demo</b-link>
          </button>

        </div>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6">
        <video
          class="rounded-lg shadow-lg ml-5"
          src="/projects/material-math/landing-clip.mp4"
          autoplay
          loop
          muted
          playsinline
        />
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
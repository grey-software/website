<template>
  <div class="px-3">
  <section class="g-hero-container">

    <div class="mt-10 w-full md:w-3/5 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="text-left">
        <h2 class="g-hero-heading">
          Learn Differently
        </h2>
        <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
          We're on a mission to revolutionize software education by empowering students to build with a mentor in an open-source environment.
        </p>
      </div>

    </div>
    <div class="w-full md:w-2/5 py-6">
      <img
        style="float:right;"
        class="w-full z-50"
        src="@/assets/img/open-source.svg"
      >
    </div>
  </section>

    <section class="my-24">
      <h1 class="font-bold p-4 text-center text-4xl text-gray-700"> Our Programs </h1>
      <div class="container flex flex-col md:flex-row flex-wrap mx-auto justify-between">

        <div class="flex flex-col w-full md:w-1/3">
          <img
            class="program-icon"
            src="@/assets/icons/explorer.svg"
          />
          <h2 class="text-center font-bold text-3xl pt-4 text-gray-700">
            Explorer
          </h2>
          <div class="p-4 inline-block text-justify">
            <p class="mb-3 text-gray-600">
              Bring your creative app ideas to life with less chaos and more clarity with the Grey Software Explorer service!
            </p>
          </div>
        </div>

        <div class="flex flex-col w-full md:w-1/3">
          <img
            class="program-icon"
            src="@/assets/icons/apprentice.svg"
          />
          <h2 class="text-center font-bold text-3xl pt-4 text-gray-700">
            Apprentice
          </h2>
          <div class="p-4 inline-block text-justify">
            <p class="mb-3 text-gray-600">
              Bring your creative app ideas to life with less chaos and more clarity with the Grey Software Explorer service!
            </p>
          </div>
        </div>

        <div class="flex flex-col w-full md:w-1/3">
          <img
            class="program-icon"
            src="@/assets/icons/web-portfolio.svg"
          />
          <h2 class="text-center font-bold text-3xl pt-4 text-gray-700">
            Web Portfolio
          </h2>
          <div class="p-4 inline-block text-justify">
            <p class="mb-3 text-gray-600">
              Bring your creative app ideas to life with less chaos and more clarity with the Grey Software Explorer service!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      programs: [
        { name: "Explorer", icon: "explorer", desc: "" },
        { name: "Apprentice", icon: "apprentice", desc: "Contribute to open source software with guidance and structure from a Grey Software mentor!" },
        { name: "Web Portfolio", icon: "web-portfolio", desc: "Learn the technologies that power the web with an instructor as you build a portfoilio of web components!" },
      ]
    }
  },
}
</script>

<style>
.program-icon {
  height: 108px;
  margin-top: 20px;
}
</style>
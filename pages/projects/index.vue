<template>
  <div>
    <section class="g-hero-container">

      <div class="mt-10 w-full md:w-3/5 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="text-left">
          <h2 class="g-hero-heading">
            Our Projects
          </h2>
          <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
            We're on a mission to improve the open source ecosystem by creating useful, creative apps and developer tools with the world's latest technology. </p>
          <div class="mt-5 sm:mt-8 sm:flex md:justify-start">
            <div class="rounded-md shadow">
              <a
                href="/projects"
                class="g-btn-cta"
              >
                Our Projects
              </a>
            </div>
          </div>
        </div>

      </div>
      <div class="w-full md:w-2/5 py-6">
        <img
          style="float:right;"
          class="w-full z-50"
          src="@/assets/img/projects.svg"
        >
      </div>
    </section>

    <section class="relative py-8 my-8">
      <div
        v-for="project in projects"
        :key="project"
        class="container mx-4 px-2 py-8"
      >

        <div class="items-center flex flex-wrap my-8">
          <div class="w-full md:w-5/12 ml-auto mr-auto">
            <div class="md:pr-12">
              <img
                class="w-16 h-16 mb-6"
                :src="`/projects/${project.name}/logo.svg`"
              />

              <h3 class="text-3xl font-semibold capitalize">{{project.name.replace('-',' ')}}</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600 mb-4">
                {{project.desc}}
              </p>
              <a class="g-btn w-48" :href="`/projects/${project.name}`">Learn More</a>

            </div>
          </div>
          <div class="w-4/12 ml-auto mr-auto">
            <video
              class="rounded-lg shadow-lg"
              :src="`/projects/${project.name}/landing-clip.mp4`"
              autoplay
              loop
              muted
              playsinline
            />
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
      projects: [
        { name: 'toonin', desc: "Toonin allows you to share or stream audio and video over the web in real time." },
        { name: 'material-math', desc: "Material Math allows you to practice math problems in a fun, beautiful, material experience!" }

      ]
    }
  },
}
</script>

<style>
</style>
<template>
  <div>
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start md:text-left">
        <h1 class="my-4 text-5xl font-bold leading-tight text-light-onSurfacePrimary">Our Projects</h1>
        <p class="leading-normal text-2xl mb-8 text-light-onSurfaceSecondary"> We're improving the open source ecosystem by creating useful, creative apps and dev-tools with the world's latest technology.</p>

      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6">
        <img
          style="float:right;"
          class="w-full md:w-4/5 z-50"
          src="@/assets/img/projects.svg"
        >
      </div>
    </div>

    <section class="relative py-8">
      <div
        v-for="project in projects"
        :key="project"
        class="container mx-auto px-2 py-8"
      >

        <div class="items-center flex flex-wrap my-8">
          <div class="w-full md:w-5/12 ml-auto mr-auto">
            <div class="md:pr-12">
              <img
                class="w-16 h-16 mb-6"
                :src="`/projects/${project.name}/logo.svg`"
              />

              <h3 class="text-3xl font-semibold text-capitalize">{{project.name}}</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                {{project.desc}}
              </p>
              <NuxtLink
                :to="`/projects/${project.name}`"
                class="flex items-center my-4 hover:no-underline"
              >
                <button class="shadow-md bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>Learn More</span>
                  <b-icon
                    icon="arrow-right-short"
                    font-scale="2"
                  ></b-icon>
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="w-full md:w-4/12 ml-auto mr-auto">
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
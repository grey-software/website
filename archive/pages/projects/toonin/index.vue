<template>
  <!--Hero-->
  <div>
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center my-24">
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start md:text-left">
        <h1 class="my-4 text-5xl font-bold leading-tight text-gray-700">Toonin</h1>
        <p class="leading-normal text-2xl mb-8 text-gray-600">Technology that allows you to share or stream audio and video over the web in real time.</p>

        <div class="flex items-center justify-start">

          <button class="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-3 px-8 shadow-lg mr-4">
            <fa-icon
              class="mr-2"
              :icon="['fab', 'github']"
            />
            <b-link
              target="_blank"
              href="https://www.github.com/grey-software/toonin"
            >Git Repo</b-link>
          </button>
          <button class="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-3 px-8 shadow-lg">
            <fa-icon
              class="mr-2"
              :icon="['fas', 'play']"
            />
            <b-link
              target="_blank"
              href="https://www.toonin.ml/"
            >Demo</b-link>
          </button>

        </div>

      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6">
        <video
          class="rounded-lg shadow-lg ml-5"
          src="/projects/toonin/landing-clip.mp4"
          autoplay
          loop
          muted
          playsinline
          style="height: 309px;float: right;"
        />
      </div>
    </div>
    <section class="container flex flex-col md:flex-row flex-wrap mx-auto justify-between items-center my-24">
      <div class="flex flex-col w-full md:w-2/5">
        <img
          style="height: 207px;"
          src="@/assets/icons/hd.svg"
        />
      </div>
      <div class="flex flex-col w-full md:w-2/5">
        <div class="text-3xl font-bold mb-3 text-gray-700">Quality you deserve!</div>
        <div class="text-xl text-base mb-2 text-gray-600">Toonin allows you to stream HD audio and video directly from your browser to others.</div>
        <div class="text-xl text-base text-gray-600">With Toonin, you don't need to sacrifice quality for your freedom and privacy!</div>

      </div>
    </section>
    <section class="container flex flex-col md:flex-row flex-wrap mx-auto justify-between items-center my-24">
      <div class="flex flex-col w-full md:w-2/5">
        <div class="text-3xl font-bold mb-3 text-gray-700">Your streams are yours!</div>
        <div class="text-xl text-base mb-1 text-gray-600">You can password protect your Toonin rooms to keep the party limited to those you want there.</div>
      </div>
      <div class="flex flex-col w-full md:w-2/5">
        <img
          style="height: 207px;"
          src="@/assets/icons/password.svg"
        />
      </div>
    </section>
    <section class="container flex flex-col md:flex-row flex-wrap mx-auto justify-between items-center my-24">
      <div class="flex flex-col w-full md:w-2/5">
        <img
          style="height: 207px;"
          src="@/assets/icons/responsive.svg"
        />
      </div>
      <div class="flex flex-col w-full md:w-2/5">
        <div class="text-3xl font-bold text-light-onSurfacePrimary mb-3 text-gray-700">All your devices!</div>
        <div class="text-xl text-light-onSurfacePrimary text-base mb-2 text-gray-600">Toonin allows your desktop and mobile devices to stream HD audio and video to each other without a server.</div>
      </div>
    </section>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.my-24 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}
</style>
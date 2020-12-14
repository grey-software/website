<template>
  <div class="t-max-w-6xl mx-auto">
    <div
      class="t-max-w-sm t-w-full t-screen-phone:t-w-1/2 t-screen-pc:t-w-1/3 t-py-6 t-px-3"
    >
      <div class="t-bg-white t-shadow-xl t-rounded-lg t-overflow-hidden">
        <div class="t-grid t-place-items-center project-card-bg">
          <img class="t-h-96px t-w-96px shadowed-image" :src="project.logo" />
        </div>
        <div class="t-p-4">
          <p
            class="t-uppercase t-tracking-wide t-text-xl t-font-bold t-text-gray-700"
          >
            {{ project.name }}
          </p>
          <p class="t-text-gray-700">{{ project.desc }}</p>
        </div>
        <div class="flex t-p-4 t-border-t t-border-gray-300 t-text-gray-700">
          <div class="t-flex t-items-center">
            <svg
              class="t-h-6 t-w-6 t-text-gray-600 t-fill-current t-mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"
              ></path>
            </svg>
            <p><span class="t-text-gray-900 t-font-bold">3</span> Bedrooms</p>
          </div>
          <div class="flex t-items-center">
            <svg
              class="t-h-6 t-w-6 t-text-gray-600 t-fill-current t-mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
              ></path>
            </svg>
            <p><span class="t-text-gray-900 t-font-bold">2</span> Bathrooms</p>
          </div>
        </div>
        <div
          class="t-px-4 t-pt-3 t-pb-4 t-border-t t-border-gray-300 t-bg-gray-100"
        >
          <div
            class="t-text-xs t-uppercase t-font-bold t-text-gray-600 t-tracking-wide"
          >
            Contributors
          </div>
          <div class="flex t-items-center t-pt-2">
            <div
              class="t-bg-cover t-bg-center t-w-24px t-h-24px t-rounded-full t-mr-3 t-bg-green-400"
            ></div>
            <div>
              <p class="t-font-bold t-text-gray-900">Tiffany Heffner</p>
              <p class="t-text-sm t-text-gray-700">(555) 555-4321</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      name: String,
      desc: String,
      repo: String,
      logo: String,
      demo: String,
    },
  },
}
</script>

<style scoped>
.project-card-bg {
  background-color: #4b5563;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23606a79' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%2376808e' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%239096a0' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23a8acb2' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23c0c2c5' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23d8d8d9' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23EEE' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: scroll;
  background-size: contain;
  height: 184px;
}

.shadowed-image {
  -webkit-filter: drop-shadow(0 0 16px #bbb);
  filter: drop-shadow(0 0 16px #bbb);
}
</style>
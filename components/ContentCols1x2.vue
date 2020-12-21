<template>
  <section>
    <h1
      class="t-text-2xl t-screen-tablet-landscape:t-text-3xl t-screen-pc:t-text-5xl t-font-bold"
    >
      {{ title }}
    </h1>
    <div class="flex t-mt-8 t-items-center t-justify-between">
      <div
        v-for="col in cols"
        :key="col.title"
        class="t-screen-phone:t-w-full t-w-1/2"
      >
        <img
          class="t-screen-phone:t-h-48px t-screen-tablet-portrait:t-h-96px"
          :src="col.icon"
        />
        <h1
          class="t-text-xl t-screen-tablet-landscape:t-text-2xl t-screen-pc:t-text-3xl t-font-bold t-mt-5"
        >
          {{ col.title }}
        </h1>
        <p
          class="t-text-lg t-screen-tablet-landscape:t-text-xl t-screen-pc:t-text-2xl t-mt-5 t-screen-phone:t-pr-4 t-screen-tablet-portrait:t-pr-6 t-screen-phone:t-h-12"
        >
          {{ col.desc }}
        </p>
        <div
          class="t-mt-6 t-text-lg t-screen-tablet-landscape:t-text-xl t-screen-pc:t-text-2xl t-font-bold"
        >
          <nuxt-link v-if="col.link.internal" :to="col.link.internal"
            >{{ col.link.label }}
            <v-icon large class="t-ml-2 transition">mdi-arrow-right</v-icon>
          </nuxt-link>
          <a v-else target="_blank" :href="col.link.href"
            >{{ col.link.label }}
            <v-icon large class="t-ml-2 transition">mdi-arrow-right</v-icon>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    cols: Array,
  },
}
</script>
<template>
  <div
    class="flex t-screen-phone:t-flex-col-reverse t-screen-tablet-portrait:flex t-items-center t-justify-between"
  >
    <div class="t-w-full t-screen-tablet-portrait:t-w-1/2 flex-col">
      <h1
        class="t-text-3xl t-screen-tablet-portrait:text-5xl t-screen-tablet-pc:text-6xl t-font-extrabold t-text-gray-50 t-mb-4"
      >
        {{ title }}
      </h1>
      <span
        class="t-max-w-4xl t-text-lg t-screen-tablet-portrait:text-2xl font-medium t-screen-tablet-portrait:leading-10 t-space-y-6 t-mb-6"
        >{{ desc }}</span
      >
      <div class="t-screen-tablet-landscape:flex">
        <v-btn
          class="t-mb-3 t-mr-4"
          :target="button1.internal ? '' : '_blank'"
          :href="button1.internal ? '' : button1.link"
          v-if="button1"
        >
          <nuxt-link :to="button1.internal ? button1.link : ''">
            <v-icon class="mr-2">{{ button1.icon }}</v-icon>
            {{ button1.text }}
          </nuxt-link>
        </v-btn>

        <v-btn
          class="t-mb-3"
          :target="button2.internal ? '' : '_blank'"
          :href="button2.link"
          v-if="button2"
        >
          <nuxt-link :to="button2.internal ? button2.link : ''">
            <v-icon>{{ button2.icon }}</v-icon>
            {{ button2.text }}
          </nuxt-link>
        </v-btn>
      </div>
    </div>
    <div
      class="flex t-screen-phone:t-justify-center t-justify-end t-w-full t-screen-tablet-portrait:t-w-1/2 t-screen-phone:t-mb-4"
    >
      <img
        class="t-screen-phone:t-h-10 t-screen-tablet-portrait:t-h-12 t-screen-pc:t-h-14"
        :src="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    image: String,
    imageAlt: String,
    button1: {
      text: String,
      icon: String,
      link: String,
      internal: Boolean,
    },
    button2: {
      text: String,
      icon: String,
      link: String,
      internal: Boolean,
    },
  },
}
</script>
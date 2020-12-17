<template>
  <figure class="t-shadow-lg t-rounded-xl flex-none w-80 md:w-xl">
    <blockquote
      class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900"
    >
      <svg width="45" height="36" class="mb-5 fill-current text-purple-100">
        <path
          d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
        ></path>
      </svg>
      <p>
        {{ testimonial.text }}
      </p>
    </blockquote>
    <figcaption
      class="flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-purple-500 to-indigo-500"
    >
      <div
        class="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center"
      >
        <img
          :src="testimonial.image"
          alt=""
          class="w-12 h-12 rounded-full bg-purple-100"
          loading="lazy"
        />
      </div>
      <div class="flex-auto">
        {{ testimonial.name }}<br /><span class="text-purple-100">{{
          testimonial.role
        }}</span>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    testimonial: {
      text: String,
      image: String,
      name: String,
      role: String,
    },
  },
}
</script>
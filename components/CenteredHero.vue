<template>
  <div class="t-grid t-place-items-center t-h-88vh">
    <div class="flex-col t-items-center">
      <img :src="icon" alt="Grey Software's Icon" class="t-w-2/5" />
        <h1 class="t-text-5xl t-text-center t-font-bold t-mt-5">{{ title }}</h1>
        <p class="t-text-xl t-text-center t-font-bold t-w-3/5 t-mt-3">{{ desc }}</p>
        <slot class="t-mt-4" name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    desc: String,
    title: String,
  }
}
</script>
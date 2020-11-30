<template>
  <div class="grid place-items-center h-88vh">
    <div class="flex flex-col align-items-center">
      <img :src="icon" alt="Grey Software's Icon" class="w-2/5" />
        <h1 class="text-5xl text-center font-bold mt-5">{{ title }}</h1>
        <p class="text-xl text-center font-bold w-3/5 mt-3">{{ desc }}</p>
        <slot class="mt-4" name="content"></slot>
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
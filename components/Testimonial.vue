<template>
  <div class="mx-3 mx-md-4">
    <h1 class="mt-4">
      {{ desc }}
    </h1>
    <div class="mt-5 d-flex">
      <img :src="imgSrc" alt="profile image" class="mr-4">
      <div class="d-flex flex-column justify-content-center">
        <div class="name">
          {{ name }}
        </div>
        <div class="about-person mt-2">
          {{ aboutPerson }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    desc: String,
    aboutPerson: String,
    imgSrc: String,
    name: String
  }
}
</script>

<style scoped>
img {
  width: 100px;
  border-radius: 50%;
}
.name {
  font-family: var(--font-heading);
  letter-spacing: .07em;
  font-size: 22px;
  line-height: 1.05;
  text-transform: uppercase;
}
h1 {
  font-family: var(--font-heading);
  font-size: 28px;
  font-style: italic;
}
.about-person {
  font-family: var(--font-body);
  font-size: 18px;
}
</style>

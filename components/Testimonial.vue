<template>
  <div class="p-4 m-4 testimonial-container">
    <div class="mt-4 desc">{{ desc }}</div>
    <div class="mt-5 d-flex">
      <img :src="imgSrc" alt="profile image" class="mr-4" />
      <div class="d-flex flex-column justify-content-center">
        <div class="name">{{ name }}</div>
        <div class="about-person mt-2">{{ aboutPerson }}</div>
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
    name: String,
  },
};
</script>

<style scoped>
.testimonial-container {
  width: 550px;
  border-radius: 7px;
  background: var(--bg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
.name {
  font-family: var(--font-heading);
  letter-spacing: 0.07em;
  font-size: 22px;
  line-height: 1.05;
  text-transform: uppercase;
}
.desc {
  font-family: var(--font-heading);
  font-size: 20px;
  font-style: italic;
}
.about-person {
  font-family: var(--font-body);
  font-size: 18px;
}
</style>

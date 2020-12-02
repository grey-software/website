<template>
  <div class="project-card p-4 mb-4">
    <div>
      <div class="flex align--center my-4">
        <img class="logo justify-start" :src="project.logo" />
        <div class="ml-3">
          <h5 class="text-2xl font-bold">{{ project.name }}</h5>
        </div>
      </div>

      <div class="description">
        <p class="text-xl">{{ project.desc }}</p>
      </div>
    </div>

    <div class="flex mt-4">
      <v-btn
        x-large
        color="primary"
        :href="project.repo"
        target="_blank"
        class="mr-4"
      >
        <v-icon left large class="mr-3"> mdi-github </v-icon>Repo
      </v-btn>
      <v-btn x-large color="primary" :href="project.demo" target="_blank">
        <v-icon left large class="mr-3"> mdi-play </v-icon>Demo
      </v-btn>
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
.status {
  top: 12px;
  right: 12px;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  position: relative;
  opacity: 0.69;
  transition: opacity 0.2s ease-out;
}

.status:hover {
  opacity: 1;
}

.project-card {
  width: 369px;
  border-radius: 12px;
  background: var(--bg);
  box-shadow: 12px 24px 72px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-direction: column;
  margin-right: 2rem;
}

.logo {
  height: 48px;
}

.project-heading {
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;
}

.description {
  width: 309px;
}

@media screen and (max-width: 768px) {
  .project-card {
    margin-right: 0;
  }
}
</style>

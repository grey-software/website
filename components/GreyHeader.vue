<template>
  <div class="container p-0 g-header">
    <b-navbar
      toggleable="lg"
      variant="faded"
      type="light"
      class="g-navbar"
    >

      <nuxt-link
        class="d-flex align-items-center ml-1"
        to="/"
      >
        <img
          class="logo"
          src="../assets/logo.png"
        />
        <span class="logo-text">Grey Software</span>
      </nuxt-link>

      <b-navbar-nav class="ml-auto">
        <nuxt-link
          to="/projects"
          class="g-nav-link mr-4"
        >Projects</nuxt-link>
        <nuxt-link
          to="/education"
          class="g-nav-link mr-4"
        >Education</nuxt-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.g-header {
  height: 12vh;
}
.logo {
  height: 48px;
  width: 48px;
  margin-right: 16px;
}
.logo-text {
  font-size: 26px;
  color: var(--color-text);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

.g-nav-link {
  font-size: 1.125rem;
  color: var(--color-text);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

.g-navbar {
  padding: 32px 0px 0px 0px;
}
</style>
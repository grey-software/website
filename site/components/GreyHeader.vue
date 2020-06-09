<template>
    <b-navbar
      toggleable="lg"
      variant="faded"
      type="light"
      class="g-navbar"
    >
      <b-navbar-brand href="#">
        <img
          class="logo mr-2"
          src="../assets/logo.png"
        />
        <span class="logo-text">Grey Software</span></b-navbar-brand>

      <b-navbar-nav class="ml-auto">
          <span class="g-nav-link mr-4">Projects</span>
          <span class="g-nav-link mr-4">Education</span>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo {
  height: 48px;
  width: 48px;
}
.logo-text {
  font-size: 24px;
  color: #434343;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

.g-nav-link {
  font-size: 1.125rem;
  color: #434343;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

.g-navbar {
    padding-top: 32px;
}
</style>
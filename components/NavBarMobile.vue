<template>
  <div class="nav flex">
    <div class="nav-logo">
      <nuxt-link
        class="flex align-items-center ml-1"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo" src="/logo.png" />
        <span class="logo-text">Grey Software</span>
      </nuxt-link>
    </div>
    <div class="flex-grow"></div>
    <div class="nav-menu-container">
      <button class="nav-menu-button" type="button" aria-controls="nav-items">
        Menu
      </button>
      <div
        class="nav-items"
        id="nav-items"
        aria-expanded="false"
      ></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
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

/* .nav-internal {
}

.nav-external {
} */
</style>
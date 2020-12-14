<template>
  <div
    class="nav container flex pt-4 px-2 items-center justify-space-between"
  >
    <div class="nav-logo flex items-center mr-auto">
      <nuxt-link
        class="flex items-center"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo" src="/logo.png" />
      </nuxt-link>
    </div>
    <button
      class="nav-menu-button z-50"
      type="button"
      aria-controls="nav-items"
      @click="toggleDrawer"
    >
      <close-icon v-show="drawerOpen" class="close-icon"></close-icon>
      <menu-icon v-show="!drawerOpen" class="menu-icon"></menu-icon>
    </button>
  </div>
</template>

<script>
import MenuIcon from '@/assets/icons/menu.svg?inline'
import CloseIcon from '@/assets/icons/close.svg?inline'
import {mapState} from 'vuex'

export default {
  components: {
    MenuIcon,
    CloseIcon
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
  },
  computed: {
    ...mapState(['drawerOpen']),
  },
}
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

.menu-icon {
  height: 36px;
  width: 36px;
  display: inline-block;
  z-index: 70;
}

.close-icon {
  height: 24px;
  width: 24px;
  display: inline-block;
  z-index: 70;
}
</style>
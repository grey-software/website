<template>
  <div class="nav-drawer p-4 bg-gray-700">
    <div class="nav-internal flex-col pt-5">
      <nuxt-link @click.native="toggleDrawer" to="/vision" class="nav-link mr-1"
        >Vision</nuxt-link
      >
      <nuxt-link
        @click.native="toggleDrawer"
        to="/projects"
        class="nav-link mr-1"
        >Projects</nuxt-link
      >
      <nuxt-link
        @click.native="toggleDrawer"
        to="/apprentice"
        class="nav-link mr-1"
        >Apprentice</nuxt-link
      >
    </div>
    <div class="nav-external flex-col">
      <a
        @click.native="toggleDrawer"
        target="_blank"
        href="http://community.grey.software"
        class="nav-link mr-2"
        id="github"
        >Contribute</a
      >
      <a
        class="rounded-t donate-link py-2 px-2"
        href="https://github.com/sponsors/grey-software"
        @click="toggleDrawer"
        ><github-sponsors-logo class="donate-icon mr-2" />Github Sponsors</a
      >
      <a
        class="donate-link py-2 px-2"
        href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url"
        @click="toggleDrawer"
        ><paypal-logo class="donate-icon mr-2" />Paypal</a
      >
      <a
        class="rounded-b donate-link py-2 px-2"
        href="https://opencollective.com/grey-software"
        @click="toggleDrawer"
        ><open-collective-logo class="donate-icon mr-2" />Open Collective</a
      >
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/assets/icons/close.svg?inline'

export default {
  components: {
    CloseIcon,
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
  },
}
</script>

<style>
.nav-drawer {
  height: 100vh;
  z-index: 40;
}

#close-icon {
  width: 24px;
  height: 24px;
}
</style>
<template>
  <div class="nav-drawer p-4 bg-gray-700">
    <div class="nav-internal flex-col pt-5">
      <nuxt-link @click.native="toggleDrawer" to="/vision" class="drawer-link mr-1"
        >Vision</nuxt-link
      >
      <nuxt-link
        @click.native="toggleDrawer"
        to="/projects"
        class="drawer-link"
        >Projects</nuxt-link
      >
      <nuxt-link
        @click.native="toggleDrawer"
        to="/apprentice"
        class="drawer-link"
        >Apprentice</nuxt-link
      >
    </div>
    <div class="flex-col my-3">
      <h1 class="drawer-header mb-2">Community</h1>
      <a
        @click.native="toggleDrawer"
        target="_blank"
        href="http://github.com/grey-software"
        class="drawer-link"
        id="github"
        ><github-logo class="drawer-icon mr-2" />Contribute</a
      >
      <a
        @click.native="checked = false"
        target="_blank"
        href="http://community.grey.software"
        class="drawer-link"
        id="github"
        ><discord-logo class="drawer-icon mr-2" />
        <div>Discuss</div></a
      >
    </div>
    <div class="flex-col my-3">
      <h1 class="drawer-header mb-2">Donate</h1>
      <a
        class="drawer-link"
        href="https://github.com/sponsors/grey-software"
        @click="toggleDrawer"
        ><github-sponsors-logo class="drawer-icon mr-2" />Github Sponsors</a
      >
      <a
        class="drawer-link"
        href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url"
        @click="toggleDrawer"
        ><paypal-logo class="drawer-icon mr-2" />Paypal</a
      >
      <a
        class="drawer-link"
        href="https://opencollective.com/grey-software"
        @click="toggleDrawer"
        ><open-collective-logo class="drawer-icon mr-2" />Open Collective</a
      >
    </div>
  </div>
</template>

<script>
import GithubLogo from '@/assets/icons/github.svg?inline'
import DiscordLogo from '@/assets/icons/discord.svg?inline'
import DonateIcon from '@/assets/icons/donate.svg?inline'
import GithubSponsorsLogo from '@/assets/icons/github-sponsors.svg?inline'
import PaypalLogo from '@/assets/icons/paypal.svg?inline'
import OpenCollectiveLogo from '@/assets/icons/open-collective.svg?inline'
import CloseIcon from '@/assets/icons/close.svg?inline'

export default {
  components: {
    CloseIcon,
    GithubLogo,
    DonateIcon,
    GithubSponsorsLogo,
    PaypalLogo,
    OpenCollectiveLogo,
    DiscordLogo,
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

.drawer-header {
  font-size: 22px;
  font-weight: 600;
}

#close-icon {
  width: 24px;
  height: 24px;
}

.drawer-icon {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.drawer-link {
  display: flex;
  padding: 12px 0;
  transition: all 0.3s ease-out;
}

.drawer-link:hover {
  display: flex;
  padding: 12px 6px;
  background: #fff;
  color: var(--bg);
}

.drawer-link:hover .drawer-icon {
  fill: var(--bg);
}
</style>
<template>
  <div class="nav-drawer t-p-4 t-bg-gray-700">
    <div class="nav-internal flex-col t-pt-5">
      <nuxt-link
        @click="toggleDrawer"
        to="/vision"
        class="drawer-link t-mr-1"
        >Vision</nuxt-link
      >
      <nuxt-link
        @click="toggleDrawer"
        to="/projects"
        class="drawer-link t-mr-1"
        >Projects</nuxt-link
      >
    </div>
    <div class="flex-col t-my-3">
      <h1 class="drawer-header t-mb-2">Community</h1>
      <a
        @click="toggleDrawer"
        target="_blank"
        href="http://github.com/grey-software"
        class="drawer-link"
        id="github"
        ><github-logo class="drawer-icon t-mr-3" />Contribute</a
      >
      <a
        @click="checked = false"
        target="_blank"
        href="http://community.grey.software"
        class="drawer-link"
        id="github"
        ><discord-logo class="drawer-icon t-mr-3" />
        <div>Discuss</div></a
      >
    </div>
    <div class="flex-col t-my-3">
      <h1 class="drawer-header t-mb-2">Donate</h1>
      <a
        class="drawer-link"
        href="https://github.com/sponsors/grey-software"
        @click="toggleDrawer"
        ><github-sponsors-logo class="drawer-icon t-mr-3" />Github Sponsors</a
      >
      <a
        class="drawer-link"
        href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url"
        @click="toggleDrawer"
        ><paypal-logo class="drawer-icon t-mr-3" />Paypal</a
      >
      <a
        class="drawer-link"
        href="https://opencollective.com/grey-software"
        @click="toggleDrawer"
        ><open-collective-logo class="drawer-icon t-mr-3" />Open Collective</a
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

.drawer-icon {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.drawer-link {
  display: flex;
  padding: 12px 0;
  transition: all 0.3s ease-out;
  font-size: 20px;
  align-items: center;
  color: white !important;
}

.drawer-link:hover {
  padding: 12px 6px;
  background: #fff !important;
  color: var(--bg) !important;
}

.drawer-link:hover .drawer-icon {
  fill: var(--bg);
}
</style>
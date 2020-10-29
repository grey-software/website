<template>
  <div class="nav container flex pt-4 pl-2 align-items-center">
    <div class="nav-logo">
      <nuxt-link
        class="flex align-items-center ml-1"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo" src="/logo.png" />
      </nuxt-link>
    </div>
    <div class="nav-internal ml-3">
      <nuxt-link
        @click.native="checked = false"
        to="/projects"
        class="nav-link mr-1"
        >Projects</nuxt-link
      >
      <nuxt-link
        @click.native="checked = false"
        to="/apprentice"
        class="nav-link mr-1"
        >Apprentice</nuxt-link
      >
      <nuxt-link @click.native="checked = false" to="/faq" class="nav-link mr-1"
        >FAQ</nuxt-link
      >
    </div>
    <div class="flex-grow"></div>
    <div class="nav-external">
      <a
        @click.native="checked = false"
        target="_blank"
        href="http://community.grey.software"
        class="nav-link icon-label-link mr-2"
        id="github"
        ><github-logo class="mr-2" />Contribute</a
      >
      <a
        @click.native="checked = false"
        target="_blank"
        href="http://community.grey.software"
        class="nav-link icon-label-link"
        id="donate"
      >
        <donate-icon class="mr-2" /> Donate
        <div class="donate-menu absolute hidden text-gray-700 pt-1">
          <a class="rounded-t donate-link py-2 px-2" href="#"
            ><github-sponsors-logo class="donate-icon mr-2" />Github Sponsors</a
          >
          <a class="donate-link py-2 px-2" href="#"
            ><paypal-logo class="donate-icon mr-2" />Paypal</a
          >
          <a class="rounded-b donate-link py-2 px-2" href="#"
            ><open-collective-logo class="donate-icon mr-2" />Open Collective</a
          >
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import GithubLogo from '@/assets/icons/github.svg?inline'
import DonateIcon from '@/assets/icons/donate.svg?inline'
import GithubSponsorsLogo from '@/assets/icons/github-sponsors.svg?inline'
import PaypalLogo from '@/assets/icons/paypal.svg?inline'
import OpenCollectiveLogo from '@/assets/icons/open-collective.svg?inline'

export default {
  components: {
    GithubLogo,
    DonateIcon,
    GithubSponsorsLogo,
    PaypalLogo,
    OpenCollectiveLogo,
  },
}
</script>

<style scoped>
.nav {
  height: 12vh;
  color: #efefef;
  position: relative;
  z-index: 9999;
}

.logo {
  height: 48px;
  width: 48px;
  margin-right: 16px;
}

.logo-text {
  font-size: 22px;
  color: var(--color-text);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  height: fit-content;
  font-size: 24px;
}

.nav-internal {
  display: flex;
}

.icon-label-link {
  display: inline-flex;
  align-items: center;
}

.nav-external {
  display: inline-flex;
  align-items: center;
  position: relative;
}

.donate-menu {
  right: 0;
  top: 6vh;
}

.donate-link {
  background: #efefef;
  color: var(--color-bg);
  fill: var(--color-bg);
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 232px;
}

.donate-link:hover {
  background: var(--color-bg);
  color: #efefef;
  fill: #efefef;
}

#donate:hover .donate-menu {
  display: block;
}

.donate-icon {
  height: 24px;
  width: 24px;
}
</style>
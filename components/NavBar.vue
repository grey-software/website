<template>
  <div class="nav container flex pt-4 px-2 lg:px-0 align-items-center">
    <div class="nav-logo flex align-items-center">
      <nuxt-link
        class="flex align-items-center"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo" src="/logo.png" />
      </nuxt-link>
      <div class="nav-internal">
        <nuxt-link @click.native="checked = false" to="/vision" class="nav-link"
          >Vision</nuxt-link
        >
        <nuxt-link
          @click.native="checked = false"
          to="/projects"
          class="nav-link"
          >Projects</nuxt-link
        >
        <nuxt-link
          @click.native="checked = false"
          to="/apprentice"
          class="nav-link"
          v-if="$mq === 'lg' || $mq === 'xl'"
          >Apprentice</nuxt-link
        >
      </div>
    </div>
    <div class="navbar-spacer"></div>
    <div class="nav-external ml-auto">
      <a
        @click.native="checked = false"
        target="_blank"
        href="https://github.com/grey-software"
        class="nav-link icon-label-link flex"
        id="github"
        ><github-logo class="nav-link-icon mr-2" />
        <div>Contribute</div></a
      >
      <a
        @click.native="checked = false"
        target="_blank"
        href="http://community.grey.software"
        class="nav-link icon-label-link flex"
        id="github"
        ><discord-logo class="nav-link-icon mr-2" />
        <div>Discuss</div></a
      >
      <div
        @click.native="checked = false"
        target="_blank"
        class="nav-link icon-label-link"
        id="donate"
      >
        <donate-icon class="nav-link-icon mr-1" /> Donate
        <div class="donate-menu absolute hidden text-gray-700 pt-1">
          <a
            class="rounded-t donate-link py-2 px-2"
            href="https://github.com/sponsors/grey-software"
            ><github-sponsors-logo class="donate-icon mr-2" />Github Sponsors</a
          >
          <a
            class="donate-link py-2 px-2"
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url"
            ><paypal-logo class="donate-icon mr-2" />Paypal</a
          >
          <a
            class="rounded-b donate-link py-2 px-2"
            href="https://opencollective.com/grey-software"
            ><open-collective-logo class="donate-icon mr-2" />Open Collective</a
          >
        </div>
      </div>
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

export default {
  components: {
    GithubLogo,
    DonateIcon,
    GithubSponsorsLogo,
    PaypalLogo,
    OpenCollectiveLogo,
    DiscordLogo,
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

.navbar-spacer {
  flex-grow: 1;
  max-width: 72px;
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
  font-size: 22px;
  padding: 8px;
}

@media (max-width: 1200px) {
  .nav-link {
    font-size: 18px;
  }
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
  transition: all 1s ease-out;
  opacity: 0;
  width: min-content;
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
  cursor: pointer;
}

#donate:hover {
  cursor: pointer;
}

#donate:hover .donate-menu {
  display: block;
  opacity: 1;
}

.donate-icon {
  height: 24px;
  width: 24px;
}

.donate-link:hover .donate-icon {
  fill: #fff;
}

.nav-link-icon {
  min-width: 24px;
  height: 24px;
  width: 24px;
}
</style>

<style scoped>
@media (max-width: 1200px) {
  .nav-link-icon {
    min-width: 20px;
    height: 20px;
    width: 20px;
  }

  .logo {
    height: 36px;
    width: 36px;
    margin-right: 16px;
  }

  .logo-text {
    font-size: 18px;
    color: var(--color-text);
    font-weight: 500;
    font-family: var(--font-heading);
    text-transform: uppercase;
  }
}
</style>


<template>
  <div>
    <v-app-bar app elevate-on-scroll>
      <div class="t-container t-flex t-mx-auto t-px-6 t-pt-2 t-content-center">
        <div class="t-flex t-align-content-center t-mr-auto">
          <div class="flex t-items-center t-mr-auto">
            <nuxt-link class="flex t-align-content-center" to="/">
              <img class="t-w-48px t-h-48px" src="/logo.png" />
            </nuxt-link>
            <nuxt-link
              to="/vision"
              class="t-mx-4 t-text-color-gray-600 t-text-2xl t-font-bold"
              >Vision</nuxt-link
            >
            <nuxt-link
              to="/projects"
              class="t-mx-4 t-text-color-gray-600 t-text-2xl t-font-bold"
              >Projects</nuxt-link
            >
          </div>
        </div>
        <div class="navbar-spacer t-mx-auto"></div>

        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{on, attrs}">
            <v-btn
              class="t-mx-4"
              large
              rounded
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon x-large>mdi-charity</v-icon>
              Donate
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="donationLink in donationLinks"
              :key="donationLink.name"
            >
              <a class="t-text-xl flex t-items-center" target="_blank" :href="donationLink.link"
                ><img
                  :src="donationLink.icon"
                  class="t-h-24px t-w-24px t-mr-3"
                /><span>{{ donationLink.name }}</span></a
              >
            </v-list-item>
          </v-list>
        </v-menu>

        <div class="t-flex t-align-center">
          <!-- TODO: Implement RTL Functionality -->
          <!-- <v-switch dense hide-details v-model="rtlSwitch"> </v-switch> -->
          <menu-icon
            class="t-mx-2 t-h-48px t-w-48px"
            @click="drawerOpen = !drawerOpen"
          ></menu-icon>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher v-model="drawerOpen" app right>
      <SideBar />
    </v-navigation-drawer>
  </div>
</template>


<script>
import GithubLogo from '@/assets/icons/github.svg?inline'
import DiscordLogo from '@/assets/icons/discord.svg?inline'
import DonateIcon from '@/assets/icons/donate.svg?inline'
import GithubSponsorsLogo from '@/assets/icons/github-sponsors.svg?inline'
import PaypalLogo from '@/assets/icons/paypal.svg?inline'
import OpenCollectiveLogo from '@/assets/icons/open-collective.svg?inline'
import SideBar from '@/components/SideBar'
import MenuIcon from '@/assets/icons/menu.svg?inline'

import {mapMutations, mapState} from 'vuex'

export default {
  components: {
    GithubLogo,
    DonateIcon,
    GithubSponsorsLogo,
    PaypalLogo,
    OpenCollectiveLogo,
    DiscordLogo,
    SideBar,
    MenuIcon,
  },
  data() {
    return {
      drawerOpen: false,
      rtlSwitch: false,
      donationLinks: [
        {
          name: 'Github Sponsors',
          link: 'https://github.com/sponsors/grey-software',
          icon: '/icons/github.svg',
        },
        {
          name: 'Paypal',
          link:
            'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url',
          icon: '/icons/paypal.svg',
        },
        {
          name: 'Open Collective',
          link: 'https://opencollective.com/grey-software',
          icon: '/icons/open-collective.svg',
        },
      ],
    }
  },
  mounted() {
    this.rtlSwitch = this.$store.state.rtl
  },
  computed: {
    ...mapState(['rtl']),
  },
  methods: {
    ...mapMutations(['setRtl']),
  },
  watch: {
    rtlSwitch(value) {
      this.setRtl({rtl: value})
    },
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


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
              class="t-hidden t-screen-tablet-landscape:t-block t-mx-4 header-link"
              >Vision</nuxt-link
            >
            <nuxt-link
              to="/projects"
              class="t-hidden t-screen-tablet-landscape:t-block t-mx-4 header-link"
              >Projects</nuxt-link
            >
          </div>
        </div>
        <div class="t-mx-auto"></div>

        <div class="t-flex t-items-center">
          <!-- TODO: Implement RTL Functionality -->
          <!-- <v-switch dense hide-details v-model="rtlSwitch"> </v-switch> -->
          <a href="http://meet.grey.software" class="t-mx-4">
            <v-icon class="shadowed-image" large>mdi-discord</v-icon>
          </a>
          <a href="https://github.com/grey-software" class="t-mx-4">
            <v-icon class="shadowed-image" large>mdi-github</v-icon>
          </a>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{on, attrs}">
              <v-icon
                class="t-mx-4 shadowed-image"
                v-bind="attrs"
                v-on="on"
                large
                >mdi-charity</v-icon
              >
            </template>
            <v-list>
              <v-list-item
                v-for="donationLink in donationLinks"
                :key="donationLink.name"
              >
                <a
                  class="t-text-xl flex t-items-center header-link"
                  target="_blank"
                  :href="donationLink.link"
                  ><img
                    :src="donationLink.icon"
                    class="t-h-24px t-w-24px t-mr-3"
                  /><span>{{ donationLink.name }}</span></a
                >
              </v-list-item>
            </v-list>
          </v-menu>
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

<style lang="postcss">
.header-link {
  @apply t-text-grey-100 t-text-xl !important;

  transition: all 0.13s ease-out;
}

.header-link:hover {
  @apply t-text-grey-600 !important;
}
</style>
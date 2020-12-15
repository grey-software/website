<template>
  <div>
    <div
      class="t-px-4 t-pt-3 t-pb-4 t-border-t t-border-gray-300 t-bg-gray-100"
    >
      <div
        class="t-text-xs t-uppercase t-font-bold t-text-gray-600 t-tracking-wide"
      >
        Mentors
      </div>
      <div class="flex t-items-center t-pt-2">
        <div
          class="t-bg-cover t-bg-center t-w-24px t-h-24px t-rounded-full t-mr-3 t-bg-green-400"
        ></div>
        <div>
          <p class="t-font-bold t-text-gray-900">Tiffany Heffner</p>
          <p class="t-text-sm t-text-gray-700">(555) 555-4321</p>
        </div>
      </div>
    </div>
    <v-tabs v-model="currentTab" fixed-tabs dark>
      <v-tab v-for="tab in tabs" :key="tab.tab">
        <v-icon>{{ tab.icon }}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab in tabs" :key="tab.title">
        <v-card flat>
          <v-card-text>{{ tab.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      name: String,
      desc: String,
      repo: String,
      logo: String,
      demo: String,
    },
  },
  data() {
    return {
      currentTab: null,
      tabs: [
        {title: 'Mentors', icon: 'mdi-teach', content: 'Tab 1 Content'},
        {
          title: 'Contributors',
          icon: 'mdi-account-network-outline',
          content: 'Tab 2 Content',
        },
        {title: 'Insights', icon: 'mdi-chart-line', content: 'Tab 3 Content'},
      ],
    }
  },
  methods: {
    fetchRepoContributors: async (repoName) => {
      const result = await this.$axios.get(
        `https://api.github.com/repos/grey-software/${repoName}/contributors`,
      )
      const contributors = await result.json()
      return contributors
        .filter((contributor) => !contributor.login.endsWith('[bot]'))
        .map((contributor) => {
          return {
            username: contributor.login,
            avatar: contributor.avatar_url,
            link: contributor.html_url,
            repos: [{name: repoName, contributions: contributor.contributions}],
          }
        })
    },
  },
}
</script>
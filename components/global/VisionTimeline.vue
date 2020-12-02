<template>
  <div>
    <v-timeline
      :reverse="reverse"
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="phase in phases"
        :key="phase.title"
      >
        <v-card class="elevation-2">
          <v-card-title class="headline">
            {{ phase.title }}
          </v-card-title>
          <v-card-text>
            {{ phase.desc }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
  export default {
    data: () => ({
      reverse: true,
      phases: [
        {
          title: "Phase 1",
          desc: "Populate READMEs with resources and guidance for all the technology involved for a repo"
        },
        {
          title: "Phase 2",
          desc: "Setup 2 mentors with calendly links for every repo."
        },
        {
          title: "Phase 3",
          desc: "Record onboarding videos for every repository."
        }
      ]
    }),
  }
</script>
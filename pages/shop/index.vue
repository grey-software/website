<template>
  <div class="container">
    <CenteredHero
      title="Coming Soon"
      desc="Support our mission my buying our promotional merchandise from ethical suppliers!"
      icon="/icons/shop.svg"
    >
    <template v-slot:content>
      <div class="flex align-items-center justify-center">
      <v-btn color="primary" ><v-icon class="mr-4">mdi-email-alert</v-icon>Join the waitlist</v-btn>
      </div>
      <a target="_blank" href="https://www.fairware.com" class="flex align-center justify-center mt-4">
      <img class="h-6 mr-4" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGxohY9r3G7Pw/company-logo_200_200/0?e=2159024400&v=beta&t=hW7sobMHxcs0Id5HmpgmnkszQFN-mq4lvebdfCBAm58" />
      <div class="text-xl">Powered by Fairware</div>
       </a>
    </template>
    </CenteredHero>
  </div>
</template>

<script>
export default {
data() {
  return {
    
  }
},
}
</script>

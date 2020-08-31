<template>
  <div class="py-5">
    <section class="container">
      <h1 class="heading">
        This Week in Grey Software
      </h1>

      <weekly-report
        v-for="report in repoReports"
        :key="report.name"
        :report="report"
      />
    </section>
  </div>
</template>

<script>
import { WeeklyReport } from "@/components/WeeklyReport";
export default {
  async asyncData ({ $content, params, error }) {
    const repoReportsDataStore = await $content('this-week/repo-reports').fetch()
    const repoReports = repoReportsDataStore.reports.sort((a,b) => {
      const aCount = a.newIssues + a.closedIssues + a.mergedPRs + a.openedPRs
      const bCount = b.newIssues + b.closedIssues + b.mergedPRs + b.openedPRs
      return bCount - aCount
    })
    return { repoReports }
  },
}
</script>

<style scoped>
.heading {
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: 0.025em;
  font-size: calc(12px + 4vw);
  line-height: 1.05;
}
</style>
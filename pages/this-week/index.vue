<template>
  <div class="py-5">
    <section class="container">
      <h1 class="heading">
        This Week in Grey Software
      </h1>
      <weekly-report />
    </section>
  </div>
</template>

<script>
import { WeeklyReport } from "@/components/WeeklyReport";
export default {

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
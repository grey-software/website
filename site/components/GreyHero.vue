<template>
  <b-container>
    <b-row align-v="center">
      <b-col
        sm="12"
        md="6"
      >
        <h1 class="g-hero-heading">Liberty and Excellence <br />in Software</h1>
        <p class="g-hero-tag">We're on a mission to write incredible FLOSS (Free/Libre Open Source Software) and teach students software engineering.</p>

        <b-button size="lg" class="mr-2 g-btn-cta">Projects</b-button>
        <b-button size="lg" variant="outline-primary" class="g-btn-cta-alt">Education</b-button>
      </b-col>
      <b-col
        sm="12"
        md="6"
      ><img
          class="g-hero-img"
          src="@/assets/img/open-source.svg"
        /></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>
.g-hero-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  font-size: 2.75rem;
  letter-spacing: -0.025em;
}

.g-hero-tag {
  font-size: 1.5rem;
  color: var(--color-text);
}

.g-hero-img {
  height: 343px;
}

.g-btn-cta {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
  outline: none;
}

.g-btn-cta:active {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
}

.g-btn-cta:hover {
  color: var(--color-gold-light) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
}


.g-btn-cta-alt {
  color: var(--color-gold) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
  outline: none;
}

.g-btn-cta-alt:hover {
  background-color: var(--color-gold) !important;
  color: #ffffff !important;
}
</style>
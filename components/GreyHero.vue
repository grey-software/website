<template>
  <div
    class="container g-hero"
  >
    <div
      class="row"
      align-v="center"
    >
      <div
        class="col"
        sm="12"
        md="6"
      >
        <h1 class="g-hero-heading">Liberty and Excellence <br />in Software</h1>
        <p class="g-hero-tag">We're on a mission to write incredible Free, Open Source Software and teach students software engineering.</p>
        <div class="g-hero-cta-container">
          <b-button
            size="lg"
            class="mr-4 g-btn-cta"
          >Projects</b-button>
          <b-button
            size="lg"
            variant="outline-primary"
            class="g-btn-cta-alt"
          >Education</b-button>
        </div>
      </div>
      <div
        class="col"
        sm="12"
        md="8"
      >
        <img
          class="g-hero-img"
          style="float:right;"
          src="@/assets/img/open-source.svg"
        />

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.g-hero {
  height: 88vh;
}
.g-hero-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: calc(12px + 6vw);
  line-height: 1.05;
  z-index: 1000;
}

.g-hero-subheading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: calc(12px + 3vw);
  line-height: 1.05;
  z-index: 1000;
  max-width: 72%
}

.g-hero-tag {
  font-size: 32px;
  color: var(--color-text);
  letter-spacing: -0.032em;
  line-height: 1.5;
  margin-top: 32px;
}

.g-hero-img {
  height: 343px;
  opacity: 0.96;
  float: right;
  margin-right: -42px;
}

.g-hero-cta-container {
  margin-top: 48px;
}

@media screen and (max-width: 992px) {
  .g-hero-img {
    height: 236px;
    opacity: 0.96;
    float: right;
    margin-right: -42px;
  }

  .g-hero-heading {
    font-size: calc(12px + 4vw);
    line-height: 1.05;
    z-index: 1000;
  }

  .g-hero-tag {
    font-size: 22px;
  }
}
</style>

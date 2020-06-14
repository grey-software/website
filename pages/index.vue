<template>
  <div class="pb-5">
    <div class="container g-hero mt-5">
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
            <nuxt-link to="/projects">
              <b-button
                size="lg"
                class="mr-4 g-btn-cta"
              >Projects</b-button>
            </nuxt-link>
            <nuxt-link to="/education">
              <b-button
                size="lg"
                variant="outline-primary"
                class="g-btn-cta-alt"
              >Education</b-button>
            </nuxt-link>
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
    <div class="container pb-5">
      <div class="row">
        <div
          class="col"
          cols="4"
        >
          <h1 class="g-hero-heading">What we do</h1>
        </div>
      </div>
      <div class="row mt-5 justify-content-center align-items-center">
        <div class="col">
          <img
            class="img-what-we-do"
            src="@/assets/icons/create.svg"
          />
          <h1 class="heading-what-we-do mt-4">Create</h1>
          <p class="body-what-we-do mt-4">We create free apps and tools to improve the open source software ecosystem.</p>
          <div class="mt-4">
            <nuxt-link
              to="/projects"
              class="arrow-link "
            >See what we're building <fa-icon
                class="ml-2 mt-2"
                :icon="['fas', 'long-arrow-alt-right']"
              ></fa-icon>
            </nuxt-link>
          </div>

        </div>
        <div class="col">
          <img
            class="img-what-we-do"
            src="@/assets/icons/educate.svg"
          />
          <h1 class="heading-what-we-do mt-4">Educate</h1>
          <p class="body-what-we-do mt-4">We help students learn software engineering through collaborating with a mentor.</p>
          <div class="mt-4">
            <nuxt-link
              to="/education"
              class="arrow-link"
            >Learn about our programs
              <fa-icon
                class="ml-2 mt-2"
                :icon="['fas', 'long-arrow-alt-right']"
              ></fa-icon>
            </nuxt-link>

          </div>
        </div>
      </div>
    </div>
    <section class="mt-5 pt-2 pb-5 bg-gold">
      <div class="container">
        <div class="row mt-5">
          <h1 class="g-hero-heading">Free Software?</h1>
          <h1 class="g-hero-text mt-2">For us, 'free' is a matter of liberty, not price!</h1>

          <p class="g-text-body mt-4">We respect an individual human’s freedom and community by orienting our software to the <a
              class="link-freedoms"
              href="https://www.gnu.org/philosophy/free-sw.en.html"
            >Free Software Foundation's essential freedoms.</a></p>

        </div>
      </div>
    </section>
    <div class="container pt-5">
      <div class="row mt-5">
        <div
          class="col"
          cols="4"
        >
          <h1 class="g-hero-heading">Who are we?</h1>
          <h1 class="g-hero-subheading">A dedicated group of:</h1>
          <div class="row d-flex pt-5 justify-content-start align-items-center">
            <div class="col flex-col align-items-center">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/engineers.svg"
              />
              <h4 class="text-who-we-are">Engineers</h4>
            </div>
            <div class="col d-flex flex-col align-items-center">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/designers.svg"
              />
              <h4 class="text-who-we-are">Designers</h4>
            </div>
            <div class="col d-flex flex-col align-items-center">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/educators.svg"
              />
              <h4 class="text-who-we-are">Educators</h4>
            </div>
            <div class="col d-flex flex-col align-items-center">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/creatives.svg"
              />
              <h4 class="text-who-we-are">Creatives</h4>
            </div>
            <div class="col d-flex flex-col align-items-center">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/strategists.svg"
              />
              <h4 class="text-who-we-are">Strategists</h4>
            </div>
          </div>
          <h1 class="g-hero-subheading mt-5">using our intellect and spirit to work for an open source future!</h1>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import GreyHero from "@/components/GreyHero";
export default {
  components: {
    GreyHero
  }
};
</script>

<style>
.heading-what-we-do {
  font-size: 42px;
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.05;
}

.img-what-we-do {
  height: 96px;
}

.g-text-body {
  font-size: 28px;
  line-height: 1.2;
  width: 69%;
}

.body-what-we-do {
  font-size: 28px;
  width: 434px;
}

.section-title {
  font-size: 80px;
}

.section-body {
  max-width: 680px;
  font-size: 28px;
}

.arrow-link {
  color: var(--color-gold);
  font-size: 28px;
  transition: color 0.2s ease-out;
}

.arrow-link:hover {
  color: var(--color-gold-light);
}

.icon-who-we-are {
  height: 108px;
}

.text-who-we-are {
  font-family: var(--font-heading);
  margin-top: 20px;
}

.bg-gold {
  background-color: var(--color-gold);
  width: 100vw;
}

.link-freedoms {
  font-weight: 600;
  color: #434343;
  transition: opacity 0.2s ease-out;
}

.link-freedoms:hover {
  font-weight: 600;
  color: #434343;
  opacity: 0.69;
}
</style>
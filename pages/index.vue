<template>
  <div class="pb-5">
    <!-- Hero -->
    <div class="container g-hero mt-5">
      <div class="row">
        <div class="col-md-7">
          <h1 class="g-hero-heading">Free Software <br />By Students</h1>
          <p class="g-hero-tag">
            We're creating the open source ecosystem of the future where mentors
            and students build free software together!
          </p>
          <div class="g-hero-cta-container">
            <nuxt-link to="/projects">
              <b-button size="lg" class="mr-4 g-btn-cta mb-3"
                >Projects</b-button
              >
            </nuxt-link>
            <nuxt-link to="/education">
              <b-button
                size="lg"
                variant="outline-primary"
                class="g-btn-cta-alt mb-3"
                >Education</b-button
              >
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-5">
          <img class="g-hero-img" src="@/assets/img/open-source.svg" />
        </div>
      </div>
    </div>
    <!-- What we do -->
    <section class="container pb-5 pl-4">
      <div class="row">
        <div class="col" cols="4">
          <h1 class="g-section-heading ml-3">What do we do?</h1>
        </div>
      </div>
      <div class="row mt-5 justify-content-center align-items-center">
        <div class="col-md mb-4">
          <img class="two-col-icon" src="@/assets/icons/create.svg" />
          <h1 class="two-col-heading mt-4">Create</h1>
          <p class="two-col-body mt-4">
            We create free apps and tools to improve the open source software
            ecosystem.
          </p>
          <div class="mt-4">
            <nuxt-link to="/projects" class="arrow-link"
              >Our projects
              <fa-icon
                class="ml-2 mt-2"
                :icon="['fas', 'long-arrow-alt-right']"
              ></fa-icon>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md mb-4">
          <img class="two-col-icon" src="@/assets/icons/educate.svg" />
          <h1 class="two-col-heading mt-4">Educate</h1>
          <p class="two-col-body mt-4">
            We help students learn software engineering through collaborating
            with a mentor.
          </p>
          <div class="mt-4">
            <nuxt-link to="/education" class="arrow-link"
              >Learn more
              <fa-icon
                class="ml-2 mt-2"
                :icon="['fas', 'long-arrow-alt-right']"
              ></fa-icon>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!-- Who are we? -->
    <section class="container pt-5 pb-5">
      <div class="row mt-5 pl-4">
        <div class="col">
          <h1 class="g-section-heading mb-4">Who are we?</h1>
          <h1 class="g-section-subheading">A dedicated group of:</h1>
          <div class="row d-flex pt-5 justify-content-start align-items-center">
            <div class="flex-col align-items-center mx-4">
              <img class="icon-who-we-are" src="@/assets/icons/engineers.svg" />
              <h4 class="g-section-info">Engineers</h4>
            </div>
            <div class="flex-col align-items-center mx-4">
              <img class="icon-who-we-are" src="@/assets/icons/designers.svg" />
              <h4 class="g-section-info">Designers</h4>
            </div>
            <div class="flex-col align-items-center mx-4">
              <img class="icon-who-we-are" src="@/assets/icons/educators.svg" />
              <h4 class="g-section-info">Educators</h4>
            </div>
            <div class="flex-col align-items-center mx-4">
              <img class="icon-who-we-are" src="@/assets/icons/creatives.svg" />
              <h4 class="g-section-info">Creatives</h4>
            </div>
            <div class="flex-col align-items-center mx-4">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/strategists.svg"
              />
              <h4 class="g-section-info">Strategists</h4>
            </div>
          </div>
          <h1 class="g-section-subheading mt-5">
            using our intellect and spirit to build a beautiful, open source
            future!
          </h1>
        </div>
      </div>
    </section>
    <section class="container pt-5">
      <h1 class="g-section-heading pl-3 mb-5">What have we built?</h1>
      <div class="project-cards-container">
        <project-card
          v-for="(project, id) in projects"
          :key="id"
          :project="project"
        />
      </div>
    </section>

    <section class="container mt-5 pb-5 pl-4">
      <h1 class="g-section-heading">What we offer</h1>
      <div class="row mt-5">
        <div class="col-md" style="height: 434px">
          <img class="three-col-icon" src="@/assets/icons/explorer.svg" />
          <h1 class="three-col-heading mt-5" style="height: 88px">Explorer</h1>
          <p class="three-col-body mt-2">
            Bring your creative app ideas to life with less chaos and more
            clarity with the Grey Software Explorer service!
          </p>
          <div class="mt-4">
            <b-button
              size="sm"
              variant="outline-primary"
              class="mr-4 g-btn-alt d-flex align-items-center"
              target="_blank"
            >
              Enrollment Full
            </b-button>
          </div>
        </div>
        <div class="col-md" style="height: 434px">
          <img class="three-col-icon" src="@/assets/icons/apprentice.svg" />
          <h1 class="three-col-heading mt-5" style="height: 88px">
            Apprentice
          </h1>
          <p class="three-col-body mt-2">
            Contribute to established open source software with guidance and
            structure from a Grey Software mentor!
          </p>
          <div class="mt-4">
            <nuxt-link to="/apprentice">
              <b-button
                size="sm"
                class="mr-4 g-btn d-flex align-items-center"
                target="_blank"
              >
                Check it out!
              </b-button>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md" style="height: 434px">
          <img class="three-col-icon" src="@/assets/icons/web-portfolio.svg" />
          <h1 class="three-col-heading mt-5" style="height: 88px">
            Web Portfolio
          </h1>
          <p class="three-col-body mt-2">
            Learn the technologies that power the web with an instructor as you
            build a portfoilio of web components!
          </p>
          <div class="mt-4">
            <b-button
              size="sm"
              variant="outline-primary"
              class="mr-4 g-btn-alt d-flex align-items-center"
              target="_blank"
            >
              Enrollment Full
            </b-button>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-5 pl-4 pb-5">
      <h1 class="g-section-heading">
        What do our
        <br />students have <br />to say?
      </h1>
      <div class="row mt-5">
        <div class="col" style="padding-left: 20px">
          <h1 style="max-width: 84%" class="g-text-testimonial mt-5">
            “I have been programming on the side for the past year now, mainly
            using online resources to pair program... yet one session with my
            mentor was more enriching than hours spent on these side tutorials.”
          </h1>
          <p class="g-section-body mt-4">
            Osama -
            <span class="font-italic">Grey Software Explorer</span>
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col" style="padding-right: 20px; text-align: right">
          <h1 class="g-text-testimonial mt-5">
            “I got to experience what it was like being onboarded into a
            codebase and collaborating with a skilled developer and designer. I
            got the software development education I was looking for."
          </h1>
          <p class="g-section-body mt-4" style="max-width: 100%">
            Milind -
            <span class="font-italic">Grey Software Apprentice</span>
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col" style="padding-left: 20px">
          <h1 style="max-width: 84%" class="g-text-testimonial mt-5">
            “I built a collection of real web components that I would see when
            browsing the web. I was empowered to be a web developer and start
            creating my own websites.”
          </h1>
          <p class="g-section-body mt-4">
            Nina -
            <span class="font-italic">Web Portfolio Program</span>
          </p>
        </div>
      </div>
      <p class="g-text-testimonial mt-5">
        See more success stories
        <nuxt-link
          to="/success-stories"
          style="color: var(--color-gold);"
          class="font-italic"
          >here!</nuxt-link
        >
      </p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const projectsDataStore = await $content('projects').fetch()
    const projects = projectsDataStore.projects
    return {projects}
  },
}
</script>

<style>
.two-col-heading {
  font-size: 42px;
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.05;
}

.two-col-icon {
  height: 96px;
}

.two-col-body {
  font-size: 28px;
  max-width: 434px;
}

.three-col-heading {
  font-size: 42px;
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.05;
}

.three-col-icon {
  height: 96px;
}

.three-col-body {
  font-size: 20px;
  max-width: 343px;
  line-height: 1.5;
}

.g-section-body {
  font-size: 28px;
  line-height: 1.2;
}

.g-hero {
  height: 88vh;
}
.g-hero-heading {
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: 0.025em;
  font-size: calc(12px + 5vw);
  line-height: 1.05;
  z-index: 1000;
}

.g-section-heading {
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: 0.025em;
  font-size: calc(12px + 5vw);
  line-height: 1.05;
  z-index: 1000;
}

.g-section-project-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: calc(12px + 3.5vw);
  line-height: 1.05;
  z-index: 1000;
}

.g-section-subheading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: calc(12px + 2vw);
  line-height: 1.05;
  z-index: 1000;
  max-width: 72%;
}

.g-section-info {
  font-family: var(--font-heading);
  margin-top: 20px;
  font-size: 28px;
  font-weight: 600;
}

.g-text-testimonial {
  font-family: var(--font-heading);
  margin-top: 20px;
  font-size: 28px;
  font-weight: 600;
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
  max-width: 100%;
  margin-right: -42px;
  float: right;
}

.g-hero-cta-container {
  margin-top: 48px;
}

.icon-who-we-are {
  height: 108px;
}

.arrow-link {
  color: var(--color-gold);
  font-size: 28px;
  transition: color 0.2s ease-out;
}

.arrow-link:hover {
  color: var(--color-gold-light);
}

.project-cards-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

@media screen and (max-width: 768px) {
  .g-hero {
    min-height: 100vh;
  }

  .g-hero-img {
    float: left;
  }

  .icon-who-we-are {
    height: 64px;
  }

  .g-section-info {
    font-family: var(--font-heading);
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
  }

  .two-col-heading {
    font-size: 32px;
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.05;
  }

  .two-col-icon {
    height: 72px;
  }

  .two-col-body {
    font-size: 20px;
    max-width: 434px;
  }

  .arrow-link {
    font-size: 20px;
  }

  .g-section-body {
    font-size: 24px;
    line-height: 1.2;
  }

  .project-cards-container {
    justify-content: center;
  }
}

@media screen and (max-width: 992px) {
  .g-hero-img {
    height: 236px;
    opacity: 0.96;
    margin-right: -42px;
  }

  .g-hero-heading {
    font-size: calc(12px + 8vw);
    line-height: 1.05;
    z-index: 1000;
  }

  .g-section-heading {
    font-size: calc(12px + 8vw);
    line-height: 1.05;
    z-index: 1000;
  }

  .g-section-project-heading {
    font-size: calc(12px + 6.5vw);
    line-height: 1.05;
    z-index: 1000;
  }

  .g-hero-tag {
    font-size: 22px;
  }
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

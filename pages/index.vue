<template>
  <div class="pb-5">
    <!-- Hero -->
    <div class="container g-hero mt-5">
      <div class="row">
        <div class="col-md-8">
          <h1 class="g-hero-heading">Freedom and Collaboration <br />in Software</h1>
          <p class="g-hero-tag">We're creating the open source ecosystem of the future where software maintainers mentor students and build free software together!</p>
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
        <div class="col-md-4">
          <img
            class="g-hero-img"
            src="@/assets/img/open-source.svg"
          />

        </div>
      </div>
    </div>
    <!-- What we do -->
    <section class="container pb-5 pl-4">
      <div class="row">
        <div
          class="col"
          cols="4"
        >
          <h1 class="g-section-heading ml-3">What do we do?</h1>
        </div>
      </div>
      <div class="row mt-5 justify-content-center align-items-center">
        <div class="col-md mb-4">
          <img
            class="two-col-icon"
            src="@/assets/icons/create.svg"
          />
          <h1 class="two-col-heading mt-4">Create</h1>
          <p class="two-col-body mt-4">We create free apps and tools to improve the open source software ecosystem.</p>
          <div class="mt-4">
            <nuxt-link
              to="/projects"
              class="arrow-link"
            >Our projects <fa-icon
                class="ml-2 mt-2"
                :icon="['fas', 'long-arrow-alt-right']"
              ></fa-icon>
            </nuxt-link>
          </div>

        </div>
        <div class="col-md mb-4">
          <img
            class="two-col-icon"
            src="@/assets/icons/educate.svg"
          />
          <h1 class="two-col-heading mt-4">Educate</h1>
          <p class="two-col-body mt-4">We help students learn software engineering through collaborating with a mentor.</p>
          <div class="mt-4">
            <nuxt-link
              to="/education"
              class="arrow-link"
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
          <h1 class="g-section-heading">Who are we?</h1>
          <h1 class="g-section-subheading">A dedicated group of:</h1>
          <div class="row d-flex pt-5 justify-content-start align-items-center">
            <div class="flex-col align-items-center mx-4">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/engineers.svg"
              />
              <h4 class="g-section-info">Engineers</h4>
            </div>
            <div class="flex-col align-items-center mx-4">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/designers.svg"
              />
              <h4 class="g-section-info">Designers</h4>
            </div>
            <div class="flex-col align-items-center mx-4">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/educators.svg"
              />
              <h4 class="g-section-info">Educators</h4>
            </div>
            <div class="flex-col align-items-center mx-4">
              <img
                class="icon-who-we-are"
                src="@/assets/icons/creatives.svg"
              />
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
          <h1 class="g-section-subheading mt-5">using our intellect and spirit to build a beautiful, open source future!</h1>

        </div>
      </div>
      <b-button
        size="lg"
        class="g-btn mr-4 mt-4"
        target="_blank"
        href="https://angel.co/company/grey-software/jobs"
      >
        <fa-icon
          class="mr-2"
          :icon="['fas', 'user-plus']"
        ></fa-icon>
        Join us
      </b-button>
    </section>
    <!-- Free Software? -->
    <!-- <section class="mt-5 pt-2 pb-5 bg-gold">
      <div class="container">
        <div class="mt-5 pl-4">
          <h1 class="g-section-heading">Free Software?</h1>
          <h1 class="g-section-subheading mt-2">For us, 'free' is a matter of liberty, not price!</h1>

          <p
            class="g-section-body mt-4"
            style="width: 75%;"
          >We respect an individual human’s freedom and community by orienting our software to the <a
              class="link-freedoms"
              href="https://www.gnu.org/philosophy/free-sw.en.html"
            >Free Software Foundation's essential freedoms.</a></p>

        </div>
      </div>
    </section> -->
    <section class="container pt-5">
      <h1 class="g-section-heading pl-3 mb-5">What have we built?</h1>
      <div class="container px-0 pb-5">
        <div class="justify-content-space-between align-items-center">

          <div class="col-lg">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/ImxxRMPVHzs"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-0 mt-5">
        <div class="justify-content-space-between align-items-center">

          <div class="col-lg mb-5">
            <h1 class="g-section-project-heading">Material Math</h1>
            <div class="d-flex align-items-center g-section-info">Status: <span
                style="background-color:#FF3366;"
                class="status-dot"
              ></span>Live Alpha</div>
            <p class="g-section-body mt-4">The spiritial successor to Boltz on Android, Material Math brings unlimited mental math practice in a fun, beautiful interface to the web!</p>
            <div class="d-flex mt-5">
              <b-button
                size="lg"
                class="g-btn mr-4"
                href="https://material-math.netlify.app"
                target="_blank"
              >
                <fa-icon
                  class="mr-2"
                  :icon="['fas', 'play']"
                ></fa-icon>Live Demo
              </b-button>
              <b-button
                size="lg"
                class="g-btn-alt"
                href="https://github.com/grey-software/material-math"
                target="_blank"
              >
                <fa-icon
                  class="mr-2"
                  :icon="['fab', 'github']"
                ></fa-icon>Repository
              </b-button>
            </div>
          </div>
          <div class="col-lg">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/ceACiAdXSDc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-0 mt-5">
        <div class="justify-content-space-between align-items-center">

          <div class="col-lg mb-5">
            <h1 class="g-section-project-heading">LinkedInFocus</h1>
            <div class="d-flex align-items-center g-section-info">Status: <span
                style="background-color:#ffcc00;"
                class="status-dot"
              ></span>Unofficial Release</div>
            <p class="g-section-body mt-4">A web extension that allows you to hide the news feed and news panel on LinkedIn so you can focus on your career!</p>
            <div class="d-flex mt-5">
              <b-button
                size="lg"
                class="g-btn mr-4"
                href="https://github.com/grey-software/LinkedInFocus/releases/tag/0.01"
                target="_blank"
              >
                <fa-icon
                  class="mr-2"
                  :icon="['fas', 'box-open']"
                ></fa-icon>Latest Release
              </b-button>
              <b-button
                size="lg"
                class="g-btn-alt"
                href="https://github.com/grey-software/material-math"
                target="_blank"
              >
                <fa-icon
                  class="mr-2"
                  :icon="['fab', 'github']"
                ></fa-icon>Repository
              </b-button>
            </div>
          </div>
          <div class="col-lg">
            <img
              style="width: 100%;"
              src="https://github.com/grey-software/LinkedInFocus/raw/master/after.png"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

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
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: calc(12px + 5vw);
  line-height: 1.05;
  z-index: 1000;
}

.g-section-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
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
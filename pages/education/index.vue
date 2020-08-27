<template>
  <div class="pb-5">
    <div class="container g-hero mt-5">
      <div class="row">
        <div class="col-md-8">
          <h1 class="g-hero-heading">
            A New
            <br />Learning Experience
          </h1>
          <p
            class="g-hero-tag"
          >We're revolutionizing software education by pairing students with a mentor to build useful and creative open source software.</p>
          <div class="g-hero-cta-container">
            <a href="https://tiny.cc/gs-bm">
              <b-button size="lg" class="mr-4 g-btn-cta">Our Proposed Model</b-button>
            </a>
          </div>
        </div>

        <div class="col-md-4">
          <img class="g-hero-img" src="@/assets/img/open-source.svg" />
        </div>
      </div>
    </div>

    <section class="container mt-5 pl-4 pb-5">
      <h1 class="g-section-heading">
        What do our
        <br />students have
        <br />to say?
      </h1>
      <div class="row mt-5">
        <div class="col" style="padding-left: 20px">
          <h1
            style="max-width: 84%;"
            class="g-text-testimonial mt-5"
          >“I have been programming on the side for the past year now, mainly using online resources to pair program... yet one session with my mentor was more enriching than hours spent on these side tutorials.”</h1>
          <p class="g-section-body mt-4">
            Osama -
            <span class="font-italic">Grey Software Explorer</span>
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col" style="padding-right: 20px;text-align:right;">
          <h1
            class="g-text-testimonial mt-5"
          >“I got to experience what it was like being onboarded into a codebase and collaborating with a skilled developer and designer. I got the software development education I was looking for."</h1>
          <p class="g-section-body mt-4" style="max-width: 100%;">
            Milind -
            <span class="font-italic">Grey Software Apprentice</span>
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col" style="padding-left: 20px">
          <h1
            style="max-width: 84%;"
            class="g-text-testimonial mt-5"
          >“I built a collection of real web components that I would see when browsing the web. I was empowered to be a web developer and start creating my own websites.”</h1>
          <p class="g-section-body mt-4">
            Nina -
            <span class="font-italic">Web Portfolio Program</span>
          </p>
        </div>
      </div>
    </section>
    <section class="container mt-5 pb-5 pl-4">
      <h1 class="g-section-heading">What we offer</h1>
      <div class="row mt-5">
        <div class="col-md" style="height:434px;">
          <img class="three-col-icon" src="@/assets/icons/explorer.svg" />
          <h1 class="three-col-heading mt-5" style="height:88px;">Explorer</h1>
          <p
            class="three-col-body mt-2"
          >Bring your creative app ideas to life with less chaos and more clarity with the Grey Software Explorer service!</p>
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
        <div class="col-md" style="height:434px;">
          <img class="three-col-icon" src="@/assets/icons/apprentice.svg" />
          <h1 class="three-col-heading mt-5" style="height:88px;">Apprentice</h1>
          <p
            class="three-col-body mt-2"
          >Contribute to established open source software with guidance and structure from a Grey Software mentor!</p>
          <div class="mt-4">
            <a href="apprentice">
              <b-button
                  size="sm"
                  class="mr-4 g-btn d-flex align-items-center"
                  target="_blank"
                >
                Check it out!
              </b-button>
            </a>
          </div>
        </div>
        <div class="col-md" style="height:434px;">
          <img class="three-col-icon" src="@/assets/icons/web-portfolio.svg" />
          <h1 class="three-col-heading mt-5" style="height:88px;">Web Portfolio</h1>
          <p
            class="three-col-body mt-2"
          >Learn the technologies that power the web with an instructor as you build a portfoilio of web components!</p>
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
  </div>
</template>

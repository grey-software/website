<template>
  <div class="pb-5">
    <!-- Hero Section -->
    <div class="container g-hero mt-5">
      <div class="row">
        <div class="col-md-8">
          <h1 class="g-hero-heading">
            Apprentice Program
            <br />
          </h1>
          <p
            class="g-hero-tag"
          >The apprentice program offers you the opportunity to learn software development by contributing to open source apps as an engineer, designer, or product manager with guidance and structure from a mentor</p>
        </div>

        <div class="col-md-4">
          <img class="g-hero-img" src="@/assets/icons/apprentice.svg" />
        </div>
      </div>
    </div>
    <div class="container">
      <!-- Problems -->
      <h1 class="mt-5 mb-3 g-hero-heading">The Problem</h1>
      <Rc1X3 :children="problems"></Rc1X3>
      <Testimonial
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        :desc="testimonial.desc"
        :name="testimonial.name"
        :imgSrc="testimonial.imgSrc"
        :aboutPerson="testimonial.aboutPerson"
      />

      <!-- Solutions -->
      <h1 class="mt-5 mb-3 g-hero-heading">Our Solution</h1>
      <p
        class="g-hero-tag"
      >Grey Software developed the apprentice program as an internship alternative to student software developers. You'll collaborate on open source software with structure and guidance from a mentor, and walk away with valuable skills and a public demonstration of your work that you can take anywhere.</p>
      <div class="g-hero-cta-container mb-3">
        <a href="/projects">
          <b-button size="lg" class="mr-4 g-btn-cta">Our Apprentice Projects</b-button>
        </a>
      </div>
      <Rc1X2
        v-for="solution in solutions"
        :key="solution.title"
        :title="solution.title"
        :imgSrc="solution.icon"
        :desc="solution.desc"
        :reverse="solution.reverse"
      />

      <!-- Features -->
      <h1 class="mt-5 mb-3 g-hero-heading">Features</h1>
      <Rc2X3 :children="features"></Rc2X3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      problems: [
        {
          desc:
            "Formal education doesn't to prepare you for the world's software ecosystem.",
          icon: "/apprentice/training.svg",
        },
        {
          desc:
            "Students crave real-world software development experience, because it plays an important role when they’re recruited into the modern tech economy.",
          icon: "/apprentice/coding.svg",
        },
        {
          desc:
            "They also need guidance and structure as they gain this experience.",
          icon: "/apprentice/mentor.svg",
        },
      ],
      solutions: [
        {
          title: "Contribute to Production Software",
          desc:
            "You'll work on open source apps that Grey Software deploys, and that users interact with.",
          icon: "/apprentice/software-development.svg",
        },
        {
          title: "Access to a mentor",
          desc:
            "Your mentor's goal is to help you grow as an open source software developer. They help you by attending live collaboration sessions, answering questions, reviewing code, and structuring your learning experience.",
          icon: "/apprentice/teacher.svg",
          reverse: true,
        },
        {
          title: "Collaborative and Educational",
          desc:
            "In addition to a mentor, you'll collaborate with other students working on the same project(s) as you.",
          icon: "/apprentice/programmer.svg",
        },
      ],
      features: [
        {
          title: "Cutting Edge Tech",
          desc:
            "Grey Software works with the technologies of the future. We'll match you with a project that lets you use the tools you're proficient or interested in.",
          icon: "/apprentice/technology-products.svg",
        },
        {
          title: "More than Code",
          desc:
            "You'll get a chance to explore your potential as a designer or product owner, and gain a well-rounded set of skills.",
          icon: "/apprentice/code.svg",
        },
        {
          title: "Designed to be remote",
          desc:
            "Founded during the COVID-19 pandemic, the apprentice program was designed to be remote. Our first 3 students were learning from Canada, India, and Indonesia!",
          icon: "/apprentice/global.svg",
        },
        {
          title: "Financially Empthetic",
          desc:
            "We're considerate of your financial background, and are open to adjusting our rates or creating customized programs that require you to give back as a mentor after you graduate.",
          icon: "/apprentice/loan.svg",
        },
        {
          title: "Made for learning",
          desc:
            "The apprentice program was designed to help budding software developers learn by contributing to software that matters, so your education always comes before the project.",
          icon: "/apprentice/online-course.svg",
        },
        {
          title: "Public Portfolio Upgrade",
          desc:
            "You'll graduate from the program with a software project(s) to put on your portfolio, and a public log of your Github contributions for employers to look at.",
          icon: "/apprentice/portfolio.svg",
        },
      ],
      testimonials: [
        {
          name: "Brian",
          desc:
            "“As an individual project, you are required to know every aspect of the component including frontend, backend, etc. As a result of that, for most students...they have a significant knowledge gap to fill. This preparation process can be time-consuming and discouraging.”",
          imgSrc:
            "https://avatars2.githubusercontent.com/u/40159724?s=400&u=188927381ec82ee1f5fb0440a1b0b17a1d9d5787&v=4",
          aboutPerson: "Mathematics Specialist at UTM",
        },
        {
          imgSrc:
            "https://avatars2.githubusercontent.com/u/36747253?s=400&u=da5cc6b6d730e695dbd20283940e561baa7acf20&v=4",
          name: "Shawn",
          desc:
            "“Even though tons of youtube videos are available, it’s a different experience to have someone that understands what you are going through to guide you in the project.”",
          aboutPerson: "Computer Science Specialist at UTM",
        },
        {
          imgSrc:
            "https://avatars2.githubusercontent.com/u/40159724?s=400&u=188927381ec82ee1f5fb0440a1b0b17a1d9d5787&v=4",
          name: "Baichen",
          desc:
            "“Without having the assistance whenever we need it, we had to spend hours googling and asking online.”",
        },
      ],
    };
  },
};
</script>
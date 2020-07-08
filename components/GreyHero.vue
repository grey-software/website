<template>
  <div class="g-landing">
    <div class="g-hero">
      <h1 class="g-hero-heading text-rainbow">Liberty & Excellence <br/>in Software.</h1>
      <p class="g-hero-tag">A mission to write Free, Open Source Software. </p>

      <b-link href="#">
        <a class="btn neu-dark">PROJECTS</a>
      </b-link>
    </div>

    <!-- MORE -->
    <div class="more-indicator animation-more mt">
      <p>MORE</p>
      <fa-icon
        class="mr-2"
        :icon="['fas', 'chevron-down']"
      ></fa-icon>
    </div>

    <div class="free-software">
      <h1 class="g-hero-heading">Free Software.</h1>
      <h1 class="g-hero-heading" style="color:#FE5C26;"> A matter of liberty, <br/>not price!</h1>

      <p
        class="g-section-body mt-4"
        style="width: 75%;"
        >We respect an individual human’s freedom and community by orienting our software to the <a
        class="link-freedoms"
        href="https://www.gnu.org/philosophy/free-sw.en.html"
      >Free Software Foundation's essential freedoms.</a>
      </p>

    </div>
  </div>




</template>

<script>
export default {
  components: {
  }
};
</script>

<style scoped>
.g-landing {
  margin: 0 120px;
}
.text-rainbow {
  color: red;
  background-image: -webkit-linear-gradient(92deg,red,yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
  font-size:70px;
  font-weight:300;
}
@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
.g-hero {
  text-align: center;
  padding: 140px 40px 80px 40px;
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
.g-hero-tag {
  font-size: 20px;
  color: lightslategrey;
  letter-spacing: -0.032em;
  line-height: 1.5;
  padding: 0px 0 40px 0;
  text-align: center;
}
.btn {
  z-index: 1;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.3s ease;
  font-weight: bold;
  border: none;
  color: white;
}
.neu-dark {
  box-shadow:
    10px 10px 20px rgba(0, 0, 0, 0.2),
    -6px -6px 10px rgba(255, 255, 255, 0.1);
}
.neu-dark:active {
  box-shadow:
    inset 5px 5px 10px rgba(0, 0, 0, 0.2),
    inset -5px -5px 10px rgba(255, 255, 255, 0.1);
}
/* ----------- MORE INDICATOR ------------ */
.more-indicator{
  text-align: center;
  font-size: 13px;
  padding: 40px 40px;
  margin-top: 90px;
  opacity: 0;
  color: white;
  font-weight: bold;
}
.mt{
  margin-top: 50px;
}
/* ANIMATE */
.animation-more{
  animation-name: drive;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
}
/* KEYFRAMES */
@keyframes drive{
  from{
    transform: translateY(0);
    opacity: 0
  }
  to{
    transform: translateY(15px);
    opacity: 1
  }
}
.free-software {
  padding: 140px 0;
}
.g-section-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: calc(12px + 6vw);
  line-height: 1.05;
  z-index: 1000;
}
.g-section-subheading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
  font-size: calc(12px + 3vw);
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
.g-hero-img {
  height: 343px;
  opacity: 0.96;
  margin-right: -42px;
  float: right;
}
.g-hero-cta-container {
  margin-top: 48px;
}
@media screen and (max-width: 768px) {
  .g-hero-img {
    float: left;
  }
  /* .two-col-heading {
    font-size: 32px;
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.05;
  }
  .two-col-icon {
    height: 64px;
  }
  .two-col-body {
    font-size: 16px;
    width: 236px;
  } */
}
@media screen and (max-width: 992px) {
  .g-hero-img {
    height: 236px;
    opacity: 0.96;
    margin-right: -42px;
  }
  .g-hero-heading {
    font-size: calc(12px + 4vw);
    line-height: 1.05;
    z-index: 1000;
  }
  .g-section-heading {
    font-size: calc(12px + 4vw);
    line-height: 1.05;
    z-index: 1000;
  }
  .g-hero-tag {
    font-size: 22px;
  }
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
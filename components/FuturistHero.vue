<template>
  <div class="g-landing">
    <div class="g-hero">
      <p class="g-hero-tag">Propose, Fund, & Work.</p>
      <h1 class="g-hero-heading">
        Crowdsourcing
        <br />the <span class="text-rainbow">Future.</span>
      </h1>

      <div class=" btn">
        <b-link class="neumorphism-3" href="#">
          <a style="color:white;">Join Now</a>
        </b-link>
      </div>

      <!-- MORE INDICATOR -->
      <div class="more-indicator animation-more mt">
        <p>MORE</p>
        <fa-icon :icon="['fas', 'angle-double-down']"></fa-icon>

      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .g-landing {
  margin: 0 120px;
}
.text-rainbow {
  color: red;
  background-image: -webkit-linear-gradient(92deg, red, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
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
  padding: 80px 40px;
}
.g-hero-heading {
  font-weight: 800;
  font-family: var(--font-heading);
  color: white;
  letter-spacing: -0.025em;
  font-size: calc(12px + 5vw);
  line-height: 1.05;
  z-index: 1000;
  padding: 0 0 80px 0;
}
.g-hero-tag {
  font-size: 18px;
  color: lightslategrey;
  letter-spacing: -0.032em;
  line-height: 1.5;
  padding: 0px 0 40px 0;
  text-align: center;
  padding: 0;
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
.btn :hover{
  text-decoration: none;
}
  .neumorphism-3 {
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 200px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8),
    -6px -6px 10px rgba(255, 255, 255, 0.1);
    position: relative;

  }
  .neumorphism-3:after {
    content: '';
    border-radius: 30px;
    position: absolute;
    height: 75%;
    width: 95%;
    background-color: transparent;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.8),
    inset -5px -5px 10px rgba(255, 255, 255, 0.1);
  }


/* ----------- MORE INDICATOR ------------ */
.more-indicator {
  text-align: center;
  font-size: 14px;
  padding: 40px 40px;
  opacity: 0;
  color: white;
  font-weight: bold;
}
.mt {
  margin-top: 20px;
}
/* ANIMATE */
.animation-more {
  animation-name: drive;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
}
/* KEYFRAMES */
@keyframes drive {
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(15px);
    opacity: 1;
  }
}
</style>

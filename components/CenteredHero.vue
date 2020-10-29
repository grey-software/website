<template>
  <div class="container g-hero mt-5">
    <div class="row d-flex justify-center">
      <img :src="icon" alt="Grey Software's Icon" class="hero-img" />
    </div>
    <div class="mt-3 mt-md-4 mt-lg-5 flex flex-column align-items-center">
      <div class="col-lg-10 text-center">
        <h1 class="hero-heading">{{ title }}</h1>
        <p class="hero-tag">{{ desc }}</p>
      </div>
    </div>
    <a href="#projects" class="row d-flex justify-center">
      <img class="bounce" id="arrow" src="/icons/arrow.svg" alt="Down Arrow"
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    desc: String,
    title: String,
    button1: {
      label: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
    },
    button2: {
      label: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
    },
  },
  computed: {
    gtmd() {
      if (this.$mq === 'sm' || this.$mq === 'xs' || this.$mq === 'md')
        return 'md'
      return 'lg'
    },
  },
}
</script>

<style scoped>
.btn-cta {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
  outline: none;
  font-size: 1.42rem;
}

.btn-cta:active {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
}

.btn:hover,
.btn-cta:hover {
  color: var(--color-gold-light) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
}

.btn-cta-alt {
  color: var(--color-gold) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
  outline: none;
  font-size: 1.42rem;
}

.g-btn-cta-alt:hover {
  background-color: var(--color-gold) !important;
  color: #fff !important;
}

.hero-heading {
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--color-text-dark);
  letter-spacing: 0.025em;
  font-size: calc(12px + 4vw);
  line-height: 1.05;
}

.hero-tag {
  font-size: 32px;
  color: var(--color-text);
  letter-spacing: -0.032em;
  line-height: 1.5;
  margin-top: 32px;
}

.btn-icon {
  width: 24px;
  height: 24px;
}

.hero-img {
  width: 200px;
}

#arrow {
  width: 75px;
  position: absolute;
  bottom: 50px;
}

@media screen and (max-width: 992px) {
  .hero-heading {
    font-size: calc(12px + 8vw);
    line-height: 1.05;
    z-index: 1000;
  }

  .hero-tag {
    font-size: 20px;
  }

  .hero-img {
    width: 100px;
  }

  #arrow {
    width: 50px;
    bottom: 25px;
  }
}

.bounce {
  -webkit-animation: bounce 0.75s infinite;
}

@-webkit-keyframes bounce {
  25% {
    transform: scale(1, 0.9) translate(0, 0);
  }

  75% {
    transform: scale(1, 1) translate(0, -10px);
  }
}

@media screen and (max-width: 992px) {
  #arrow {
    width: 60px;
  }
}

@media (max-width: 576px) {
  #arrow {
    width: 50px;
    bottom: 25px;
  }
}
</style>

<template>
  <div class="container nav g-header pt-4">
    <input
      type="checkbox"
      id="nav-check"
      v-model="checked"
    >
    <div class="nav-header">
      <nuxt-link
        class="d-flex align-items-center ml-1"
        to="/"
        @click.native="checked = false"
      >
        <img
          class="logo"
          src="../assets/logo.png"
        />
        <span class="logo-text">Grey Software</span>
      </nuxt-link>

    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <nuxt-link
        @click.native="checked = false"
        to="/projects"
        class="g-nav-link mr-4"
      >Projects</nuxt-link>
      <nuxt-link
        @click.native="checked = false"
        to="/education"
        class="g-nav-link mr-4"
      >Education</nuxt-link>
      <a
        @click.native="checked = false"
        target="_blank"
        href="https://www.github.com/grey-software"
        class="g-nav-link mr-4"
      >Github</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    }
  },
}
</script>

<style scoped>
.g-header {
  height: 12vh;
}
.logo {
  height: 48px;
  width: 48px;
  margin-right: 16px;
}
.logo-text {
  font-size: 26px;
  color: var(--color-text);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

.g-nav-link {
  font-size: 1.125rem;
  color: var(--color-text);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}
</style>

<style>
.nav {
  width: 100%;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  margin-left: auto;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    float: right;
    align-self: end;
    margin-left: auto;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
    border-radius: 8px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 42%%;
    background-color: #333;
    border-radius: 6px;
    transition: all 0.2s ease-out;
    overflow-y: hidden;
    top: 50px;
    right: 50px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
    padding-left: 16px;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    opacity: 0;
  }
  .nav > #nav-check:checked ~ .nav-links {
    overflow-y: auto;
    opacity: 1;
  }
}
</style>
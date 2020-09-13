<template>
  <div class="container nav g-header pt-4 flex align-items-center">
    <input
      type="checkbox"
      id="nav-check"
      v-model="checked"
    />
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
        class="g-nav-link nav-link mr-4"
      >Projects</nuxt-link>
      <nuxt-link
        @click.native="checked = false"
        to="/education"
        class="g-nav-link nav-link mr-4"
      >Education</nuxt-link>
      <nuxt-link
        @click.native="checked = false"
        to="/blog"
        class="g-nav-link nav-link mr-4"
      >Blog</nuxt-link>
      <a
        target="_blank"
        href="https://github.com/sponsors/grey-software"
        class="btn-github-sponsors mx-3 my-3"
      ><svg
          class="icon-github-sponsors"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            fill="#ea4aaa"
            d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"
          ></path>
        </svg><span>Sponsor</span></a>
      <b-btn
        target="_blank"
        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VEAGAZP7DHJNE&source=url"
        class="g-btn paypal-btn d-flex align-items-center my-3 mx-3"
      ><img
          class="paypal-icon mx-2"
          src="@/assets/icons/paypal.png"
        />Donate</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    };
  }
};
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

.btn-github-sponsors {
  width: 116px;
  color: #24292e;
  background-color: #fafbfc;
  border-color: rgba(27, 31, 35, 0.15) !important;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  height: fit-content;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid;
  border-radius: 6px;
  appearance: none;
  font-family: BlinkMacSystemFont, Segoe UI, Helvetica, Arial;
}

.btn-github-sponsors:hover {
  color: #24292e;
}

.icon-github-sponsors {
  margin-right: 8px;
  vertical-align: text-bottom;
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

.nav-links {
  display: flex;
  align-items: center;
  float: right;
  margin-left: auto;
  font-size: 18px;
}

.nav > #nav-check {
  display: none;
}

.nav-link {
  letter-spacing: 0;
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  height: fit-content;
  color: #efefef;
  transition: all 0.3s ease-out;
}

.nav-link:hover,
.nav-link:active {
  letter-spacing: 2px;
  transform: translateY(-6px);
}

@media (max-width: 768px) {
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
  .nav-links {
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
  .nav-link {
    display: block;
    width: 100%;
    padding-left: 16px;
    transition: none;
  }

  .nav-link:hover,
  .nav-link:active {
    letter-spacing: 0;
    transform: none;
  }

  .nav > #nav-check:not(:checked) ~ .nav-links {
    opacity: 0;
    z-index: -1;
  }
  .nav > #nav-check:checked ~ .nav-links {
    overflow-y: auto;
    opacity: 1;
    z-index: 2;
  }
}

.paypal-icon {
  width: 24px;
  height: 24px;
}

.paypal-btn {
  height: 52px;
  width: 132px;
  border-radius: 32px;
}


</style>

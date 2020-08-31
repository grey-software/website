<template>
  <div>
    <grey-nav-bar></grey-nav-bar>
    
    <nuxt />
  </div>
</template>

<script>
export default {
  created () {
    if (process.client) {
      document.addEventListener("keyup", e => {
        if (e.key == "d") {
          [].forEach.call(document.querySelectorAll("*"), function (a) {
            a.style.outline =
              "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
          });
        }
      });
    }
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: unset;
}

a:hover {
  text-decoration: none;
  color: unset;
}

:root {
  --color-text: #fcfcfc;
  --color-text-dark: #fcfcfc;
  --bg: #2d3748;
  --border-color: #ddd;
  --color-gold: #b29a66;
  --color-gold-light: rgba(178, 154, 102, 0.8);
  --font-heading: "Montserrat", sans-serif;
  --font-body: "Nunito Sans", sans-serif;
}

body {
  font-family: var(--font-body) !important;
  background-color: var(--bg);
  color: var(--color-text);
  transition: background-color 0.3s;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
}

.g-btn {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
  outline: none;
  font-size: 1.2rem;
}

.g-btn-alt {
  color: var(--color-gold) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
  outline: none;
  font-size: 1.2rem;
}

.g-btn-cta {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
  outline: none;
  padding: 1rem 2.5rem;
  font-size: 1.42rem;
}

.g-btn:active,
.g-btn-cta:active {
  background-color: var(--color-gold) !important;
  border-color: var(--color-gold) !important;
}

.g-btn:hover,
.g-btn-cta:hover {
  color: var(--color-gold-light) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
}

.g-btn-cta-alt {
  color: var(--color-gold) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-light) !important;
  outline: none;
  padding: 1rem 2.5rem;
  font-size: 1.42rem;
}

.g-btn-alt:hover,
.g-btn-cta-alt:hover {
  background-color: var(--color-gold) !important;
  color: #ffffff !important;
}

.flex-col {
  display: flex;
  flex-direction: column;
}
</style>



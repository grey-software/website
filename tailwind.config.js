/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    spacing: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      5: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '64px',
      8: '72px',
      9: '96px',
      10: '128px',
      11: '192px',
      12: '256px',
      13: '384px',
      14: '512px',
      15: '640px',
      16: '768px',
      '88vh': '88vh',
      '24px': '24px',
      '32px': '32px',
      '48px': '48px',
      '64px': '64px',
      '72px': '72px',
      '96px': '96px',
    },
    screens: {
      't-screen-phone': {max: '599px'},
      't-screen-tablet-portrait': {min: '600px'},
      't-screen-tablet-landscape': {min: '900px'},
      't-screen-pc:': {min: '1200px'},
      't-screen-wide-pc': {min: '1800px'},
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },

  prefix: 't-',
}

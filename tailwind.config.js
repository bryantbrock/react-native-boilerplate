module.exports = {
  content: [
    './*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins')
}

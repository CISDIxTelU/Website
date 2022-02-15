module.exports = {
  enabled: true,
  mode: 'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    text: {
      xl: ['24px', '26px'],
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

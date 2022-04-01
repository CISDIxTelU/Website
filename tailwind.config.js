module.exports = {
  enabled: true,
  mode: 'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      text: {
        xl: ['20px', '26px'],
      },
      colors: {
        'card-task' : '#F6F9FF',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

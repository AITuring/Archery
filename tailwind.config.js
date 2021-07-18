module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   amber: colors.amber,
      //   sky: colors.sky,
      //   lime: colors.lime,
      //   rose: colors.rose,
      //   orange: colors.orange,
      // }
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
      link: 'var(--color-link)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

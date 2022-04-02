module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 3,
      autoprefixer: {
        grid: "autoplace",
      },
      cssnano: {
        preset: "default",
      },
    },
    "postcss-flexbugs-fixes": {},
  }
}
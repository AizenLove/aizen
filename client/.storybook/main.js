const { resolve } = require('path')

module.exports = {
  "stories": ["../src/**/*.stories.@(ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config) {
    return {
      ...config,
      alias: {
        "~": resolve(".", "src"),
      },
    };
  },
};
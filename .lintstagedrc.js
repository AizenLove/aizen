module.exports = {
  "**/*.{ts,tsx,js,json,md,yml,yaml}": ["prettier --write"],
  "**/*.{ts,tsx}": ["eslint --cache --fix"],
};

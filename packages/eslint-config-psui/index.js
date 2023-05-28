module.exports = {
  extends: [
    "next/core-web-vitals",
    "turbo",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort", "sort-destructure-keys"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
    "react/jsx-key": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-destructure-keys/sort-destructure-keys": 2,
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.js",
    },
  },
};

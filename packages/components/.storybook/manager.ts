import { addons } from "@storybook/manager-api";

import { create } from "@storybook/theming";
import logo from "../../../docs/psui_logo.webp";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "PSUI",
    brandImage: logo,
  }),
});

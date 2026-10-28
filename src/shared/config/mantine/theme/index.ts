import { createTheme } from "@mantine/core";

import { components } from "./components";

export const themeFactory = () =>
  createTheme({
    components,
    primaryColor: "orange",
  });

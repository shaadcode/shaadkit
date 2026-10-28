import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";
import storybook from "ultracite/oxlint/storybook";
import tanstack from "ultracite/oxlint/tanstack";
import vitest from "ultracite/oxlint/vitest";

export default defineConfig({
  env: core.env,
  extends: [core, react, tanstack, next, storybook, vitest],
  ignorePatterns: core.ignorePatterns,
  options: { typeAware: false },
  rules: {
    "typescript/ban-ts-comment": "off",
    "unicorn/filename-case": "off",
    "typescript/no-unsafe-type-assertion": "off",
    "typescript/dot-notation": "off",
  },
});

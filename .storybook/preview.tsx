import { DirectionProvider, MantineProvider } from "@mantine/core";
import type { Decorator } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";
import type { Context } from "storybook/internal/telemetry";

import { themeFactory } from "@/shared/config/mantine/theme";
import messages from "@/shared/config/nextIntl/messages";
import { routing } from "@/shared/config/nextIntl/routing";

import "@mantine/core/styles.css";
import { getDir } from "@/shared/lib/nextIntlExtended";

import "./../app/[locale]/globals.css";

const theme = themeFactory();
const getStorybookLocale = (ctx: Context) =>
  // oxlint-disable-next-line typescript/no-unsafe-member-access
  (ctx["globals"]["locale"] as typeof routing.defaultLocale) ||
  routing.defaultLocale;

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "color scheme",
    defaultValue: "light",
    toolbar: {
      icon: "mirror",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
  locale: {
    toolbar: {
      icon: "globe",
      items: [
        {
          value: "en",
          title: "English",
        },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const locale = getStorybookLocale(context);
    const direction = getDir(locale);
    const localeMessages = messages[locale];
    const scheme = (context.globals["theme"] ?? "light") as "light" | "dark";
    const isDisableForceColorScheme = context.parameters[
      "disableForceColorScheme"
    ] as boolean;
    return (
      <NextIntlClientProvider locale={locale} messages={localeMessages}>
        <DirectionProvider detectDirection={false} initialDirection={direction}>
          <MantineProvider
            deduplicateInlineStyles
            classNamesPrefix="shaadkit"
            theme={theme}
            forceColorScheme={isDisableForceColorScheme ? undefined : scheme}
          >
            <Story />
          </MantineProvider>
        </DirectionProvider>
      </NextIntlClientProvider>
    );
  },
] as Decorator[];

export const parameters = {
  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: "todo",
  },
};

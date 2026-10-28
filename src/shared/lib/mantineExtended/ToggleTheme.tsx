"use client";

import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import type { ComponentProps } from "react";

interface Props {
  button?: ComponentProps<typeof ActionIcon<"div">>;
}
const ThemeToggle = (props: Props) => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const colorSchemeWithoutAuto = colorScheme === "auto" ? "light" : "dark";
  return (
    <Tooltip
      label={colorSchemeWithoutAuto === "dark" ? "Light mode" : "Dark mode"}
      withArrow
    >
      <ActionIcon
        onClick={toggleColorScheme}
        variant="default"
        size="lg"
        radius="xl"
        aria-label="Toggle color scheme"
        {...props.button}
      >
        {colorSchemeWithoutAuto === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoon size={18} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};

export default ThemeToggle;

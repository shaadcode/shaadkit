import type { Direction } from "@mantine/core";
import type { ReactNode } from "react";

import ClientProviders from "./client";
import ServerProviders from "./server";

interface Props {
  children: ReactNode;
  direction: Direction;
}

const AppProviders = ({ children, ...props }: Props) => (
  <ServerProviders direction={props.direction}>
    <ClientProviders>{children}</ClientProviders>
  </ServerProviders>
);

export default AppProviders;

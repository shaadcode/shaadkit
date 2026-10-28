"use client";

import { Anchor } from "@mantine/core";
import type { ComponentProps } from "react";

import { Link } from "@/shared/config/nextIntl/navigation";

type Props = ComponentProps<typeof Anchor<"a">> & ComponentProps<typeof Link>;

const ClientLink = ({ children, ...props }: Props) => (
  <Anchor {...props} component={Link}>
    {children}
  </Anchor>
);

export default ClientLink;

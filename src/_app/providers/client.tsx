"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

import { rootQueryClient } from "@/shared/config/tanstackQuery";

interface Props {
  children: ReactNode;
}

const queryClient = rootQueryClient();

const ClientProviders = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ClientProviders;

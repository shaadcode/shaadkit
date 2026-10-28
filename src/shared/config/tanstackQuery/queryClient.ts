import { QueryClient } from "@tanstack/react-query";

export const rootQueryClient = () => {
  const queryClient = new QueryClient();

  return queryClient;
};

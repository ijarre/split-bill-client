import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { AuthProvider } from "./AuthProvider";

interface RootProviderProps {
  children: JSX.Element;
}

export const RootProvider = ({ children }: RootProviderProps) => {
  const router = useRouter();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          const err = error as AxiosError;
          if (err.isAxiosError === true && err.response?.status === 401) {
            router.push("/login");
            return false;
          }
          if (failureCount > 2) return false;
          console.log(failureCount);
          return true;
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
};

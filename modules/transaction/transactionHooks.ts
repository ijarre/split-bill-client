import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getUserTransaction } from "./transactionService";

export const useGetUserTransaction = (options?: UseQueryOptions<unknown, unknown, unknown, Array<string>>) => {
  return useQuery(["userTransaction"], () => getUserTransaction(), options);
};

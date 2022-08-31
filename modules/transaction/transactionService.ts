import { AxiosRequestConfig } from "axios";
import api from "../../shared/api";
import { GetUserTransactionResponse } from "./transactionEntity";

export const getUserTransaction = async (config?: AxiosRequestConfig) => {
  return (await api.get<GetUserTransactionResponse>("/transaction/getUserTransaction", config)).data;
};

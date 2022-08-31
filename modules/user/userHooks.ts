import { UseMutateFunction, useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { User } from "../shared/entity";
import { CreateUserRequest, CreateUserResponse, LoginUserRequest, MeQueryResponse } from "./userEntity";
import { loginUser, me, registerUser } from "./userSevice";

export const useRegister = (options?: UseMutationOptions<CreateUserResponse, unknown, CreateUserRequest>) => {
  return useMutation((payload) => registerUser(payload), options);
};

export const useLogin = (options?: UseMutationOptions<{ message: string; user: User }, unknown, LoginUserRequest>) => {
  return useMutation((payload) => loginUser(payload), options);
};

export const useMeQuery = (options?: UseQueryOptions<MeQueryResponse, unknown, MeQueryResponse, Array<string>>) => {
  return useQuery(["meQuery"], () => me(), options);
};

import api from "../../shared/api";
import { User } from "../shared/entity";
import { CreateUserRequest, CreateUserResponse, LoginUserRequest, MeQueryResponse } from "./userEntity";

export const registerUser = async (payload: CreateUserRequest): Promise<CreateUserResponse> => {
  return (await api.post<CreateUserResponse>("/user/create", payload)).data;
};

export const loginUser = async (payload: LoginUserRequest) => {
  return (await api.post<{ message: string; user: User }>("/user/login", payload)).data;
};

export const me = async () => {
  return (await api.get<MeQueryResponse>("/user/me")).data;
};

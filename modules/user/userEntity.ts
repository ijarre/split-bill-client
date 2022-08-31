export interface CreateUserRequest {
  balance?: number | undefined;
  email: string;
  password: string;
  username: string;
}

export interface CreateUserResponse {
  user_id: string;
}
interface Me {
  username: string;
  user_id: string;
  email: string;
}
export type MeQueryResponse = { loggedIn: false } | { loggedIn: true; user: Me };

export interface LoginUserRequest {
  usernameOrEmail: string;
  password: string;
}

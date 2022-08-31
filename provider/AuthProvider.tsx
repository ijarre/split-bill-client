import { useRouter } from "next/router";
import { createContext, Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { User } from "../modules/shared/entity";
import { useMeQuery } from "../modules/user/userHooks";

interface Props {
  children: JSX.Element;
}
type AuthState = { isLoggedIn: boolean; currentUser?: User };

export const AuthContext = createContext<{ auth: AuthState; setAuth: (() => void) | Dispatch<SetStateAction<AuthState>> }>({
  auth: { isLoggedIn: false },
  setAuth: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const publicPaths = ["login", "register"];
  const makeRegex = (arr: string[]): RegExp[] => {
    return arr.map((str) => new RegExp(str));
  };
  const { data: currentUser, isLoading } = useMeQuery({
    staleTime: Infinity,
  });

  const isMatchRegex = (url: string, regexes: RegExp[]): boolean => {
    for (const regex of regexes) {
      if (url.match(regex)) return true;
    }

    return false;
  };

  useEffect(() => {
    if (currentUser?.loggedIn) {
      setAuth({ isLoggedIn: true });
    }
    //public path check
    if (isMatchRegex(router.asPath, makeRegex(publicPaths))) {
      setAuth({ isLoggedIn: true });
    }
    if (!isLoading && !currentUser?.loggedIn) {
      router.push("/login");
    }
  }, [router.asPath, currentUser]);

  const [auth, setAuth] = useState<AuthState>({
    isLoggedIn: false,
  });

  const value = useMemo(() => ({ auth, setAuth }), [auth]);
  if (isLoading) return <h1>Loading user...</h1>;

  return <AuthContext.Provider value={value}>{auth.isLoggedIn ? children : null}</AuthContext.Provider>;
};

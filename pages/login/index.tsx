import { NextPage } from "next";
import { LoginContainer } from "../../ui/login/LoginContainer";

interface LoginProps {}

const Login: NextPage<LoginProps> = (props) => {
  return <LoginContainer />;
};

export default Login;

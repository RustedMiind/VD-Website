import { AuthDialogType } from "contexts/Auth";
import Login from "./tabs/login/Login";
import Register from "./tabs/register/Register";

function LoginRegister(props: PropsType) {
  switch (props.type) {
    case "login":
      return <Login open={props.open} onClose={props.onClose} />;

    case "register":
      return <Register open={props.open} onClose={props.onClose} />;

    default:
      return <></>;
  }
}

type PropsType = {
  open: boolean;
  onClose: () => void;
  type: AuthDialogType;
};

export default LoginRegister;

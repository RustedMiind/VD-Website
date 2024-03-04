import { AuthDialogType } from "contexts/Auth";
import Login from "./tabs/login/Login";
import Register from "./tabs/register/Register";

function LoginRegister(props: PropsType) {
  switch (props.type) {
    case "login":
      return (
        <Login
          redirectTo={props?.redirectTo}
          unAbaleToSeeProjectDetails={props?.unAbaleToSeeProjectDetails}
          open={props.open}
          onClose={props.onClose}
        />
      );

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
  unAbaleToSeeProjectDetails?: (nationalNum: string) => boolean; //for checking this user able to see project details or not
  redirectTo?: () => void; //for redirect to specific route after login.
};

export default LoginRegister;

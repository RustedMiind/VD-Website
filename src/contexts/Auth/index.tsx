import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { UserStateType } from "redux/reducers/userSlice";
import LoginRegister from "sections/login-register/LoginRegister";

export const AuthContext = createContext<AuthContextType>({
  closeDialog() {},
  dialog: "none",
  openLoginDialog() {},
  openRegisterDialog() {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [dialog, setDialog] = useState<AuthDialogType>("login");
  const [open, setOpen] = useState(false);

  const user = useSelector((state: UserStateType) => state.user);

  const openLoginDialog = () => {
    setDialog("login");
    setOpen(true);
  };
  const openRegisterDialog = () => {
    setDialog("register");
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  console.log(dialog, open);

  return (
    <AuthContext.Provider
      value={{
        closeDialog,
        dialog,
        openLoginDialog,
        openRegisterDialog,
      }}
    >
      {children}
      <LoginRegister
        type={dialog}
        open={open && !user.user}
        onClose={closeDialog}
      />
    </AuthContext.Provider>
  );
}

export type AuthContextType = {
  openRegisterDialog: () => void;
  openLoginDialog: () => void;
  closeDialog: () => void;
  dialog: AuthDialogType;
};

export type AuthDialogType = "login" | "register" | "none";

export default AuthProvider;

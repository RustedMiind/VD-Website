import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import NationalIdInput from "./components/NationalIdInput";
import OtpInputContainer from "./components/OtpInputContainer";
import { isStringAllNumbers } from "methods/isStringAllNumbers";
import axios from "axios";
import api from "methods/api";
import { setTokenCookie, setUserState } from "redux/middlewares/userMiddleware";
import { User } from "types/User";
import { AuthContext } from "contexts/Auth";

function Login(props: PropsType) {
  const [state, setState] = useState<
    "show" | "loading-only" | "hide" | "loading"
  >("hide");
  const [disabled, setDisabled] = useState(true);
  const [nationalNumber, setNationalNumber] = useState("");
  const [error, setError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { openRegisterDialog } = useContext(AuthContext);

  // functions
  function nationalNumberSubmit() {
    // setState("loading");
    // setTimeout(() => {
    //   setState("show");
    // }, 2000);
    setState("loading");
    axios
      .post(api("check"), {
        token: "token",
        imei: "1423425",
        device_type: "ios",
        id: nationalNumber,
        type: "individual",
      })
      .then(() => setState("show"))
      .catch((err) => {
        setState("hide");
        console.log("Raw Err", err);
        setError(err.response.data.message.message);
        openRegisterDialog();
      });
  }
  function otpSubmit() {
    setState("loading-only");
    setTimeout(() => {
      setState("show");
    }, 2000);
    setState("loading-only");
    axios
      .post<{ data: { token: string; client: User } }>(api("confirm"), {
        otp,
        id: nationalNumber,
        type: "individual",
        token: "123",
        imei: "1423425",
        device_type: "ios",
      })
      .then(({ data }) => {
        setState("hide");
        setUserState({ user: data.data.client }, dispatch);
        setTokenCookie(data.data.token);
      })
      .catch((err) => {
        setState("show");
        setOtpError(err.response.data.message);
      });
  }
  function handleNationalIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const condition = isStringAllNumbers(value);
    if (condition) {
      setNationalNumber(value);
      let error: undefined | string;
      if (
        !(
          value.startsWith("10") ||
          value.startsWith("2") ||
          value.startsWith("7") ||
          value.startsWith("4")
        )
      ) {
        error =
          "يجب ان يكون رقم الهوية يبدأ ب 10 او 2 في حالة الفرد, 7 أو 4 في حالة الشركة";
      } else if (!value.length) {
        error =
          "يجب ان يكون رقم الهوية يبدأ ب 10 او 2 في حالة الفرد, 7 أو 4 في حالة الشركة";
      } else {
        error = "";
      }

      if (error) {
        setError(error);
        setDisabled(true);
      } else {
        setError("");
        setDisabled(false);
      }
    }
  }
  function handleOtpChange(e: string) {
    const condition = e.length <= 6 && isStringAllNumbers(e);
    if (condition) setOtp(e);
  }
  function submitHandler(e: React.FormEvent<HTMLFormElement | HTMLDivElement>) {
    e.preventDefault();
    setError("");
    if (state === "hide") nationalNumberSubmit();
    else if (state === "show") otpSubmit();
  }

  return (
    <>
      <Dialog
        maxWidth="md"
        fullWidth
        open={props.open}
        onClose={props.onClose}
        component="form"
        onSubmit={submitHandler}
      >
        <DialogTitle>تسجيل الدخول</DialogTitle>
        <DialogContent sx={{ height: "fit-content" }}>
          {/* <DialogContentText>
      </DialogContentText> */}
          <Stack spacing={2} py={2} overflow={"hidden"}>
            <NationalIdInput
              value={nationalNumber}
              onChange={handleNationalIdChange}
              error={error}
              current={state === "hide"}
            />
            <OtpInputContainer
              value={otp}
              onChange={handleOtpChange}
              current={state === "show" || state === "loading-only"}
              // current={true}
              error={otpError}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <LoadingButton
            size="large"
            loading={state === "loading" || state === "loading-only"}
            loadingPosition="start"
            disabled={disabled}
            // startIcon={<SaveIcon />}
            variant="contained"
            fullWidth
            type="submit"
          >
            تسجيل الدخول
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

type PropsType = { open: boolean; onClose: () => void };

export default Login;

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
import { useState } from "react";
import { useDispatch } from "react-redux";
import NationalIdInput from "./components/NationalIdInput";
import OtpInputContainer from "./components/OtpInputContainer";
import { isStringAllNumbers } from "methods/isStringAllNumbers";

function Login(props: PropsType) {
  const [state, setState] = useState<
    "show" | "loading-only" | "hide" | "loading"
  >("hide");
  const [nationalNumber, setNationalNumber] = useState("");
  const [error, setError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  // functions
  function nationalNumberSubmit() {
    setState("loading");
    setTimeout(() => {
      setState("show");
    }, 2000);
    // axios
    //   .post(api("check"), {
    //     token: "token",
    //     imei: "1423425",
    //     device_type: "ios",
    //     id: nationalNumber,
    //     type: "individual",
    //   })
    //   .then(() => setState("show"))
    //   .catch((err) => {
    //     setState("hide");
    //     console.log("Raw Err", err);
    //     setError(err.response.data.message.message);
    //   });
  }
  function otpSubmit() {
    setState("loading-only");
    setTimeout(() => {
      setState("show");
    }, 2000);
    // requestSetUser(dispatch, {
    //   otp,
    //   token: "token",
    //   imei: "1423425",
    //   device_type: "ios",
    //   id: parseInt(nationalNumber),
    //   type: "individual",
    // })
    //   .then((res) => {
    //     setState("show");
    //     console.log("response", res);
    //   })
    //   .catch((err) => {
    //     setState("show");
    //     console.log(err);
    //     setOtpError(err.response.data.message);
    //   });
  }
  function handleNationalIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    const condition = isStringAllNumbers(e.target.value);
    if (condition) setNationalNumber(e.target.value);
  }
  function handleOtpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const condition =
      e.target.value.length <= 6 && isStringAllNumbers(e.target.value);
    if (condition) setOtp(e.target.value);
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

import { Button, TextField, Typography, Stack } from "@mui/material";
import { current } from "@reduxjs/toolkit";
import OTPInput from "react-otp-input";
import "./login-otp.scss";

function OtpInputContainer(props: PropsType) {
  return (
    <Stack
      sx={{
        transition: "500ms",
        // py: 1,
        ...(props.current
          ? {
              maxHeight: "140px",
              opacity: 1,
              pointerEvents: "all",
            }
          : {
              maxHeight: 0,
              opacity: 0,
              pointerEvents: "none",
            }),
      }}
    >
      <Typography mb={2} variant="body2">
        تم ارسال رمز التحقق علي رقم الهاتف المسجل لدينا
      </Typography>
      {/* <TextField
        autoFocus={props.current}
        value={props.value}
        onChange={props.onChange}
        name="nationalId"
        label="رقم التفعيل المرسل علي الهاتف"
        error={!!props.error}
        helperText={props.error}
      /> */}
      <Stack className="ltr login-otp">
        <OTPInput
          value={props.value}
          onChange={props.onChange}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
        />
      </Stack>
      <Typography>
        لم يصلك كود الدخول؟
        <Button>اعد الارسال</Button>
      </Typography>
    </Stack>
  );
}

type PropsType = {
  current: boolean;
  value: string;
  onChange: (e: string) => void;
  error: string;
};

export default OtpInputContainer;

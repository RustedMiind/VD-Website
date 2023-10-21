import { Button, TextField, Typography, Stack } from "@mui/material";

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
      <TextField
        autoFocus={props.current}
        value={props.value}
        onChange={props.onChange}
        name="nationalId"
        label="رقم التفعيل المرسل علي الهاتف"
        error={!!props.error}
        helperText={props.error}
      />
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
};

export default OtpInputContainer;

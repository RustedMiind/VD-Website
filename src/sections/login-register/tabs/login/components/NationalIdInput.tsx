import { TextField } from "@mui/material";

function NationalIdInput(props: PropsType) {
  return (
    <TextField
      error={!!props.error}
      autoFocus={props.current}
      disabled={!props.current}
      value={props.value}
      onChange={props.onChange}
      name="nationalId"
      label="رقم الهوية"
      helperText={props.error}
    />
  );
}

type PropsType = {
  error: string;
  current: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default NationalIdInput;
